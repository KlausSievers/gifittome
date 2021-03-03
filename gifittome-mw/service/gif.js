const tenor = require('../service/tenor')('OWMLPIS31DNU', 'de_DE', 'medium');

let database = [];

let startGifIds = [11204510, 8174489, 13272822, 9052182, 11084136, 11207973, 14160675, 9318225, 4797869, 4820489, 4712943, 13568243,5141332, 10442694, 6238397, 4604404, 13378216];
let startGifs = [];

tenor.trending(100).then(function(gifs) {
  database = database.concat(gifs);
});

tenor.gifs(startGifIds).then(function(gifs) {
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