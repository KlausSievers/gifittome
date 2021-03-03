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

router.get('/:gameId', function (req, res, next) {
  let gameId = req.params.gameId;
  res.json(gameService.get(gameId).getGameToSend());
});

router.get('/:gameId/round', function (req, res, next) {
  let gameId = req.params.gameId;
  res.json(gameService.get(gameId).getCurrentRound());
});

router.get('/:gameId/player/:playerId', function (req, res, next) {
  let gameId = req.params.gameId;
  let playerId = req.params.playerId;
  res.json(gameService.get(gameId).getPlayer(playerId));
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

module.exports = router;
