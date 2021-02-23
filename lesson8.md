<!-- .slide: id="lesson8" -->

# Basic Frontend - Spring 2020

Lesson 8, Tuesday, 2020-09-22

---

### Solution number guessing game

```js
let numberOfTries = 0;

// This function is called every time the user guesses a new number
function onGuess(guessedNumber) {
  numberOfTries++;
  if (guessedNumber === secretNumber) {
    printOnScreen(
      "You got the correct number! It took you " + numberOfTries + " tries."
    );
    document.body.style.backgroundColor = "green";
  } else if (guessedNumber > secretNumber) {
    printOnScreen("The correct number is lower. Try again.");
  } else if (guessedNumber < secretNumber) {
    printOnScreen("The correct number is higher. Try again.");
  }
  console.log("user guessed: " + guessedNumber);
}
```

---

<!-- .slide: id="lesson8:loops" -->

## Loops

---

### Loops

We use loops to run the same code in our programs repeatedly.

Types of loops we will look at today:

- while loops
- for loops

---

![loops](images/loop_js-02-farm.png)

<!-- from: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code -->

---

### While loop

A `while` loop repeats its body while its `condition` is `true`:

```js
while (condition) {
  // body is executed while "condition" is true
  console.log("Hello from while loop");
}
```

---

### While loop

```js
let bitesOfChocolate = 0;

while (bitesOfChocolate < 10) {
  bitesOfChocolate++;
  console.log("Bites of chocolate: " + bitesOfChocolate);
  console.log("Still hungry.");
}
```

As long as we have had less than 10 bites of chocolate, we will have one more and console.log that we're still hungry.

---

### While loop

A while loop might execute zero to unlimited times:

```js
let isHungry = false; // we just ate
while (isHungry) {
  eat(); // this is never reached!
}
```

---

### While loop

Always make sure that a `while` loop's condition is eventually set to `false`.
Otherwise your loop will run infinitely.

```js
let bitesOfChocolate = 0;

while (bitesOfChocolate < 10) {
  console.log("Bites of chocolate: " + bitesOfChocolate);
  console.log("Still hungry.");
}
  // this code will print "Bites of chocolate: 0" and "Still hungry" until your laptop
  // runs out of battery, you kill the process
  // by closing the browser, you reboot or the universe ends
}

while (isHungry) {
  goRunning(); // going running makes us more hungry
  // loop won't terminate!!!
}
```

---

### Counting

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

---

### Counting - solution

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

```js
let i = 1; // initialize i with 1
while (i < 6) {
  // repeat this loop until we reach 6
  console.log(i);
  i++; // increment i at every step
}
```

---

### Quiz

What will this loop output?

```js
let i = 0;
while (i < 2) {
  console.log(i);
}
```

Answer: 0, until you run out of battery<!-- .element: class="fragment" -->

---

### Quiz

- How many times will the loop run?

```js
let i = 10;
while (i < 15) {
  console.log(i);
  i++;
}
```

Answer: 5 times<!-- .element: class="fragment" -->

---

### Exercises

- Output your name five times
- Output the squares of the first 10 numbers starting with 1 (1, 4, 9, 16, ...)
- Output the sum of the first 10 numbers starting with 1

---

### Exercises - Solutions

Output your name five times

```js
let i = 0;
while (i < 5) {
  console.log("Luise");
  i++;
}
```

Squaring the first 10 numbers

```js
let i = 1;
while (i < 11) {
  console.log(i * i); // or i ** 2
  i++;
}
```

---

### Exercises - Solutions

Outputting the sum of the first 10 numbers

```js
let i = 1;
let sum = 0;
while (i < 11) {
  sum += i;
  i++;
}
console.log(sum);
```
