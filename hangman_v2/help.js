function listen(get) {
    console.log(this);
    get.style.backgroundColor = 'red';
    get.innerHTML = 'Hii GFG , How r u???';
}

function listen(this) {
        this.style.backgroundColor = 'red';
        this.innerHTML = "Hii GFG , How r u???"
    }