let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.guess').value);

  if (!value) {
    displayMessage('The Value is empty');
  } else if (value == secretNumber) {
    displayMessage('Correct Number');
    changeBodyStyle('#60b347');
    changeNumberStatus('30rem', secretNumber);

    if (score > highScore) {
      highScore = score;
      changeHighScoreValue(highScore);
    }
  } else if (value !== secretNumber) {
    wrongCase(value);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing. . .');
  changeNumberStatus('15rem', '?');
  changeScoreValue(score);
  changeGuessValue('');
  changeBodyStyle('#222');
});

const wrongCase = function (value) {
  if (score > 0) {
    displayMessage(
      value > secretNumber
        ? value < secretNumber + 2
          ? 'Too close keep going'
          : 'Too high'
        : value > secretNumber - 2
        ? 'Too close keep going'
        : 'Too low'
    );
    changeScoreValue(--score);
  } else {
    displayMessage('you looose');
  }
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBodyStyle = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};

const changeNumberStatus = function (size, text) {
  document.querySelector('.number').style.width = size;
  document.querySelector('.number').textContent = text;
};

const changeScoreValue = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeGuessValue = function (value) {
  document.querySelector('.guess').value = value;
};

const changeHighScoreValue = function (value) {
  document.querySelector('.highscore').textContent = value;
};
