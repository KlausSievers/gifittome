const randomString = require('./randomString');
const socketIo = require('socket.io');
const gifService = require('./gif');
const cardService = require('./cards');
const RoundStatus = require('./roundStatus');
var db = require('./database');

const runningGames = {};


let io = socketIo(8083);

//@todo multiplexing with game id
io.on('connection', socket => {
  console.log('New Socket connected');

  socket.on('/game/join', (msg, reply) => {
    console.log('Try to join game ' + msg.gameId);
    var game = get(msg.gameId);
    var name = msg.player.name;
    var playerId = msg.player.id;

    if (game) {
      if (!game.active) {
        console.log(name, ' joined the game');
        let result = game.addPlayer(playerId, name, socket);
        if (result) {
          socket.join(game.id);
          replySuccess(reply, game);
        } else {
          replyError(reply, 'name is already in use', msg);
        }
      } else {
        replyError(reply, 'game already started', msg);
      }
    } else {
      replyError(reply, 'Invalid game id', msg);
    }
  });

  socket.on('/game/start', (msg, reply) => {
    var game = get(msg.gameId);
    if (game) {
      if (!game.active) {
        let player = Object.keys(game.player);
        if (player.length >= 3) {
          game.start();
          game.startRound();

          //  der Spaß muss an jeden spielger gesendet werden!!!

          replySuccess(reply, game);
        } else {
          replyError(reply, 'num player must be at least 3', msg);
        }
      } else {
        replyError(reply, 'game already started', msg);
      }
    } else {
      replyError(reply, 'Invalid game id', msg);
    }
  });

  socket.on('resubscribe', (msg, reply) => {
    let gameId = msg.gameId;
    let playerToResubscribe = msg.player;

    var game = get(gameId);
    if (game) {
      let player = game.player[playerToResubscribe];
      if (player) {
        socket.join(game.id);
        player.updateSocket(socket);

        if (game.hostId === player.id) {
          player.makeHost();
        }

        if (game.currentRound.status === RoundStatus.CHOOSE_GIF) {
          if (game.choosingPlayer.name === player.name) {
            player.onGifSelected();
          }
        } else if (game.currentRound.status === RoundStatus.CHOOSE_CARDS) {
          player.onCardSelected();
        } else if (game.currentRound.status === RoundStatus.REVEAL_CARDS) {
          if (game.choosingPlayer.name === player.name) {
            player.onCardRevealed();
          }
        } else if (game.currentRound.status === RoundStatus.CHOOSE_WINNER) {
          if (game.choosingPlayer.name === player.name) {
            player.onWinnerSelected();
          }
        } else if (game.currentRound.status === RoundStatus.START_NEXT_ROUND) {
          player.onNextRoundVote();
        }
      }
    }
  });

});

function replySuccess(reply, game) {
  reply({ error: false, game: game.getGameToSend() });
}

function replyError(reply, reason, data) {
  reply({
    error: true,
    reason: reason,
    data: data
  });
}

function Game(hostId) {
  do {
    this.id = randomString(10);
  } while (runningGames[this.id]);

  this.hostId = hostId;
  this.dbId = null;
  this.player = {};
  this.host = null;
  this.playerOrder = [];
  this.choosingPlayerIdx = 0;
  this.choosingPlayer = null;
  this.playedGifs = [];
  this.playedCards = [];
  this.round = 0;
  this.active = false;
  this.openedCards = 0;
  this.nextRoundCount = 0;
  this.stock = cardService.getStock(20);
  this.currentRound = null; //choosing player and played cards koennen noch hier rein. muessen dann aber vor dem request raus genommen bzw. getplayerto send gemach werden
}

Game.prototype.start = function () {
  this.active = true;
  this.playerOrder = Object.values(this.player);

  this.saveGame();

  //not needed in freestyle mode
  // this.playerOrder.forEach(p => {
  //   p.giveCards(5);
  // });
  this.sendGameUpdate();
};

Game.prototype.getNextCards = function (count) {
  return this.stock.splice(0, count);
};

Game.prototype.getGifsToSelect = function (count) {
  let gifs = [];
  let gifIds = [];

  for (let i = 0; i < count; i++) {
    let gif = null;
    do {
      gif = gifService.random();
    } while (this.playedGifs.includes(gif.id) || gifIds.includes(gif.id));
    gifs.push(gif);
    gifIds.push(gif.id);
  }
  return gifs;
}


