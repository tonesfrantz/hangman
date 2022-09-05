'use strict';

function reset() {
    playBtn.textContent = 'Reset';
    disabledRemove();
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

function disabledRemove() {
    let button = document.querySelectorAll('button');
    button.forEach((e) => {
        e.disabled = false;
    });
}
