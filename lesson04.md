<!-- .slide: id="lesson4" -->

# Basic Frontend - Spring 2021

Lesson 4, Thursday, 2021-03-11

---

### Recap: data types

Number:
```js
42
-3.1415
```

String:
```js
"John"
'Berlin'
```

Boolean:
```js
true
false
```

Undefined:
```js
undefined
```

---

### Recap operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * / **` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `30 !== 25`<br/>`20 >= 18` |

---

### What does it print?

```js
let name = "Sevtap";
console.log("Hello " + name);
```

Answer: It prints "Hello Sevtap" <!-- .element: class="fragment" -->

---

### What does it print?

```js
let greeting = "Hello";
let name = "Sevtap";
console.log(greeting + " " + firstName);
```

Answer: Error, "firstName" is not defined <!-- .element: class="fragment" -->

---

### What does it print?

```js
console.log("It is " + temperature + " degrees");
let temperature = 22;
```

Answer: Error, "temperature" is not defined <!-- .element: class="fragment" -->

---

## Pass-by-value

---

## Passing basic data types

* What do you think `x` and `y` are at the end of the program?

```js
let x = 42;
let y = x;
x = 43;
console.log(x);
console.log(y);
```

Answer: x is 43, y is 42 <!-- .element: class="fragment" -->

---

### Pass-by-value

* All basic data types (number, string, boolean) are passed by value.
* If you assign a variable to another variable, its value is _copied_.

---

## Combined Operators

---

### Operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| **Combined Operators** | `+= -= *= /= ++ --` | `a *= 2`<br />`count++` |

---

### Combined Operators

```js
let myAge = 42;
myAge = myAge + 1; // how old will I be next year?
```

Is the same as:

```js
let myAge = 42;
myAge += 1;   // same as myAge = myAge + 1
```

---

### Quiz: What's the price?

```js
let price = 10;
// there's a 50 percent sale!
price /= 2;
```

Result: `5` <!-- .element: class="fragment" -->

---

### Operator ++ and --

* Operator `++` and `--` increase (or decrease) the value of a variable by 1

```js
let myAge = 42;
myAge++; // same as myAge = myAge + 1
```

---

### Quiz: What's the age?

```js
let myAge = 42;
myAge--;
```

Result: `41` <!-- .element: class="fragment" -->

---

## Recap: Operator chaining

---

### Operator chaining

We can "chain" operators, for example:

```js
1 + 2 + 3
(1 + 2) + 3  // first, 1 + 2 is computed (left to right)
(3) + 3      // returns 6
```

---

### Operator chaining

* Is the following code valid?

```js
5 < 6 < 7
```

* Answer: It's valid JavaScript, but pointless  <!-- .element: class="fragment" -->

---

### Operator chaining (cont.)

* Let's break it down:

```js
5 < 6 < 7
```

```js
(5 < 6) < 7   // 5 < 6 is true
```
<!-- .element: class="fragment" -->

```js
true < 7      // pointless comparison!
```
<!-- .element: class="fragment" -->

* comparing a boolean to a number makes no sense. Don't chain comparison operators.
<!-- .element: class="fragment" -->

---

### Quiz

* What does the following return?

```js
5 === 5 === 5
```

```js
(5 === 5) === 5
true === 5         // Pointless. Returns false
```
<!-- .element: class="fragment" -->

---

## Operator precedence

---

### Operator precedence

What do you think is the result?

```js
2 + 2 * 2
```

Result: `6` <!-- .element: class="fragment" -->

---

### Operator precedence (cont.)

* JavaScript supports precedence (priority) for operators
* Operators with higher precedence are evaluated before operators with lower precedence
* Full List: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* Multiplication (15) has higher precedence than addition (14) - multiplication wins

---

### Operator precedence (cont.)

* Parentheses have the highest precedence (21) and always win:

```js
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6
```

* When in doubt, use parentheses!

---

### Quiz

What is `x` ?

```js
let x = 4 + 6 < 3 + 8;
```

Result: `true` <!-- .element: class="fragment" -->

---

### Best practice: Use variables instead of chaining

Which of the two is more readable?

```js
let x = 4 + 6 < 3 + 8;
```

```js
let sum1 = 4 + 6;
let sum2 = 3 + 6;
let x = sum1 < sum2;
```

---

## Logical Operators

---

### Logical Operators

These operators work on `boolean` values:

* `&&` AND
* `||` OR
* `! ` NOT

---

### Logical NOT !

Logical NOT negates a boolean:

```javascript
!true  // false
!false // true
```

---

Example: Carlo's Pizzeria doesn't serve pizza hawaii.

```js
let likesPizzaHawaii = true;
console.log("Would like to go to Carlo's Pizzeria:", !likesPizzaHawaii);
```

---

### Quiz - Do we go biking or swimming?

```js
let temperature = 28;
let isWarm = temperature > 25;
let goSwimming = isWarm;
let goBiking = !isWarm;
```

---

### Try to prevent double negations

```js
let isNotWarm = temperature <= 25;
let goSwimming = !isNotWarm; // No. Just no. Please Don't.
```

---

### Logical AND &&

AND takes two booleans and returns `true` if **both** booleans are `true`

```javascript
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false
```

---

### Example - AND &&

I need bread AND cheese to make a cheese toast

```js
let hasCheese = true;
let hasBread = true;

let canMakeCheeseToast = hasCheese && hasBread;
console.log(canMakeCheeseToast); // ?
```

`true` <!-- .element: class="fragment" -->

---

### Logical OR ||

OR takes two booleans and returns `true` if **at least one** is `true`

```javascript
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false
```

---

### Example - OR ||

To apply to a job, I need to know German OR English

```js
let knowsGerman = false;
let knowsEnglish = false;

let canApply = knowsGerman || knowsEnglish;
console.log(canApply); // ?
```

`false` <!-- .element: class="fragment" -->

---

### Quiz

A job add requires JavaScript or Python knowledge. Can you finish the code below?

```js
let canProgramJavaScript = true;
let canProgramPython = true;

let canApply = // ???
```

```js
let canApply = canProgramJavaScript || canProgramPython;
```
<!-- .element: class="fragment" -->

---

### Summary

* pass-by-value: Primitive data types are _copied_ when assigned to other variables
* operator chaining, operator precedence: Beware! Use parentheses or extra variables.
* Logical operators - AND, OR, NOT. Use only on booleans.

---

### Let's practice

```js
let myAge = 42;
let dogAge = 6;
```

1. Print to `console.log` whether your dog is older than you in "human" years (remember - multiply dog age by 7 to get "human" years)
1. But what about next year? Increase both `myAge` and `dogAge` by one.
1. Print to `console.log` whether your dog is older than you.

---

### Bonus: Swap Variables

You're given the following code. You're only allowed to add code at the comment. What do you need to do so that the second `console.log` prints `12 42` for `a` and `b`? (Note - your code should should be generic and work for _any_ value of `a` and `b`).

```js
let a = 42;
let b = 12;

console.log("Values of a and b are", a, b);

/* YOUR CODE HERE. LEAVE CODE ABOVE AND BELOW! */

console.log("New values of a and b are", a, b);
```

---

### Bonus / Homework

You own a little cafe and decided to give everyone an extra cookie who orders a piece of cake with coffee or tea. Your system generates three variables:

```js
let orderedTea = true;
let orderedCoffee = false;
let orderedCake = false;
```

Can you define a variable `getsExtraCookie` that is `true` if the customer gets an extra cookie or `false` otherwise for any true/false value of `orderedTea`, `orderedCoffee` and `orderedCake`?
