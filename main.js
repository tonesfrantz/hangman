'use strict';

const words = [
    'zoom',
    'feel',
    'random',
    'word',
    'rainbow',
    'supermarket',
    'celestial',
    'southern',
];
let storedWord = '';
let storedWordLength = '';
let correctGuessesCount = 0;
let incorrectGuessesLogCount = 0;
let guessOutputDash = [];
let input = null;
let incorrectGuessesLog = [];

const playBtn = document.querySelector('.btn_play');
const guessBtn = document.querySelector('.btn_submit');
const guessDisplay = document.querySelector('.guesses');
const guessInput = document.querySelector('.input');
const incorrect = document.querySelector('.incorrect');

playBtn.addEventListener('click', () => {
    randomWord(words);
});
guessBtn.addEventListener('click', () => {
    playerGuess();
});

// Attempting testing, need assistance.
// module.exports = {
//     randomWord: randomWord(words),
// };

function randomWord(array) {
    let a = Math.floor(Math.random() * array.length);
    storedWord = array[a];
    guessDisplay.textContent = '';
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

    if (input === null) {
        input = guessInput.value;
        console.log(input);
    }
    for (let x = 0; x < storedWord.length; x++) {
        if (input === storedWord[x]) {
            console.log(`hello`);
            guessOutputDash.splice(x, 1, input);
            console.log(guessOutputDash);
            guessDisplay.textContent = guessOutputDash.toString();
            correctGuessesCount++;
            console.log(`correct count: ${correctGuessesCount}`);
            console.log(`correct log: ${input}`);
            guessValue = true;
        }
    }

    if (guessValue === false) {
        incorrectGuessesLog.push(input);
        console.log(incorrectGuessesLog);
        incorrect.textContent = incorrectGuessesLog.toString();
        incorrectGuessesLogCount++;
        console.log(`incorrect count: ${incorrectGuessesLogCount}`);
        console.log(`incorrect log: ${incorrectGuessesLog}`);
    }
    guessValue = false;
    if (correctGuessesCount === storedWordLength) {
        alert('You WON');
        return;
    }
    input = null;
    guessInput.value = null;
}
// playerGuess();

// Write some tests.
// - Testing suite for Javascript. (mocha or chai?)

// Have managed to display dashed correctly.

// Next DOM make the inpute work and add the letter to the dashes if correct or display incorrect guessed.
// Create counter for incorrect guesses.
// Refactor all if and for.
// Rename variables & functions.

//
