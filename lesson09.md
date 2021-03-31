<!-- .slide: id="lesson9" -->

# Basic Frontend - Spring 2021

Lesson 9, Thursday, 2021-04-01

---

### Warmup quizzes :)

What does this program output to console?

```js
function sayHello() {
  console.log("Hello!");
}
```

Nothing. We never call the function!<!-- .element: class="fragment" -->

---

```js
function sayHello(name) {
  let result = "Hello " + name;
}

console.log(sayHello("Harald"));
```

`undefined`<!-- .element: class="fragment" -->

---

Could you think of a better name for `foo`?

```js
function foo(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

let result = foo(4, 5);
```

`minimum`<!-- .element: class="fragment" -->

---

### Solutions from lesson 8

Create a function that calculates the `square` of a number:

```js
function square(num) {
  return num ** 2; // or: num * num
}
```

---

Write a function called `celsiusToFahrenheit`:

```js
function celsiusToFahrenheit(degreesInCelsius) {
  let degreesInFahrenheit = degreesInCelsius * 1.8 + 32;
  return degreesInFahrenheit;
}
```

---

Create a function that takes a day of the week and returns a message depending on the day:

```js
function messageOfTheDay(day) {
  if (day === "Monday") {
    return "Sucks";
  }
  if (day === "Friday") {
    return "Almost Weekend!";
  }
  if (day === "Saturday" || day === "Sunday") {
    return "Yippee!!!";
  }
  return "It's OK.";
}
```

---

### Variable lifetime

```js
let greeting = "Hello";

if (greeting === "Hello") {
  let name = "Sevtap";
  console.log(greeting + " " + name);
}
```

What's the lifetime of `greeting` and `name`?

---

- Variables defined inside a code block `{}` exist until the end of the code block
- Variables defined in the global scope (e.g. outside of code blocks) exist until the user closes the page.

---

### HTML and JavaScript

We've learned that we can load a JavaScript file from within HTML:

```html
<script src="main.js"></script>
```

And we can use `console.log` to output values to the debug console.

---

Let's try to actually change something in our web page. The browser defined a lot of variables for us to play with, e.g.:

```js
// set the document's background color by assigning
// a color to this variable:
document.body.style.backgroundColor = "red";
```

You can choose your favorite color from [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

---

We can also change the font size, e.g.:

```js
document.body.style.fontSize = "1.5em";
```

(`em` is a unit in typography, see [https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems))

---

So now we know how to set background color and font size.

All the code that we write in our `main.js` executes when the page loads.

But what if we would like to run some JavaScript code when the user interacts with the HTML page, e.g. clicks a button?

---

We can use `onclick` event:

```html
<button onclick="console.log('hello');">
  Click me!
</button>
```

We can write any JavaScript code in the `onclick` HTML attribute!

---

But do we really want to write all the JavaScript code inside a `onclick` HTML attribute?

What could we use instead?

Functions!<!-- .element: class="fragment" -->

---

Try it!

HTML:

```html
<button onclick="mySuperFunction()">Click me!</button>
```

JavaScript:

```js
function mySuperFunction() {
  console.log("My button was clicked!!!!");
}
```

Bonus: Can you output how often your button as clicked?

---

Solution:

```js
let clickCount = 0;
function mySuperFunction() {
  clickCount++;
  console.log("Number of clicks:", clickCount);
}
```

---

Let's practice!

- Add a button and when the user clicks the button, set the background color to `lightblue`
- Add another button that sets the background color to `lightgreen` when clicked

- Bonus: Add a "dark" mode! If the background color is already `lightblue` and the user clicks your first button, set the color to `darkblue`. Same with `lightgreen` and `darkgreen`

---

- Add a button that increases the font size by `0.1` em
- Add a button that decreases the font size by `0.1` em

- Bonus: Add a button that resets the font size back to normal (1 em)

---

### Bonus / Homework

Create an easter egg hunting game! Add 5 buttons, choose one button which contains the easter egg. If the user presses that button, change the background color to your favorite color, otherwise, set the background color to default (empty string).

BONUS: Add a button that resets the game and chooses a random button to be the easter egg button (see next slide)

BONUS: Print on `console` how many times the user clicked before he found the easter egg

---

### Generate a random integer

Generates a random integer between min (inclusive) and max (exclusive):

```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

From: [MDN](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

---

To get a random integer between 1 and 5:

```js
getRandomInt(1, 6);
```
