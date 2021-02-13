let allCards = [
  { value: 'Best Prank ever' },
  { value: 'I like the way you think' },
  { value: 'Ups' },
  { value: 'Happy Mothersday' },
  { value: 'May the force be with you' },
  { value: 'You sexy bitch' },
  { value: 'Cutie with a booty' },
  { value: 'When I send a flirty text to a girl and she replies with just "lol"' },
  { value: 'Waiting an your response is like' },
  { value: 'Blablaism' },
  { value: 'Excuse me, why are you so sexy' },
  { value: 'Take me, i`m yours' },
  { value: 'This can be us' },
  { value: 'Love me, kiss me, fuck me' },
  { value: 'You + Me = ' },
  { value: 'You are on my list to do' },
  { value: 'Wet yet again' },
  { value: 'Let`s get sexy' },
  { value: 'Feeling it baby' },
  { value: 'Yummy' },
  { value: 'When your black friend calls you nigger for the first time' },
  { value: 'When you thought your dickhead boss wast late, but you just found out he´s dead' },
  { value: 'When you eat a bunch of Mexican food and your butthole fiels like cannon on fire' },
  { value: 'When you fart in someones car an your looking whom giving the blame' },
  { value: 'When you are hangeng out with a couple an they start fighting' },
  { value: 'When you realize that song you always skipped ist actually on fire' },
  { value: 'When you masturbatet the 5th time this day and it is not even lunch' },
  { value: 'When your mum enters the room while you are having sex. Anal.' },
  { value: 'When you ask the D.J. to play happy birthday for a friend.' },
  { value: 'It could have been longer' },
  { value: 'Mr. Gorbatschow, tear down this wall!' },
  { value: 'I`ve been looking for freedom' },
  { value: 'When your mum has a camel toe and you can´t stop staring at it.' },
  { value: 'When you invite her to Netflix & chill and she actually wants to watch Netflix' },
  { value: 'This is trivial' },
  { value: 'Make America great again' },
  { value: 'I voted leave' },
  { value: 'They will pay hundret percent for that wall' },
  { value: 'Grap them by the pussy' },
  { value: 'This is fake news' },
  { value: 'Guess what motherfucker' }
];

function fillStock(num) {
  var stock = [];
  var indezes = Array.from(Array(allCards.length).keys());

  for(let i = 0; i < num; i++) {
    let rnd = Math.random() * indezes.length;
    let idxInIndezes = Math.floor(rnd);
    stock.push(allCards[indezes[idxInIndezes]]);
    indezes.splice(idxInIndezes, 1);
  }

  return stock;
}

function shuffle(stock){
  var j, x, i;  
  for (i = stock.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = stock[i];
      stock[i] = stock[j];
      stock[j] = x;
  }
}

function getStock(num) {
  var stock = fillStock(num);
  shuffle(stock);

  return stock;
}

module.exports = {
  getStock: getStock
}