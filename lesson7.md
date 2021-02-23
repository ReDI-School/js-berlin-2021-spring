<!-- .slide: id="lesson7" -->

# Basic Frontend - Fall 2020

Lesson 7, Thursday, 2020-09-17

---

### Solution bonus 1

JS:

```js
function changeBackgroundColor(color) {
  if (document.body.style.backgroundColor === color) {
    document.body.style.backgroundColor = "light" + color;
  } else {
    document.body.style.backgroundColor = color;
  }
}
```

---

### Solution bonus 2

JS:

```js
function turnBackgroundDark() {
  let currentColor = document.body.style.backgroundColor;
  if (currentColor === "pink" || currentColor === "lightpink") {
    document.body.style.backgroundColor = "hotpink";
  } else if (currentColor === "blue" || currentColor === "lightblue") {
    document.body.style.backgroundColor = "darkblue";
  } else if (currentColor === "green" || currentColor === "lightgreen") {
    document.body.style.backgroundColor = "darkgreen";
  }
}
```

---

### JavaScript, Functions, HTML

Imagine the following JavaScript file being loaded in the `<body>` of the HTML page. When and what does it print?

```js
console.log("blah");
console.log("blah");
console.log("blah");
```

It prints "blah blah blah" the moment the page is fully loaded<!-- .element: class="fragment" -->

---

But what about all the code that needs to run later?

We write it inside functions<!-- .element: class="fragment" -->

---

### Warmup

1. Create a new directory.
1. Create a new HTML file and a new JavaScript file.
1. Load the JavaScript file in the `<body>` of the HTML file
1. Create a button in the HTML file
1. When you click the button, output to console how often the button was clicked

Example: First button click, it prints "1". Third button click, it prints "3", and so on.

---

HTML:
```html
<button onclick="buttonClicked()">Click me</button>
```

JavaScript:
```js
let clickCount = 0;
function buttonClicked() {
    clickCount++;
    console.log(clickCount);
}
```

---

### Number guessing game

You're a member of an international team of game programmers. Your teammates already developed the frontend and some utility functions for a number guessing game.

The game chooses a "secret" number between 1 and 100. The user guesses a number and the game tells the user whether the secret number was guessed correctly. If not, it tells the user whether the secret number is larger or smaller than the guessed number.

---

The following slides contain the code from your team members. You can also find them at https://jsbin.com/xisevog/edit?html,css,js and copy/paste the code to a new directory. Continue developing the game in VSCode.

Can you finish the game?

---

`index.html`:
```html
  <h1>Guess the Number</h1>
  <div id="game"></div>
  <p>Type in a number:</p>
  <div><input id="number" type="number" size="30" placeholder="enter number"/></div>
  <button id='button' onclick='onGuess(Number(document.getElementById("number").value))'>Guess</button>
```

`style.css`:
```css
body {
  font-family: system-ui;
  background: #f06d06;
  color: white;
  text-align: center;
}
```

---

```js
// This function returns a random number between 1 and 100
function randomNumber() {
  return Math.ceil(Math.random() * 100);
}

// This function takes a string as single parameter and outputs it to HTML
function printOnScreen(value) {
  let game = document.getElementById("game");
  let line = document.createElement("div");
  line.textContent = value;
  game.appendChild(line);
};

// This variable contains the secret number that the user needs to guess
let secretNumber = randomNumber();

// This function is called every time the user guesses a new number
function onGuess(guessedNumber) {
    // TODO - call printOnScreen function with a string
    // informing the user whether the secret number is
    // smaller, larger or equal
    console.log("user guessed: " + guessedNumber);
}
```

---

### Bonus / Homework

* When the secret number was found, tell the user how many tries were needed. Example "You had to guess 10 times to find the secret number".
* When the user found the correct number, change the background color.
