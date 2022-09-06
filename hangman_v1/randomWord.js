'use strict';

function randomWord(array) {
    let a = Math.floor(Math.random() * array.length);
    storedWord = array[a];
    guessDisplay.textContent = '';
    storedWordLength = storedWord.length;
    guessOutputDash = [];
    for (let x = 0; x < storedWord.length; x++) {
        guessOutputDash.push(' _ ');
    }
    guessDisplay.textContent = guessOutputDash.toString();
    console.log(storedWord);
    return storedWord;
}
