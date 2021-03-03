<!-- .slide: id="lesson2" -->

# Basic Frontend - Spring 2021

Lesson 2, Thursday, 2021-03-04

(Remember to install Visual Studio Code if you haven't already)

---

### Recap

What did we talk about last lesson?

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

---

### Recap operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * / **` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `30 !== 25`<br/>`20 >= 18` |

---

### Try it out

Now, try to enter some data to the JavaScript console, but think of the data type first:

* Your name
* Your shoe size
* Wether you think it's ok to put pineapple on pizza

---

### Try it out: Solution

```js
"Carlo"
45
false
```

---

### Quiz time

The `typeof` operator in JavaScript outputs the data type of a value. Can you guess the output?

```js
typeof 42;
```

```js
"number"
```
<!-- .element: class="fragment" -->

```js
typeof "hello";
```

```js
"string"
```
<!-- .element: class="fragment" -->

```js
typeof true;
```
```js
"boolean"
```
<!-- .element: class="fragment" -->

---

### Quiz time

```js
typeof (1 + 1);
```

```js
"number"
```
<!-- .element: class="fragment" -->

```js
typeof ("1" + "1");
```

```js
"string"
```
<!-- .element: class="fragment" -->

```js
typeof ("1 + 1");
```
```js
"string"
```
<!-- .element: class="fragment" -->

---

### Quiz time

```js
typeof ("Harald" === "Abdullah");
```

```js
"boolean"
```
<!-- .element: class="fragment" -->

```js
typeof (4 < 2);
```

```js
"boolean"
```
<!-- .element: class="fragment" -->

```js
typeof typeof 42;
```
```js
"string"
```
<!-- .element: class="fragment" -->

---

### Data Type: Undefined

*  **Undefined** has only one value: `undefined`
* it is just `undefined`
* it means there is no value here

---

<!-- .slide: id="variables" -->

# Variables

---

### Variables

But with all these examples, we are just talking about values.

What if I wanted to save some values and use them later?

we use `Variables`!

---

### Variable

A pointer to value.

```js
let price = 5;
let name = "John";
```

![Variable](images/variables.jpg)
<!-- .element: style="text-align:center" -->

---

### Examples:

```js
let priceCoffee = 2;
let priceCappuccino = 3;
let customer = "John";
let company = undefined;
let greeting = "Hello";
let age = 50;
let hasKids = false;
```

Can you guess how can we define a variable?

---

### How do we define a variable?
We write:
* `let`
* the variable name
* `=`
* the value we want
* `;`

---

### Quiz Time

What are the types of the values in the following variables?

```js
let temperature = 24;
let name = "John";
let teacherIsNice = true;
let totalPrice = '12.5';
let deliveryDate = undefined;
```

---

### Quiz Time - solution

```js
let temperature = 24;           // number
let name = "John";              // string
let teacherIsNice = true;       // boolean
let totalPrice = '12.5';        // string
let deliveryDate = undefined;   // undefined
```

---

### Variables are variable

You can change the value of a variable using the assignment operator (`=`):

```js
let temperature = 24;   // define a variable, initialize it to 24
temperature = 25;       // assign a new value (25) to the variable
temperature = 23;       // now temperature is 23
```

---

### Uninitialized variables

A variable that is not initialized with a value is always `undefined`:

```js
let temperature;     // undefined
let name;            // undefined
let isTeacherNice;   // undefined
```

---

### Variables

Variables can be used wherever we can use values:

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
```

---

### Why do we use variables?

We use variables...

* ... to give names (meaning) to values. `42` could mean a person’s age or shoe size.
* ... to avoid repetitions. You define the variable once with a value, and use it often.

---

### Variable names

You can name your variables whatever you want.
- You can use letters, numbers, and underscore _ (spaces are *not* allowed!)
- Variable name cannot start with a number.

Correct variable names:
```js
let element = 3;
let element3 = 5;
```

Wrong variable names:
```js
let 2squared = 4;
let element-1 = 0;
let full name = 'Anakin Skywalker';
```

---

Giving good and descriptive names to your variables is very important!

Good variable names make the code easier to understand by other developers, and even by yourself!

Not wrong, but bad variable names:
```js
let a = 0;
let _12 = 0;
let asldjf = 0;
let thisisareallylongvariablename = 0;
```

---

In this course, and JavaScript in general, we use 'camelCase'
  - `isStudent`
  - `favoriteBook`
  - `likesGermanFood`

---

Variable names are case sensitive:
```js
let name = 'John';
let Name = 'John';
let NAME = 'John';
```

These are 3 different variables.

---

### naming Boolean variables

When naming boolean variables, it is best to give it a name that describes a yes/no question:

- isMarried
- hasKids
- canExecute

---

### Chrome Snippets

* Open Chrome browser
* Open the developer tools (F12)
* Go to "Sources" tab
* On the left side, go to "Snippets"
* Click on "New snippet"

---

### try it!

create 4 variables:
* one for your full name
* one for your age
* one for your favorite city
* one for whether you can speak German or not
* and anything else you can think of :)

In the JavaScript console, enter the name of the variable. Do you see its value?

---

### Bonus

<!-- .slide: style="font-size:70%" -->

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
```

* Copy/paste this code and look at the `totalPrice` variable in the console.
* Can you modify the code above to also include the price for popcorn?
* A fourth friends wants to join. What do you need to do in the code above to compute the total price for 4 friends?
* Create a new variable containing your total budget (30 EUR).
* Create a new variable that contains `true` if the budget is high enough for cinema, `false` otherwise.

---

### Homework

Finish the bonus assignment. Ask for help if stuck :)
