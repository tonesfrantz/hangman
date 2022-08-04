'use strict';

const words = ['random', 'word', 'rainbow', 'supermarket', 'celestial'];
let storedWord = '';
let storedWordLength = '';
let correctGuesses = 0;
let guessOutputDash = [];
let input = null;
let incorrectGuesses = [];

const playBtn = document.querySelector('.btn_play');
const guessDisplay = document.querySelector('.guesses');

playBtn.addEventListener('click', () => {
    randomWord(words);
});

function randomWord(array) {
    let a = Math.floor(Math.random() * array.length);
    storedWord = array[a];
    // guessDisplay.textContent = '';
    storedWordLength = storedWord.length;
    guessOutputDash = [];
    for (let x = 0; x < storedWord.length; x++) {
        guessOutputDash.push('_');
    }
    guessDisplay.textContent = guessOutputDash.toString();
    console.log(storedWord);
    return storedWord;
}

function playerGuess() {
    let guessValue = false;
    if (correctGuesses === storedWordLength) {
        alert('You WON');
        return;
    }
    if (input === null) {
        input = prompt('Please enter a letter');
    }
    for (let x = 0; x < storedWord.length; x++) {
        if (input === storedWord[x]) {
            guessOutputDash.splice(x, 1, input);
            correctGuesses++;
            guessValue = true;
        }
    }
    if (guessValue === false) {
        incorrectGuesses.push(input);
    }
    guessValue = false;
}
playerGuess();

// Have managed to display dashed correctly.
// Next DOM make the inpute work and add the letter to the dashes if correct or display incorrect guessed.
// Create counter for incorrect guesses.