Game.prototype.startRound = function () {
  var gifsToSelect = this.getGifsToSelect(3);

  this.round++;
  this.openedCards = 0;

  this.choosingPlayer = this.getNextChoosingPlayer();
  this.playedCards = [];
  this.currentRound = {
    status: RoundStatus.CHOOSE_GIF,
    gif: null,
    gifsToSelect: gifsToSelect,
    choosingPlayer: this.choosingPlayer.getPlayerToSend(),
    playedCards: {},
    nextRound: {},
    revealedCards: []
  };

  this.choosingPlayer.onGifSelected();

  this.sendGameUpdate();
  io.in(this.id).emit('start-round', this.currentRound);
};

Game.prototype.getNextChoosingPlayer = function () {
  this.choosingPlayerIdx++;
  if (this.choosingPlayerIdx >= this.playerOrder.length) {
    this.choosingPlayerIdx = 0;
  }

  return this.playerOrder[this.choosingPlayerIdx];
};

Game.prototype.onGifSelected = function (gif, player, reply) {
  this.currentRound.gif = gif;
  this.currentRound.status = RoundStatus.CHOOSE_CARDS;
  this.playedGifs.push(gif.id);

  for (let i = 0; i < this.playerOrder.length; i++) {
    let p = this.playerOrder[i];
    if (this.choosingPlayerIdx !== i) {
      p.onCardSelected();
    }
  }

  this.sendGameUpdate();
  io.in(this.id).emit('start-choosing-cards', this.currentRound);
};

Game.prototype.onCardSelected = function (card, player, reply) {
  player.socket.removeAllListeners('card-selected');
  this.playedCards.push({
    player: player,
    card: card,
    isOpen: false
  });

  this.currentRound.playedCards[player.name] = true;

  console.log(this.playedCards.length + '. card played', card);

  if (this.playedCards.length === this.playerOrder.length - 1) {
    this.currentRound.status = RoundStatus.REVEAL_CARDS;

    for (let i = 0; i < this.playerOrder.length - 1; i++) {
      this.currentRound.revealedCards.push({ _value: '' });
    }

    console.log('All players added their card');
    this.resetPlayerStatus();

    shuffle(this.playedCards);

    this.sendGameUpdate();
    io.in(this.id).emit('reveal-cards', {});

    this.choosingPlayer.onCardRevealed();
  } else {
    this.player[player.name].okay = true;
    this.sendGameUpdate();
  }

  replySuccess(reply, this);
};

Game.prototype.onCardRevealed = function (revealMsg) {
  console.log('card-revealed', revealMsg);
  if (!this.playedCards[revealMsg.index].isOpen) {
    this.openedCards++;
    let toOpen = this.playedCards[revealMsg.index];
    toOpen.isOpen = true;
    toOpen.card.index = revealMsg.index;

    this.currentRound.revealedCards[revealMsg.index] = {
      value: this.playedCards[revealMsg.index].card['_value']
    };


    io.in(this.id).emit('card-revealed', toOpen.card);

    if (this.allCardRevealed(this.openedCards)) {
      this.currentRound.status = RoundStatus.CHOOSE_WINNER;

      this.choosingPlayer.socket.removeAllListeners('card-revealed');
      this.choosingPlayer.socket.emit('start-voting', {});

      this.choosingPlayer.onWinnerSelected();
    }
  }
};

Game.prototype.allCardRevealed = function (openedCards) {
  return openedCards === this.playerOrder.length - 1;
};

Game.prototype.onWinnerSelected = function (winnerMsg) {
  let winningCard = this.playedCards[winnerMsg.index];
  let winningPlayer = winningCard.player;
  this.player[winningPlayer.name].won++;

  this.currentRound.status = RoundStatus.START_NEXT_ROUND;
  this.currentRound.winner = winningCard.player.getPlayerToSend();

  for (let i = 0; i < this.playerOrder.length - 1; i++) {
    this.currentRound.revealedCards[i].player = this.playedCards[i].player.name;
  }

  this.saveRound(winningCard, this.playedCards);

  this.sendWinnerSelected(winningCard, this.playedCards);
  this.startNextRoundVoting();
};

Game.prototype.sendGameUpdate = function (msg) {
  io.in(this.id).emit('game-update',
    {
      msg: msg, game:
        this.getGameToSend()
    });
};

Game.prototype.sendWinnerSelected = function (winningCard) {
  io.in(this.id).emit('winner-selected', {
    cards: this.playedCards.map((c) => {
      return {
        player: c.player.name,
        value: c.card._value
      };
    }),
    game: this.getGameToSend(),
    winner: {
      player: winningCard.player.name,
      value: winningCard.card._value
    }
  });
};

