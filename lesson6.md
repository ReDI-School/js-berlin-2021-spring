<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2020

Lesson 6, Tuesday, 2020-09-15

---

## Recap

---

### Recap - If statements

```js
if (temperature >= 30) {
  console.log("Go swim");
} else if (temperature >= 20) {
  console.log("Go play soccer");
} else if (temperature < 0) {
  console.log("Go ice skating");
}
```

What does it print when the temperature is 35, 20, 15 and -3?

Quiz: How can we log "Go bike" for any other temperature?<!-- .element: class="fragment" -->

---

### Recap - If statements

```js
if (temperature >= 30) {
  console.log("Go swim");
} else if (temperature >= 20) {
  console.log("Go play soccer");
} else if (temperature < 0) {
  console.log("Go ice skating");
} else {
  console.log("Go bike");
}
```

---

### rules of if else if else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3 ...
- If one of the conditions evaluates to true, JavaScript will execute its code block AND IGNORE EVERYTHING ELSE
- If none of the conditions evalute to true AND there is an else statement, JavaScript will execute the else's code block

---

### Quiz

What do you notice about the code below?

```js
let t1 = ((12 - 32) * 5) / 9;
let t2 = ((15 - 32) * 5) / 9;
```

It's quite hard to understand what it is doing and it is repetitive.<!-- .element: class="fragment" -->
What could we do to make this piece of code more readable?<!-- .element: class="fragment" -->
Use a function :)<!-- .element: class="fragment" -->

---

### Solution

What does the code below do?

```js
function fahrenheitToCelsius(degrees) {
  return ((degrees - 32) * 5) / 9;
}

let t1 = fahrenheitToCelsius(12);
let t2 = fahrenheitToCelsius(15);
```

---

### Quiz

What does this code output to the console when we run it?

```js
function greet() {
  console.log("Hello world!");
}
```

Answer: Nothing. We never call greet.<!-- .element: class="fragment" -->

---

### Quiz

What does this code output to console when we run it?

```js
function add(a, b) {
  return a + b;
}

let c = add(2, 2);
console.log(c);
console.log(b);
console.log(a);
```

Answer: 4, error, error - a und b only exist inside the function!<!-- .element: class="fragment" -->

---

### Quiz - what does it print?

```js
function greeting(name) {
  let output = "Hello " + name;
}

greeting("World");
console.log(output);
```

Answer: Error. output is only visible inside the function<!-- .element: class="fragment" -->

---

### Quiz - what does it print?

```js
function greeting(name) {
  return "Hello " + name;
}

let output = greeting("World");
console.log(output);
```

Answer: "Hello World"<!-- .element: class="fragment" -->

---

## A glimpse of JavaScript + HTML

---

### My first interactive Webpage!

Create a new folder
Create a html file `index.html` and point to the JS file `main.js`:

```html
&lt;html>
  &lt;body>
    <script src="main.js"></script>
  &lt;/body>
&lt;/html>
```

Create the JS file `main.js`:

```js
console.log("Hello class!");
```

---

### onclick

HTML elements have an [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) attribute that executes JavaScript code, e.g.:

```html
<button onclick="alert('You have clicked the button');">Click me!</button>
```

---

### onclick

- Writing source code in HTML is not so great.
- What did we learn so far so we can write code in JavaScript, but only execute it when a button is clicked?
- Functions! <!-- .element: class="fragment" -->

---

### onclick

Let's add a new function to our JavaScript file:

```js
function onButtonClick() {
  alert("You have clicked the button");
  console.log("Button has been clicked!");
}
```

So how can we call our function every time our button gets clicked?

---

### onclick

JavaScript:

```js
function onButtonClick() {
  alert("You have clicked the button");
  console.log("Button has been clicked!");
}
```

HTML:

```html
<button onclick="onButtonClick()"></button>
```

Try it - click your button, what happens?

---

### onclick

Let's do something with our HTML page when the button is clicked:

```js
function onButtonClick() {
  document.body.style.backgroundColor = "red";
}
```

- What happens when you click your button?
- What is `document.body.style.backgroundColor`?
- In short: It's a variable defined by the browser that contains the current background color. <!-- .element: class="fragment" -->

---

### Exercise

<!-- .slide: style="font-size:70%" -->

Let's make a color changing webpage.

- Add three buttons to your HTML
- Set their text to "pink", "green" and "blue"
- When a button is clicked, set the background of the page to that color
  - Example: "green" button sets the `backgroundColor` to "green".
- BONUS: When the button is clicked a second time, set the color to its light version.
  - Example: Blue is clicked and the background is blue, set `backgroundColor` to "lightblue".
- BONUS2: Add a new button with text "dark" that changes the current color to its dark variant.
  - Example: The page is currently `red` or `lightRed`, change it to `darkRed`

---

### Solution

HTML:

```html
<button onclick="changeBackgroundColor('pink')">Pink</button>
<button onclick="changeBackgroundColor('green')">Green</button>
<button onclick="changeBackgroundColor('blue')">Blue</button>
```

JS:

```js
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
```
