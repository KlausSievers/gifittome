const tenor = require('../service/tenor')('OWMLPIS31DNU', 'de_DE', 'medium');

var database = [];
var startGifs = [];

// var startGifs = [];

tenor.trending(100).then(function(gifs) {
  database = database.concat(gifs);
});

tenor.search('gif').then(function(gifs) {
  startGifs = startGifs.concat(gifs);
});

function random() {
  let randomNumber = Math.random();
  let calc = Math.floor(randomNumber * database.length);
  console.log(randomNumber + ' - '+database.length + ' - '+calc);
  return database[calc];
}

function getStart() {
  return startGifs;
}

module.exports = {
  random: random,
  getStart: getStart
};