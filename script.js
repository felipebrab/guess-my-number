'use strict';

let secretNumber = randonNumber();
let score = 20;
let highscore = 0;

function randonNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (
    !guess ||
    Number(document.querySelector('.guess').value) > 20 ||
    Number(document.querySelector('.guess').value) < 1
  ) {
    displayMessage('No valid number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.highscore').textContent = Number(
      document.querySelector('.score').value
    );
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randonNumber();
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
