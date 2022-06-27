'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = document.querySelector('.highscore').textContent;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const enteredNumber = Number(document.querySelector('.guess').value);
  console.log(enteredNumber, typeof enteredNumber);
  if (!enteredNumber) {
    document.querySelector('.message').textContent = 'No Number';
  } else {
    if (score > 1) {
      if (enteredNumber === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent =
          'Yayy, Correct Number !!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      } else if (enteredNumber > secretNumber) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (enteredNumber < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'Aww, you lost';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
