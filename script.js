'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉';

console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.number').textContent = 13);

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMsg = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  // when there is no input value
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMsg('No number!');

    // When player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct No!';
    displayMsg('Correct No!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess no. is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High ' : 'Too low 📉';
      displayMsg(guess > secretNumber ? '📈 Too High ' : 'Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost The game';
      displayMsg('You lost The game');

      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess value is greater
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost The game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess value is lower
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost The game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again button

document.querySelector('.again').addEventListener('click', function () {
  //  Restoring initial values

  score = 20; // resetting score variable
  document.querySelector('.score').textContent = score;

  // resetting secretNumber value
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // restoring message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMsg('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  // restoring styles

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
