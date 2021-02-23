<!-- .slide: id="lesson9" -->

# Basic Frontend - Fall 2020

Lesson 9, Thursday, 2020-09-24

---

### While loops - parts

Remember this? Let's divide it in parts:

```js
let i = 1;          // part 1 - *initialize* the counter
while (i < 6) {     // part 2 - *test* the exit condition
  console.log(i);   // loop body
  i++;              // part 3 - *update* the counter
}
```

If the body of the `while` loop gets more complex, it
might be difficult to figure out how long the while loop
runs.

A very common usage for a loop is to to iterate through a range of numbers, this should be easy to do.

---

### For loops

How can we express the three parts of our while loop more concisely?

We use a for loop:

```js
for (initialize; test; update) {
  // body
}
```

The `for` loop consists of the three parts, separated by semicolon (`;`)

---

### For loop

Let's replace our `while` loop with a `for`:

```js
let i = 1;          // part 1 - *initialize* the counter
while (i < 6) {     // part 2 - *test* the exit condition
  console.log(i);   // loop body
  i++;              // part 3 - *update* the counter
}

// same code with for loop:

for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

---

### For loop - summary

* A `while` loop executes its body while the condition is `true`.
* A `for` loop *first* runs the **init** part, checks the **condition** part
and if it is `true`, executes the body. After every loop, it executes the **update** part.

---

### For vs. while

* We use a `for` loop if we know in advance how often it will be executed.

```js
for (let i = 0; i < 1000; i++) {
    console.log(i);
}
```

* We use a `while` loop if we don't know how many times the loop will be executed.

```js
while (passwordIsWrong) {
    askForPassword();
}
```

---

### Exercises

* Draw a pyramid to console:

```
*
**
***
****
*****
```
* BONUS: Count down from 10 to 0 and output it on console.
* BONUS: Solve chapter 2 of http://roverjs.com/

---

### Remainder Operator

* For the next exercise, we need the [Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder): `%`
* It shows you what integer remains when you divide one number by another
* Question: What is left when you divide 6 coins between 3 friends? Answer: 0 coins
* Question: What is left when you divide 8 coins between 3 friends? Answer: 2 coins

---

### Remainder Operator

```js
6 % 3  // 0
7 % 3  // 1
8 % 3  // 2
9 % 3  // 0
10 % 3 // 1
11 % 3 // 2
12 % 3 // 0
```

Common programming usage: How can you tell if a number is even or odd?

---

### Exercise: For loop and Remainder operator

Print all even numbers between 0 and 100

---

### Optional Homework

This is a real interview question for a Junior JavaScript developer:

* Print all the numbers from 1 to 100 to console
  * If the number is divisible by 3, print “Fizz” instead
  * If the number is divisible by 5 (and not by 3), print “Buzz” instead
  * If the number is divisible by both 3 and 5, print “FizzBuzz” instead
