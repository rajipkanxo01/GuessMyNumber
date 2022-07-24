const randomNumber = Math.ceil(Math.random() * 20);
let score = 20;

function checkNumber() {
  let guessedNumber = Number(document.querySelector('.guess').value);

};



document.querySelector('.check').addEventListener('click', checkNumber);