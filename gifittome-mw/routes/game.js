const gameService = require('../service/game');
const express = require('express');
const router = express.Router();
const path = require('path');
const { route } = require('./tenor');

/* GET users listing. */
router.get('/create', function (req, res, next) {
  let ids = gameService.create();
  res.cookie('game', ids).json(ids);
});

router.get('/:gameId/join', function (req, res, next) {
  var ids = {
    gameId: req.params.tagId,
    playerId: gameService.generatePlayerId()
  };

  res.cookie('game', ids);
  sendIndex(res);  
});

router.get('/*', function (req, res, next) {
  
  sendIndex(res);
});

function sendIndex(res) {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '/../../ui/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '/../../gifittome-ui/dist/gifittome/index.html'));
  }
}

// router.post('/:id/join', function (req, res, next) {
//   let game = gameService.get(req.params.id);
//   if (game) {
//     game.addPlayer(req.body.player);
//   } else {
//     res.send('Invalid Game Id'); //@todo response code
//   }
// });

// //@todo gameId check in funktion
// router.get('/:id/round', function (req, res, next) {
//   let game = gameService.get(req.params.id);
//   if (game) {
//     let centerCard = game.startRound();
//     res.json(centerCard);
//   } else {
//     res.send('Invalid Game Id'); //@todo response code
//   }
// });

// router.post('/:id/round', function (req, res, next) {
//   let game = gameService.get(req.params.id);
//   if (game) {
//     let centerCard = game.startRound();
//     res.json(centerCard);
//   } else {
//     res.send('Invalid Game Id'); //@todo response code
//   }
// });

module.exports = router;
