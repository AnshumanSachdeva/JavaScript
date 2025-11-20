let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const guessField = document.querySelector('#guessField');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessField.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
        prevGuess.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`🎉 You guessed right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`⬆️ Number is too low!`);
    } else if (guess > randomNumber) {
        displayMessage(`⬇️ Number is too high!`);
    }
}

function displayGuess(guess) {
    guessField.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    guessField.value = '';
    guessField.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        guessField.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    });
}
