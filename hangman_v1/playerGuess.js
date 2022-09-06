'use strict';

function playerGuess(input) {
    let guessValue = false;
    // const checkStoredWord = storedWord.split('');

    // checkStoredWord.forEach((e) => {
    //     if(input)
    //     console.log(e);
    // });
    if (input === null) {
        input = guessInput.value;
        console.log(input);
    }
    for (let x = 0; x < storedWord.length; x++) {
        if (input === storedWord[x]) {
            console.log(`input: ${input}, storedWord[x] ${storedWord[x]}`);
            guessOutputDash.splice(x, 1, input);
            console.log(guessOutputDash);
            guessDisplay.textContent = guessOutputDash.toString();

            console.log(`correct count: ${correctGuessesCount}`);
            console.log(`correct log: ${input}`);
            guessValue = true;
        }
    }
    // guessValue = false;
    if (correctGuessesCount === storedWordLength) {
        setTimeout(() => {
            alert('You WON');
            reset();
        }, 500);

        return;
    }
    if (incorrectGuessesCount === 6) {
        setTimeout(() => {
            alert('you LOST... Sadface');
            reset();
        }, 500);

        return;
    }
    if (guessValue === false) {
        incorrectGuessesLog.push(input);
        console.log(incorrectGuessesLog);
        incorrect.textContent = incorrectGuessesLog.toString();

        console.log(`I'm inside incorrect`);
        console.log(`incorrect count: ${incorrectGuessesCount}`);
        console.log(`incorrect log: ${incorrectGuessesLog}`);
    }
    if (guessValue === true) {
        correctGuessesCount++;
    } else {
        incorrectGuessesCount++;
    }
    input = null;
    guessInput.value = null;
}
