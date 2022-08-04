'use strict';

const words = ['random', 'word', 'rainbow', 'supermarket', 'celestial'];
let storedWord = '';
let guessOutputDash = [];
let input = null;
let incorrectGuesses = [];

// -- Generate a random word
// -- Store the random word
// -- Build array, same length as random word filled with Dashes.
function randomWord(array) {
    let a = Math.floor(Math.random() * array.length);
    storedWord = array[a];
    for (let y = 0; y < guessOutputDash.length; y++) {
        guessOutputDash.pop();
    }
    for (let x = 0; x < storedWord.length; x++) {
        guessOutputDash.push('_');
    }
    return storedWord;
}
console.log(randomWord(words));
console.log(guessOutputDash);

function playerGuess() {
    if (input == null) {
        input = prompt('Please enter a letter');
    }
    for (let x = 0; x < storedWord.length; x++) {
        if (input === storedWord[x]) {
            guessOutputDash.splice(x, 1, input);
        }
    //     } else if (input !== incorrectGuesses[-1]) {
    //         incorrectGuesses.push(input);
    // }
    console.log(guessOutputDash);
    console.log(incorrectGuesses);
    return input;
}

playerGuess();

//     -- input a guess
//     -- capture the incorrect guess (in guess storage)
//     -- check vs guess amount limit.
//     -- loop over random word and insert at correct index of guessArray.

//     -- mark counter of correctGuesses: When === randomArray.length === WIN
//             else continue back to line 10
//     --

// Get working usiing console.log()

// -- Consider words with multiplle letters that appear more than once.
