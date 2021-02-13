const randomString = require('./randomString');
const socketIo = require('socket.io');
const gifService = require('./gif');
const cardService = require('./cards');
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
  this.playedGifs = [];
  this.playedCards = [];
  this.round = 0;
  this.active = false;
  this.openedCards = 0;
  this.stock = cardService.getStock(20);
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


Game.prototype.startRound = function () {
  var gif = null;
  do {
    gif = gifService.random();
  } while (this.playedGifs.includes(gif.id));

  this.round++;
  this.playedGifs.push(gif.id);
  this.openedCards = 0;

  let choosingPlayer = this.getNextChoosingPlayer();
  let cards = [];
  for (let i = 0; i < this.playerOrder.length; i++) {
    let p = this.playerOrder[i];
    if (this.choosingPlayerIdx !== i) {
      p.socket.on('card-selected', (card, reply) => {
        this.onCardSelected(cards, card, p, choosingPlayer, reply);
      });
    }
  }

  this.sendGameUpdate();
  io.in(this.id).emit('start-round', {
    gif: gif,
    choosingPlayer: choosingPlayer.getPlayerToSend()
  });
  return gif;
};

Game.prototype.getNextChoosingPlayer = function() {
  this.choosingPlayerIdx++;
  if(this.choosingPlayerIdx >= this.playerOrder) {
    this.choosingPlayerIdx = 0;
  }

  return this.playerOrder[this.choosingPlayerIdx];
}

Game.prototype.onCardSelected = function (cards, card, player, choosingPlayer, reply) {
  player.socket.removeAllListeners('card-selected');
  cards.push({
    player: player,
    card: card,
    isOpen: false
  });

  console.log(cards.length + '. card played', card);

  if (cards.length === this.playerOrder.length - 1) {
    console.log('All players added their card');
    this.resetPlayerStatus();

    shuffle(cards);

    this.sendGameUpdate();
    io.in(this.id).emit('reveal-cards', {});

    choosingPlayer.socket.on('card-revealed', (revealMsg) => {
      this.onCardRevealed(revealMsg, choosingPlayer, cards);
    });
  } else {
    this.player[player.name].okay = true;
    this.sendGameUpdate();
  }

  replySuccess(reply, this);
};

Game.prototype.onCardRevealed = function (revealMsg, choosingPlayer, cards) {
  console.log('card-revealed', revealMsg);
  if (!cards[revealMsg.index].isOpen) {
    this.openedCards++;
    let toOpen = cards[revealMsg.index];
    toOpen.isOpen = true;
    toOpen.card.index = revealMsg.index;

    io.in(this.id).emit('card-revealed', toOpen.card);

    if (this.allCardRevealed(this.openedCards)) {
      choosingPlayer.socket.removeAllListeners('card-revealed');
      choosingPlayer.socket.emit('start-voting', {});

      choosingPlayer.socket.on('winner-selected', (winnerMsg) => {
        choosingPlayer.socket.removeAllListeners('winner-selected');
        this.onWinnerSelected(winnerMsg, cards);
      });
    }
  }
};

Game.prototype.allCardRevealed = function (openedCards) {
  return openedCards === this.playerOrder.length - 1;
};

Game.prototype.onWinnerSelected = function (winnerMsg, cards) {
  let winningCard = cards[winnerMsg.index];
  let winningPlayer = winningCard.player;
  this.player[winningPlayer.name].won++;

  this.saveRound(winningCard, cards);

  this.sendWinnerSelected(winningCard, cards);
  this.startNextRoundVoting();
};

Game.prototype.sendGameUpdate = function (msg) {
  io.in(this.id).emit('game-update',
    {
      msg: msg, game:
        this.getGameToSend()
    });
};

Game.prototype.sendWinnerSelected = function (winningCard, cards) {
  io.in(this.id).emit('winner-selected', {
    cards: cards.map((c) => {
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
  let nextRoundCount = 0;
  let playerArr = Object.values(this.player);
  playerArr.forEach(p => {
    p.socket.on('next-round-vote', () => {
      if (!p.okay) {
        p.socket.removeAllListeners('next-round-vote');
        p.okay = true;
        nextRoundCount++;
        console.log('Round count: ', nextRoundCount);
        if (nextRoundCount === playerArr.length) {
          this.resetPlayerStatus();
          this.startRound();
        } else {
          this.sendGameUpdate();
        }
      }
    });
  });
};

Game.prototype.resetPlayerStatus = function () {
  Object.values(this.player).forEach(p => {
    p.okay = false;
  });
};

Game.prototype.kick = function (player, reply) {
  let msg = player.name + ' was kicked by ' + this.host.name+'. ';
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

Game.prototype.removePlayer = function(player) {
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
      msg +=  player.name + ' was the choosing player. We start a new round. ';
    }

    if(wasHost) {
      this.host = this.playerOrder[0];
      this.host.makeHost();
      msg +=  player.name + ' was the host. Congratulation to '+this.host.name+" on the promotion";
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

Game.prototype.saveRound = function (winningCard, cards) {
  if (this.dbId) {
    let insertRound = 'INSERT INTO `Round` (`gameId`, `gifId`) VALUES (' + this.dbId + ',' + this.playedGifs[this.playedGifs.length - 1] + ');';
    //@todo klappt nicht wenn viele hintereinander eingefuegt werden, 
    //zb. bei meheren spielen oder fuer die gewinnerkarte
    let selectId = 'SELECT LAST_INSERT_ID() as lastId;';

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

            cards.forEach((card) => {
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
  this.socket = socket;
  this.won = 0;
  this.cards = [];
  this.okay = false;

  let self = this;
  socket.on('game/leave', (msg, reply) => {
    self.game.leaveGame(self, reply);
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

Player.prototype.makeHost = function() {
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