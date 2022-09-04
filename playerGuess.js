'use strict';

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
        incorrectGuessesCount--;
        console.log(`incorrect count: ${incorrectGuessesCount}`);
        console.log(`incorrect log: ${incorrectGuessesLog}`);
    }
    guessValue = false;
    if (correctGuessesCount === storedWordLength) {
        alert('You WON');
        reset();
        return;
    }
    if (incorrectGuessesCount === 0) {
        alert('you LOST... Sadface');
        reset();
        return;
    }
    input = null;
    guessInput.value = null;
}
