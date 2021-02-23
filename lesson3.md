<!-- .slide: id="lesson3" -->

# Basic Frontend - Spring 2020

Lesson 3, Tuesday, 2020-09-01


---


### what we learned last time

* Variables are pointers to values

* We can use operators with variables just like with values

* Use `<script src="xxx.js"></script>` to add a JavaScript file to your HTML webpage.

* Use `//` to write comments.

* Use `console.log(...)` to output values to the console.


---


### We had a HomeWork

You have an online shop, which sells hats and t-shirts. One of the customers wants to buy 2 hats and 3 t-shirts.

A hat costs 3.99€ and a t-shirt costs 9.99€. What is the total cost?

Create all the variables needed, and output the final result to the console.


---


### Homework solution

```js
let hatPrice = 3.99;
let tShirtPrice = 9.99;

let hatAmount = 2;
let tShirtAmount = 3;

let totalHatPrice = hatAmount * hatPrice;
let totalTShirtPrice = tShirtAmount * tShirtPrice;

let totalCost = totalHatPrice + totalTShirtPrice;

console.log(totalCost);
```


---


### Recap,  What does it print?

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

Answer: Error, "firstName" is not defined. <!-- .element: class="fragment" -->


---


### What does it print?

```js
console.log("It is " + temperature + " degrees");
let temperature = 22;
```

Answer: Error, "temperature" is not defined. <!-- .element: class="fragment" -->


---


What do you think `x` and `y` are at the end of the program?

```js
let x = 42;
let y = x;
x = 43;
console.log(x);
console.log(y);
```

Answer: x is 43, y is 42 <!-- .element: class="fragment" -->

So, Why?  <!-- .element: class="fragment" -->


---


### Pass by value

* This is called *pass by value*.
* All basic data types (number, string, ...) are passed by value.
* If you assign a variable to another variable, its value is __copied__.
```js
let name = "Abdullah";
let anotherName = name;
name = "Carlo";
// name is now "Carlo"
// but anotherName is still "Abdullah"
```

---


### Combining Operators

We can apply multiple operators in the same line, for example:

```js
1 + 2 + 3
(1 + 2) + 3  // same as above
(3) + 3      // returns 6
```


---


### Combining Operators

Is the following code valid?

```js
7 > 6 > 5
```

It's valid JavaScript, but gives you the wrong result. Try it!
<!-- .element: class="fragment" -->


---


### Combining Operators (cont.)

Let's break it down:

```js
7 > 6 > 5
```

```js
(7 > 6) > 5   // 7 > 6 is true
```
<!-- .element: class="fragment" -->

```js
true > 5      // meaningless comparison!
```
<!-- .element: class="fragment" -->

Don't a apply operators that return a boolean after one another!


---


BUT what if we want to check if a number is smaller than 7 and bigger than 5?

```js
7 > myNumber > 5  // what do we do now???
```


Logical Operators! <!-- .element: class="fragment" -->


---


<!-- .slide: id="lesson3:operators" -->


### Logical Operators

These operators only make sense on `boolean` values:

* `&&` AND
* `||` OR
* `! ` NOT


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

true!
<!-- .element: class="fragment" -->


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

false!
<!-- .element: class="fragment" -->


---


### Let's practice

Use JavaScript to compute:

* Am I the youngest person in the group?
* Am I younger than at least one person in the group?


The group is you, the person to your left and the one to your right.


---


### Solution

Lets assume my age is 42.

Am I the youngest person in the group?

I need to be younger than person to my left AND I need to be younger than person to my right

```js
(42 < 20) && (42 < 35)  // false - I am not the youngest person
```


---


Am I younger than at least one person in the group?

I need to be younger than person to my left OR I need to be younger than person to my right

```js
(42 < 20) || (42 < 35)
// false - I am not younger than at least one other person
```


---


### Logical NOT !

Logical NOT negates a boolean:

```javascript
!true  // false
!false // true
```

Example: Am I NOT the youngest person?


---


### Operator precedence

What do you think is the result?

```js
2 + 2 * 2
```

Result: `6` <!-- .element: class="fragment" -->


---


* Operators have priorities
* Operators with higher precedence are evaluated first.
* For example: multiplication `*` is more important than addition `+`
* [You can see the full list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


---


Parentheses have the highest precedence and always win:

```js
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6
```

Always use parentheses when chaining!

It makes your code more clear.


---


### Quiz

What does the following return?

```js
(false && false) || true
```

<br/>


```js
(false && false) || true   // false && false is false
false || true              // returns true
```
<!-- .element: class="fragment" -->


---


### TIP: variables instead of chaining

Which is more understandable?

```js
42 > 22 && 42 > 35
```

Or

```js
let myAge = 42;
let leftPersonAge = 22;
let rightPersonAge = 35;

let olderThanLeft = myAge > leftPersonAge;
let olderThanRight = myAge > rightPersonAge;
let isOldest = olderThanLeft && olderThanRight;
```


---


### Quick Quiz, now in VSCode!

Let's say, everyone here wants to go to the cinema.

How many people in total are going to the cinema?
<!-- .element: class="fragment" -->

A ticket to watch the movie *The Joker* costs 8€, how much do we have to pay in total?
<!-- .element: class="fragment" -->

Saskia and I volunteered to pay for the tickets, how much do we each have to pay?
<!-- .element: class="fragment" -->


---


### Quick Quiz (Cont.)


I can only pay 100€, is it enough?


The cinema will only allow us to enter if we are less than 30 people and if we pay more than 120€, will we get in?
<!-- .element: class="fragment" -->


---


### Recap

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `a && !b`<br />`x >= 5 && x < 15` |
| **Combined Operators** | `+= -= *= /= ++ --` | `a *= 2`<br />`count++` |


---


### Excursus: Combined Operators

This

```js
let myAge = 42;
myAge = myAge + 5;
```

Is the same as this

```js
let myAge = 42;
myAge += 5;
```


---


### Quiz: What's the price?

```js
let price = 10;

// there's a 50 percent sale!
price /= 2;

// price is ??
```

Result: `5`
<!-- .element: class="fragment" -->


---


### Operator ++ and --

Operator `++` and `--` increase (or decrease) the value of a variable by 1

```js
let myAge = 42;
myAge++; // same as myAge = myAge + 1
```

Combined operators work only with variables!
