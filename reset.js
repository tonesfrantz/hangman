'use strict';

function reset() {
    storedWord = '';
    storedWordLength = '';
    correctGuessesCount = 0;
    incorrectGuessesCount = 10;
    guessOutputDash = [];
    incorrectGuessesLog = [];
    incorrect.textContent = incorrectGuessesLog.toString();
    input = null;
    guessInput.value = null;
    randomWord(words);
}
