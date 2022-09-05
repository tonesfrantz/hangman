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
let incorrectGuessesCount = 10;
let guessOutputDash = [];
let input = null;
let incorrectGuessesLog = [];

const playBtn = document.querySelector('.btn_play');
const guessBtn = document.getElementById('buttonsHolder');
const guessDisplay = document.querySelector('.guesses');
const guessInput = document.querySelector('.input');
const incorrect = document.querySelector('.incorrect');
const canvas = document.getElementById('canvas');

playBtn.addEventListener('click', () => {
    reset();
});
guessBtn.addEventListener('click', () => {
    playerGuess();
});

// Attempting testing, need assistance.
// module.exports = {
//     randomWord: randomWord(words),
// };

// playerGuess();

// Write some tests.
// - Testing suite for Javascript. (mocha or chai?)

// Have managed to display dashed correctly.

// Next DOM make the inpute work and add the letter to the dashes if correct or display incorrect guessed.
//  --- Create counter for incorrect guesses.
// Refactor all if and for.
// Rename variables & functions.

// --- Reset function - make button reset.
// --- Display last letter before displaying WIN or LOSE pop up alerts.

// --- Create buttons for every letter

// Carry on with completeing the hangman diagram
// Create the Win/Lose Module
// Clean up CSS so it looks great.
