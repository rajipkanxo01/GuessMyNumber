let randomNumber = Math.ceil(Math.random() * 20);
let score = 20;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
// document.querySelector('.number').textContent = randomNumber;


function checkNumber() {
  let guessedNumber = Number(document.querySelector('.guess').value);
  // if not a number
  if (!guessedNumber) {
    displayMessage('Not A Number');
  } else {

    // if number is greater than 20
    if (guessedNumber > 20) {
      displayMessage('Number should be between 1 and 20')
    }

    // win condition
    else if (guessedNumber === randomNumber) {
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.number').style.width = '260px';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.highscore').textContent = score;
      displayMessage('Correct Number!');

      // number not matched condition
    } else if (guessedNumber !== randomNumber) {

      // if score is more than 1
      if (score > 1) {
        displayMessage(guessedNumber > randomNumber ? 'Number is too high!' : 'Number is too low!');
        score--;
        document.querySelector('.score').textContent = score;
      }

      // if score is less than 1
      else {
        displayMessage('You Lost The Game!');
        document.querySelector('body').style.backgroundColor = '#8b0000';
      }
    }
  }
};


// reset game when again button is clicked
function resetGame() {
  randomNumber = Math.ceil(Math.random() * 6);
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '180px';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
}



document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);