Game.prototype.startNextRoundVoting = function () {
  this.nextRoundCount = 0;
  let playerArr = Object.values(this.player);
  playerArr.forEach(p => {
    p.onNextRoundVote();
    p.socket.on('next-round-vote', () => {
      if (!p.okay) {
        p.socket.removeAllListeners('next-round-vote');
        p.okay = true;

        this.currentRound.nextRound[p.name] = true;

        this.nextRoundCount++;
        console.log('Round count: ', this.nextRoundCount);
        if (this.nextRoundCount === playerArr.length) {
          this.resetPlayerStatus();
          this.startRound();
        } else {
          this.sendGameUpdate();
        }
      }
    });
  });
};

Game.prototype.onNextRoundVote = function (p) {
  this.currentRound.nextRound[p.name] = true;
  let playerArr = Object.values(this.player);

  this.nextRoundCount++;
  console.log('Round count: ', this.nextRoundCount);
  if (this.nextRoundCount === playerArr.length) {
    this.resetPlayerStatus();
    this.startRound();
  } else {
    this.sendGameUpdate();
  }
}

Game.prototype.resetPlayerStatus = function () {
  Object.values(this.player).forEach(p => {
    p.okay = false;
  });
};

Game.prototype.kick = function (player, reply) {
  let msg = player.name + ' was kicked by ' + this.host.name + '. ';
  msg += this.removePlayer(player);
  replySuccess(reply, this);
  this.sendGameUpdate(msg);
};

Game.prototype.leaveGame = function (player, reply) {
  let msg = player.name + ' has left the game. ';
  msg += this.removePlayer(player);
  console.log(msg);
  replySuccess(reply, this);
  this.sendGameUpdate(msg);
};

Game.prototype.removePlayer = function (player) {
  this.player[player.name].socket.removeAllListeners();
  this.player[player.name].socket.leave(this.id);

  delete this.player[player.name];

  let wasChoosingPlayer = this.playerOrder[this.choosingPlayerIdx].name === player.name;
  let wasHost = this.host.name === player.name;

  let idx = this.playerOrder.findIndex((p) => p.name === player.name);
  if (idx > -1) {
    this.playerOrder.splice(idx, 1);
  }

  let msg = '';
  if (this.playerOrder.length <= 2) {
    //@todo Spiel beenden
  } else {
    if (wasChoosingPlayer) {
      //@todo hier wird noch Spieler uebersprungen, dadurch, dass der choosingPlayerIdx erhoeht wird
      this.startRound();
      msg += player.name + ' was the choosing player. We start a new round. ';
    }

    if (wasHost) {
      this.host = this.playerOrder[0];
      this.host.makeHost();
      msg += player.name + ' was the host. Congratulation to ' + this.host.name + " on the promotion";
    }
  }

  return msg;
};

Game.prototype.saveGame = function () {
  let insert = 'INSERT INTO `Game` (`playercount`) VALUES (' + this.playerOrder.length + ');';
  let selectId = 'SELECT LAST_INSERT_ID() as lastId;';

  let self = this;
  db.query(insert, function (err, result, fields) {
    if (err) {
      console.log("Game not saved");
      console.error(err);
    }
    else {
      db.query(selectId, function (err, result, fields) {
        if (err) {
          console.log("Could not select id to Game");
          console.error(err);
        }
        else {
          self.dbId = result[0].lastId;
        }
      });
    }
  });
};

Game.prototype.saveRound = function (winningCard) {
  if (this.dbId) {
    let insertRound = 'INSERT INTO `Round` (`gameId`, `gifId`) VALUES (' + this.dbId + ',' + this.playedGifs[this.playedGifs.length - 1] + ');';
    //@todo klappt nicht wenn viele hintereinander eingefuegt werden, 
    //zb. bei meheren spielen oder fuer die gewinnerkarte
    let selectId = 'SELECT LAST_INSERT_ID() as lastId;';

    let self = this;
    db.query(insertRound, function (errInsertGame, resultInsertGame, fieldsInsertGame) {
      if (errInsertGame) {
        console.log("Round not saved");
        console.error(errInsertGame);
      }
      else {
        db.query(selectId, function (errSelectRoundId, resultSelectRoundId, fieldsSelectGameId) {
          if (errSelectRoundId) {
            console.log("Could not select id to Round");
            console.error(errSelectRoundId);
          }
          else {
            let roundId = resultSelectRoundId[0].lastId;

            self.playedCards.forEach((card) => {
              let insertCard = "INSERT INTO `Card` (`roundId`, `text`) VALUES (" + roundId + ",'" + card.card._value + "');";

              db.query(insertCard, function (errInsertCard, resultInsertCard, fieldsInsertCard) {
                if (errInsertCard) {
                  console.log("Card not saved");
                  console.error(errInsertCard);
                }
                else {
                  if (card.player === winningCard.player) {
                    db.query(selectId, function (errSelectCardId, resultSelectCardId, fieldsSelectCardId) {
                      if (errSelectCardId) {
                        console.log("Could not select id to Card");
                        console.error(errSelectCardId);
                      }
                      else {
                        let winningCardId = resultSelectCardId[0].lastId;
                        let updateRound = 'UPDATE `Round` SET `winnerCard` = ' + winningCardId + ' WHERE `id` = ' + roundId;
                        db.query(updateRound, function (errUpdateRound, resultUpdateRound, fieldsUpdateRound) {
                          if (errUpdateRound) {
                            console.log("Could not set winnerCard in round " + round);
                            console.error(errUpdateRound);
                          }
                          else {
                            console.log('winnerCard set');
                          }
                        });
                      }
                    });
                  }
                }
              });
            });
          }
        });
      }
    });
  }
}


