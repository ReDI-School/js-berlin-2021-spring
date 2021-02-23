<!-- .slide: id="lesson4" -->

# Basic Frontend - Spring 2020

Lesson 4, Thursday, 2020-09-03


---

### Recap

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `a && !b`<br />`x >= 5 && x < 15` |
| Combined Operators | `+= -= *= /= ++ --` | `a *= 2`<br />`count++` |


---

### Quiz time!

What is the value of `isDogOlder`?

```js
let myAge = 42;
let dogAge = 6;

let isDogOlder = dogAge * 7 > myAge;
```

```js
let isDogOlder = 42 > 42; // false
```
<!-- .element: class="fragment" -->


---

### Quiz time!

```js
let myAge = 42;
let dogAge = 6;

// one year passes...
myAge++;
dogAge++;

let isDogOlder = dogAge * 7 > myAge; // what's the value?
```

```js
// dogAge is now 7, myAge is now 43
let isDogOlder = 49 > 43; // true
```
<!-- .element: class="fragment" -->

---


<!-- .slide: id="lesson4:if" -->
# Conditional Statements


---


### Conditional Statements

Up until now, we wrote code line by line.

But what if I want to run some code only if a certain condition is true or false? For example, only run code when the user is logged in?


---


### If statement

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```


---


### If statements

```js
if (condition) {
  // your code here
}
```

* `condition` must be a boolean
* The code in the block is __only__ executed if the boolean is `true`
* If the boolean is false, the code block is _not_ executed


---


### if Statements - Examples

```js
if (food === 'pizza') {
  console.log('My favorite!');
}
```

```js
if (money < 1000000) {
  console.log('You are not rich :p');
}
```

```js
if (canSpeakRussian) { // same as: canSpeakRussian === true
  console.log('Привет!');
}
```

---

### if statements - quiz

What does the code below output to `console.log`?

```js
let language = "German";

if (language === "German") {
  console.log("Guten Tag");
}
if (language === "French") {
  console.log("Bonjour");
}
```

```js
"Guten Tag" // first condition is true
```
<!-- .element: class="fragment" -->

---

### if statements - quiz

What does the code below output to `console.log`?

```js
let language = "Spanish";

if (language === "German") {
  console.log("Guten Tag");
}
if (language === "French") {
  console.log("Bonjour");
}
if (language !== "German" && language !== "French") {
  console.log("Good day");
}
```

```js
"Good day" // last condition is true
```
<!-- .element: class="fragment" -->


---


### Code Blocks: {}

Code blocks contain the code between `{` and `}`, and should be indented for better readability:

```js
if (language === "German") {
  // In VSCode, you can indent code by pressing the "Tab" key,
  // or right-click and choose "Format Document"
  console.log("Guten Tag");
}
```


---


### Code Blocks: {}

All variables created in code blocks will disappear after closing the block (technical term: “block scope”)

```js
let name = "John Doe";

if (name === "John Doe") {
  let greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  let greeting = "Hello my dear";
}

console.log(greeting); // ERROR!!!!
```


---


### Code Blocks: {}

Correct solution:

```js
let name = "John Doe";

let greeting;
if (name === "John Doe") {
  greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  greeting = "Hello my dear";
}

console.log(greeting); // "Hi dude"
```


---


### Quiz

What does it print?

```js
let food = "broccoli";

if (food === "pizza") {
    console.log("yum yum");
}
```

Solution: Nothing, since the condition in the `if` is `false`
<!-- .element: class="fragment" -->

---


### Quiz

What does it print?

```js
let age = 42;

if (age >= 18) {
    console.log("you are allowed to drive a car");
}
if (age < 18) {
    console.log("you are not allowed to drive a car");
}
```

Solution: Condition is `true`, so it prints "you are allowed to drive a car"
<!-- .element: class="fragment" -->

---

### If...Else

```js
if (condition) {
  // some code
  // will execute if condition is true
} else {
  // other code
  // will execute if condition is false
}
```


---


### If...Else example

```js
if (temperature > 25) {
  console.log("Go swimming");
} else {
  console.log("Go biking");
}
```


---

### More on the quiz

Can you change the code to use `if else`?

```js
let age = 42;

if (age >= 18) {
    console.log("you are allowed to drive a car");
}
if (age < 18) {
    console.log("you are not allowed to drive a car");
}
```

---

### Solution

Can you change the code to use `if else`?

```js
let age = 42;

