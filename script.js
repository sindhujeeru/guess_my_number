'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 guessed correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '🤕📉 Number is too low!';
    score--;
    checkScore(score);
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '🤕📈 Number is too high!';
    score--;
    checkScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});

function checkScore(sco) {
  if (sco >= 0) {
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '😫 You lost the game!';
  }
}
