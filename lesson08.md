<!-- .slide: id="lesson8" -->

# Basic Frontend - Spring 2021

Lesson 8, Tuesday, 2021-03-30

---

### Lesson overview

- review bookstore exercise
- function recap
- benefits of using functions
- function parameters
- return statement vs console.log()
- practice

---

<!-- .slide: id="functions" -->

# Functions

---

### Why we need functions

- to add custom functionalities to JavaScript 
- to group code together
- to avoid repetition 
- to easily repeat set of instructions
- to organise our code better
- to hide complexity

---

### Example: introduce yourself

```js
let melanieIntroduction = "Hello, my name is Melanie. I come from Germany and my favorite food is broccoli";
let marcoIntroduction = "Hello, my name is Marco. I come from Italy and my favorite food is cheese";
let nataliaIntroduction = "Hello, my name is Natalia. I come from Spain and my favorite food is lentils";

console.log(melanieIntroduction);
console.log(marcoIntroduction);
console.log(nataliaIntroduction);
```


---

### Example: introduce yourself

```js
function introduceYourself(name, originCountry, favouriteFood) {
    let message = "Hello, my name is " + name + ". I come from " + originCountry + " and my favorite food is " + favouriteFood;
    return message;
}

let melanieIntroduction = introduceYourself("Melanie", "Germany", "broccoli");
let marcoIntroduction = introduceYourself("Marco", "Italy", "cheese");
let nataliaIntroduction = introduceYourself("Natalia", "Spain", "lentils");

console.log(melanieIntroduction);
console.log(marcoIntroduction);
console.log(nataliaIntroduction);
```

---

### Example: introduce yourself

What important differences do you notice between the two versions?

Which version do you think is better?

Why?

---


### Example: introduce yourself

To better understand the benefit of using functions, imagine you have to do the simple task of changing the message from using "Hello" to "Hi".

With functions, you have to change the code only in one place.


---

### Example: introduce yourself

Benefits of using function:

- we added a new custom functionality to JavaScript
- by wrapping some code in a function, we removed all the repetitions from the first example
- to easily repeat set of instructions
- we hid the "complexities"

---

### Hide complexities

We've used `console.log()` pretty often during those weeks.

Do you have any idea of how it works?

Neither do I.
<!-- .element: class="fragment" -->

We are still able to use it without any problem.
<!-- .element: class="fragment" -->

---

### Hide complexities

In real life we don't have to know how things work in order to use them:

- turning on a car
- using a computer
- making a phone call

We perform a simple operation (pressing a button, turning a key) without needing to worry about what happens behind the scenes. 

The inner complexities are hidden from us. To an extent, this is what happens with functions.

---

### Avoid repetitions 

One of the biggest benefits is probably the ability to group many lines of code together and easily execute them as many times as we want without having to write the whole code again.

```js
function maximumOf3(value1, value2, value3) {
    let max = value1;
    if (value2 > max) {
        max = value2;
    } 
    if (value3 > max) {
        max = value3;
    }
    return max;
}
```

---

### Avoid repetitions 

Now I can easily call my function `maximumOf3()` as many times as I want, for any number I want, without repeating the whole code inside.

```js
let max1 = maximumOf3(4, 10, -2);
let max2 = maximumOf3(100, 7, 833);
let max3 = maximumOf3(340, 1000, 0);
```

---

### Function: a definition

So, what's a function?

A function is a reusable block of code.
<!-- .element: class="fragment" -->

The same way in which a variable contains a value, a function contains `code`.
<!-- .element: class="fragment" -->

---

### Functions: execution

Code is executed by JavaScript line by line.

When some code is inside a function, we have to explicity "call" that function in order to execute the code inside.

How do we call a function?

We write the name of the function followed by open and closed parenthesis.
<!-- .element: class="fragment" -->

---

### Exercise 

1. create a function called `sum`
1. this function can take in two parameters called `a` and `b`
1. inside the function, calculate the sum of `a` and `b` and save it in a variable called `result`
1. return `result`
1. call the function with two numerical values and save the result in a variable
1. print the result to the console