if (age >= 18) {
    console.log("you are allowed to drive a car");
} else {
    console.log("you are not allowed to drive a car");
}
```

---

### If...Else-If...Else example

```js
if (day === 'Saturday') {
  console.log('Do all the shopping.');
} else if (day === 'Sunday') {
  console.log('Relax!');
} else {
  console.log('Wake up and go to work!');
}
```

Only one code block is executed in the `if..else if..else`. To determine which block, JavaScript will evaluate the conditions from top to bottom. The first condition that evaluates to true determines the block to be executed. All the other code blocks are ignored.

---

You can use [code-to-graph](https://crubier.github.io/code-to-graph/?code=aWYgKGRheSA9PT0gJ1NhdHVyZGF5JykgewogIGNvbnNvbGUubG9nKCdEbyBhbGwgdGhlIHNob3BwaW5nLicpOwp9IGVsc2UgaWYgKGRheSA9PT0gJ1N1bmRheScpIHsKICBjb25zb2xlLmxvZygnUmVsYXghJyk7Cn0gZWxzZSB7CiAgY29uc29sZS5sb2coJ1dha2UgdXAgYW5kIGdvIHRvIHdvcmshJyk7Cn0) for visualization:

![if-else](images/if-else.svg)<!-- .element height="500px" width="100%" style="background-color: #999999" -->

---

### Exercise

<!-- .slide: style="font-size:80%" -->

* Make three if statements
  * Make a "Good day" greeting if the hour is less than 18
  * Make a statement that only says “Hello” to someone with your name.
  * Make a statement that prints "I am younger" if your age is less than your neighbor's
* Describe the weather based on the temperature:
  * Above 30
  * Above 20
  * Above 5
  * Everything else


---

### Is this correct?

```js
let temperature = 7;

if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
```

Look at it in [code-to-graph](https://crubier.github.io/code-to-graph/?code=bGV0IHRlbXBlcmF0dXJlID0gNzsKCmlmICh0ZW1wZXJhdHVyZSA-IDIwKSB7CiAgY29uc29sZS5sb2coIml0J3Mgd2FybSIpOwp9IGVsc2UgaWYgKHRlbXBlcmF0dXJlID4gMzApIHsKICBjb25zb2xlLmxvZygidG9vIGhvdCEhISIpOwp9IGVsc2UgaWYgKHRlbXBlcmF0dXJlID4gNSkgewogIGNvbnNvbGUubG9nKCJwZXJmZWN0LiIpOwp9IGVsc2UgewogIGNvbnNvbGUubG9nKCJpdCdzIGEgYml0IGNoaWxseS4iKQp9Cg), can you find the bug?

Try with a temperature of 35, what does it print? <!-- .element: class="fragment" -->


---


### Correct solution

```js
let temperature = 35;

if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
```

---


### Let's code!

Abdullah invented a game where the player with the highest score wins. The score is the player's height (in cm) plus five times the player's age.

1. Create variables for the heights and ages for you and a person next to you
1. Calculate the scores for you and your neighbor
1. Decide who wins, print the winner and their score to the console. Remember: there can be a draw (both players with the same score).


---


```js
let myAge = 42;
let myHeight = 160;
let player1Age = 35;
let player1Height = 174;
let myScore = myHeight + (5 * myAge);
let player1Score = player1Age + (5 * player1Height);
if (myScore > player1Score) {
    console.log("I win!");
} else if (myScore < player1Score) {
    console.log("I lost :(");
} else {
    console.log("It's a draw!");
}
```

---

### Homework

Let's go shopping!

We need bread (2 EUR). If there's enough money left, we also need milk (1 EUR). Finally, if enough money is left, we also need cheese (3 EUR). Create a variable called `money` and initialize it with a number, for example `5`.

Write the products that you shopped to `console.log` and how much money is left after shopping. Try running your code with different amounts of money.

Try to solve it yourself. Go to the next slide if you're stuck and need help.

---

### Hint

So, at every step, we first need to check whether we have enough money. If we do have enough money, shop the article and _reduce_ the article's cost from the remaining money:

```js
let money = 5;
let costOfBread = 2;
if (money >= costOfBread) {
  console.log("We shopped bread");
  money -= costOfBread;
}

// same for the other two products
```
