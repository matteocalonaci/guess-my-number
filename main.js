'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

document.querySelector('.check ').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
//se guess non inserisce un input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
//se guess inserisce il numero corretto
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore

    }
//se guess inserisce un numero più alto
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //se guess inserisce per 20 volte il numero sbagliato
     else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#FF0000 ';
    }
//se guess inserisce un numero più basso
  } else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      }
      //se guess inserisce per 20 volte il numero sbagliato
    else {
        document.querySelector('.message').textContent = 'You lost!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#FF0000 ';
        }
        }
});

document.querySelector('.again ').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score ;       
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
})
 
