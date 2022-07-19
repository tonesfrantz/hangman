let randomWord = document.querySelector('.word').textContent;
let guesses = document.querySelector('.guesses').textContent;
let randomWordArray = [];
let input = document.querySelector('.input').value;

const word = [
    'Got',
    'ability',
    'shop',
    'recall',
    'fruit',
    'easy',
    'dirty',
    'giant',
    'shaking',
    'ground',
    'weather',
    'lesson',
    'almost',
    'square',
    'forward',
    'bend',
    'cold',
    'broken',
    'distant',
    'adjective',
    'disolve',
    'orchestra',
];
//Generate random word
const randomWordGen = function (word) {
    let rndNum = Math.trunc(Math.random() * word.length) + 1;
    randomWord = word[rndNum];
    randomWordArray = randomWord.split('');
    let rndWordLength = randomWordArray.length - 1;
    guesses = '';
    for (let i = 0; i <= rndWordLength; i++) {
        guesses += ' █ ';
    }
    document.querySelector('.guesses').textContent = guesses;
    document.querySelector('.word').textContent = randomWord;
    console.log(randomWord);
    console.log(randomWordArray);
    return randomWord;
};
randomWordGen(word);

//PLAYER INPUT VALUE
document.querySelector('.submit').addEventListener('click', function (e) {
    input = document.querySelector('.input').value;
    let inputLowerCase = input.toLowerCase();
    checkPlayerInput(inputLowerCase);
    console.log(inputLowerCase);
});

//Check player input
const checkPlayerInput = function (playerInput) {
    for (let i = 0; i <= randomWordArray.length; i++) {
        if (playerInput === randomWordArray[i]) {
            console.log(i);
            // console.log(addStr(guesses, i, playerInput));
            document.querySelector('.guesses').textContent = guesses;
            console.log(guesses);
            console.log('Winner');
        } else {
            console.log('Loser!');
        }
    }
};

function addStr(str, index, stringToAdd) {
    guesses =
        str.substring(0, index) +
        stringToAdd +
        str.substring(index + 1, str.length - 1);
    return guesses;
}
