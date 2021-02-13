const express = require('express');
const tenor = require('../service/tenor')('OWMLPIS31DNU', 'de_DE', 'medium');
const gif = require('../service/gif');
const router = express.Router();

/* GET users listing. */
router.get('/trending', function(req, res, next) {
  tenor.trending().then(function(gifs) {
    res.json(gifs);
  });
});

router.get('/start', function(req, res, next) {
    res.json(gif.getStart());  
});

module.exports = router;
