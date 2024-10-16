"use strict";

//funzioni che vanno ad evitare ripetizione del codice

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function(number){
    document.querySelector(".number").textContent = number;
};


//variabili
//genera un numero tra 1 e 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
//tentativi possibili
let score = 20;
//best score inizialmente impostata su 0
let highscore = 0;



//funzione che gestisce il gioco
document.querySelector(".check ").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //se guess non inserisce un input
  if (!guess) {
    displayMessage("No number!");
    //se guess inserisce il numero corretto
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //se guess inserisce un numero più alto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        //se guess inserisce un numero     più alto      più basso
        guess > secretNumber ? "Too high!" : "Too low!";
      score--;
      displayScore(score);
        }
    //se guess inserisce per 20 volte il numero sbagliato
    else {
      displayMessage("You lost!");
      displayScore(0);
      displayNumber(secretNumber);      
      document.querySelector("body").style.backgroundColor = "#FF0000 ";
    }
  }
});



//funzione che gestisce il reset del gioco
document.querySelector(".again ").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayScore(score);
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");

  displayNumber('?');
    document.querySelector("body").style.backgroundColor = "#222";
});
