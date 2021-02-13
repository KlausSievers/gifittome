const gameService = require('../service/game');
const express = require('express');
const router = express.Router();
const path = require('path');

//@todo alle routen die index zurueckliefern vereinheitlichen
router.get('/privacy', function (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '/../../ui/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '/../../gifittome-ui/dist/gifittome/index.html'));
  }
});

router.get('/legal', function (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '/../../ui/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '/../../gifittome-ui/dist/gifittome/index.html'));
  }
});

module.exports = router;
