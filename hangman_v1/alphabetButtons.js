window.addEventListener('load', function (windowLoadE) {
    var p, letter, button, holder;
    holder = document.getElementById('buttonsHolder');
    for (var i = 65; i <= 90; i++) {
        if (i == 65 || i == 75 || i == 84) {
            p = document.createElement('p');
        }
        letter = String.fromCharCode(i);
        button = document.createElement('button');
        button.innerHTML = letter;
        button.setAttribute('data-letter', letter);
        button.onclick = function (e) {
            setLetter(this.getAttribute('data-letter'));
            this.setAttribute('disabled', true);
        };
        p.appendChild(button);
        if (i == 74 || i == 83 || i == 90) {
            holder.appendChild(p);
        }
    }
    let { initialDrawing } = canvasCreator();
    //initialDrawing would draw the frame
    initialDrawing();
});
function setLetter(letter) {
    input = letter.toLowerCase();
    playerGuess(input);

    // var div = document.getElementById('name');
    // div.innerHTML = div.innerHTML + letter;
}
