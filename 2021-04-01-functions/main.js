// Exercise 1 - Background Color

function blueButtonClicked() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "darkblue";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
}

function greenButtonClicked() {
    if (document.body.style.backgroundColor === "lightgreen") {
        document.body.style.backgroundColor = "darkgreen";
    } else {
        document.body.style.backgroundColor = "lightgreen";
    }
}

// Exercise 2 - Font Size

let fontSize = 1;

function increaseFontSize() {
    fontSize += 0.1;
    document.body.style.fontSize = fontSize + "em";
}

function decreaseFontSize() {
    fontSize -= 0.1;
    document.body.style.fontSize = fontSize + "em";
}

function resetFontSize() {
    fontSize = 1;
    document.body.style.fontSize = fontSize + "em";
}

// Exercise 3 - Easter Egg Hunt

// from MDN, gets a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let easterEggId = getRandomInt(1, 6); // random number between 1 and 5
let clickCount = 0;

function openEgg(id) {
    clickCount++;

    if (id === easterEggId) {
        document.body.style.backgroundColor = "yellow";
        console.log("Number of attempts before finding egg:", clickCount);
    } else {
        document.body.style.backgroundColor = "";
    }
}

function newGame() {
    document.body.style.backgroundColor = "";
    easterEggId = getRandomInt(1, 6);
    clickCount = 0;
}