function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

Game.prototype.finish = function () {
  delete runningGames[this.id];
  io.in(this.id).emit('finish', this.player);
};

Game.prototype.addPlayer = function (id, name, socket) {
  if (!this.player[name]) {
    let player = new Player(id, name, this, socket);
    this.player[name] = player;
    if (this.hostId === id) {
      this.host = player;
      this.host.makeHost();
    }
    let gameToSend = this.getGameToSend();
    io.in(this.id).emit('player-joined', {
      newPlayer: name,
      game: gameToSend
    });
    return true;
  }
  return false;
};

Game.prototype.getCurrentRound = function () {
  return this.currentRound;
};

Game.prototype.getPlayer = function (id) {
  id = parseInt(id);
  let player = Object.values(this.player).find(function (p) {
    return p.id === id;
  });

  if (player) {
    return player.getPlayerToSend();
  } else {
    return null;
  }
};

Game.prototype.getGameToSend = function () {
  let playerToSend = Object.values(this.player).map((p) => {
    return p.getPlayerToSend();
  });

  return {
    id: this.id,
    host: this.host.getPlayerToSend(),
    player: playerToSend,
    active: this.active,
    round: this.round
  };
};

function Player(id, name, game, socket) {
  this.id = id;
  this.name = name;
  this.game = game;
  this.won = 0;
  this.cards = [];
  this.okay = false;

  this.updateSocket(socket);
}

Player.prototype.updateSocket = function (socket) {
  this.socket = socket;
  let self = this;
  this.socket.on('game/leave', (msg, reply) => {
    self.game.leaveGame(self, reply);
  });
};

Player.prototype.onGifSelected = function () {
  this.socket.on('gif-selected', (gif, reply) => {
    this.game.onGifSelected(gif, this, reply);
  });
};

Player.prototype.onCardSelected = function () {
  this.socket.on('card-selected', (card, reply) => {
    this.game.onCardSelected(card, this, reply);
  });
};

Player.prototype.onCardRevealed = function () {
  this.socket.on('card-revealed', (revealMsg) => {
    this.game.onCardRevealed(revealMsg);
  });
};

Player.prototype.onWinnerSelected = function () {
  this.socket.on('winner-selected', (winnerMsg) => {
    this.socket.removeAllListeners('winner-selected');
    this.game.onWinnerSelected(winnerMsg);
  });
};

Player.prototype.onNextRoundVote = function () {
  this.socket.on('next-round-vote', () => {
    if (!this.okay) {
      this.socket.removeAllListeners('next-round-vote');
      this.okay = true;
      this.game.onNextRoundVote(this);
    }
  });
}

Player.prototype.giveCards = function (count) {
  this.cards = this.cards.concat(this.game.getNextCards(count));
  this.socket.emit('new-cards', this.cards);
};

Player.prototype.getPlayerToSend = function () {
  return {
    id: this.id,
    name: this.name,
    won: this.won,
    okay: this.okay
  };
};

Player.prototype.makeHost = function () {
  let self = this;
  this.socket.on('game/kick', (msg, reply) => {
    self.game.kick(msg, reply);
  });
};

function create() {
  let hostId = generatePlayerId();
  let game = new Game(hostId);
  runningGames[game.id] = game;
  console.log('New Game created ' + game.id);
  return {
    gameId: game.id,
    playerId: hostId
  };
}

function get(id) {
  return runningGames[id];
}


function generatePlayerId() {
  return Math.floor(Math.random() * 10000);
}

module.exports = {
  get: get,
  create: create,
  generatePlayerId: generatePlayerId
};