BONUS: if you finish in time, do the same with a function `multiply`

---

### Function: recap quiz 

- how do we define a function?
<!-- .element: class="fragment" -->
- how do we call a function?
<!-- .element: class="fragment" -->
- what are parameters?
<!-- .element: class="fragment" -->
- how many parameters can a function have?
<!-- .element: class="fragment" -->
- how do we pass a value to parameters?
<!-- .element: class="fragment" -->
- how do we get a result from functions?
<!-- .element: class="fragment" -->

---

### return statement 

What does this print?

```js
function sum(a, b) {
    let result = a + b;
}

let total = sum(4, 5);
console.log("The total is:", total);
```

A function with no return statement, returns `undefined` by default.
<!-- .element: class="fragment" -->

---

### return statement 

What happens inside a function, stays inside the function.

Unless we use return.
<!-- .element: class="fragment" -->

```js
function sum(a, b) {
    let result = a + b;
    return result;
}

let total = sum(4, 5);
console.log("The total is:", total);
```

---

### return statement vs console.log()

What's the value of `total` here?

```js
function sum(a, b) {
    let result = a + b;
    console.log(result);
}

let total = sum(4, 5);
console.log("The total is:", total);
```

Total is `undefined`: `console.log()` is not the same as return, it's a way to check a value in the console.
<!-- .element: class="fragment" -->

---

### return statement vs console.log()

Very often we want to use the result of a function inside of another function.

Let's combine the functions I've created so far:

```js
let total1 = sum(235, 485);
let total2 = sum(27, 382);
let total3 = sum(157, 211);
let max = maximumOf3(total1, total2, total3); 

console.log(max);
```

---

### return statement vs console.log()

In the previous example:

- I use the result of 3 calls to `sum()` in another function
- to do so, I first save the different results in separate variables
    - it means that the total calculated inside the function, must be used outside of it 
- to do so, `sum()` must `return` a value
    - simply using `console.log()` wouldn't work 

---

### Function parameters

In the previous example I passed values to my function using variables.

It's the same principle as when we copy a value from one variable to another.

```js
function sum(a, b) {
    return a + b;
}
let number1 = 5;
let number2 = 10;

let result = sum(number1, number2);
console.log(result);
```

---

### Return statement

Once a function returns, no other code within the function will be executed:

```js
function giveMe5() {
  return 5;
  console.log("I returned 5"); // CODE WILL NEVER EXECUTE!!!
}
```

---

### Return statement

A function can have multiple `return` statements, but only one of them will be executed. The first `return` statement that JavaScript meets exits the function:

```js
function minimumOf2(value1, value2) {
  if (value1 <= value2) {
    return value1;
  } else {
    return value2;
  }
}
```

---

### Exercise 1

Create a function that calculates the `square` of a number

```js
// the function should be used like this
let result = square(2); 
console.log(result); // 4

result = square(3);
console.log(result); // 9

result = square(4);  
console.log(result); // 16
```

---



### Exercise 2

Write a function called `celsiusToFahrenheit`, which takes the degrees in C (celsius), and returns it in F (fahrenheit).

test your function with the values 28 and 31.

Remember:

Fahrenheit = Celsius multiplied by 1.8 plus 32

---

### Exercise 3

Create a function that takes a day of the week and returns a message depending on the day.

Example:

```js
let message = messageOfTheDay('Monday');
console.log(message); // "I hate Mondays"
message = messageOfTheDay('Sunday');
console.log(message); // "Yeee! Weekend!"
message = messageOfTheDay('Tuesday');
console.log(message); // "Well, at least there's class at ReDI"
```

Come up with your own messages!

---

### Exercise 4

Go through all the examples with function you've written so far and try to put function calls directly inside `console.log()`.

For example:

```js
console.log(sum(2, 3));
```

Does it work?

Why?

Can you explain it?

---
