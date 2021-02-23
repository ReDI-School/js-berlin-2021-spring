<!-- .slide: id="lesson11" -->

# Basic Frontend - Fall 2020

Lesson 11, Thursday, 2020-10-01

---

### Recap: arrays

Arrays are **ordered** containers that holds multiple values.

How do we create an array?

```js
// we create an array using []
let emptyArray = [];

// we put the values we want in square brackets
// separated by commas
let cars = ["Saab", "Volvo", "BMW"];
let ages = [19, 33, 25, 40];
```
<!-- .element: class="fragment"  -->

---

We can access elements in the array by number using square brackets "`[]`"

The numbering starts at `0`.

```js
let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"
```

---

```js
let fruits = [ "Apple", "Banana", "Orange" ];
```

| | First Element | Second Element | Third Element |
| --- | :---: | :---: | :---: |
| **Value** |  "Apple"  |  "Banana"  |  "Orange"  |
| **Index** | 0 | 1 | 2 |
| **Access** | fruits[0] | fruits[1] | fruits[2] |

---

We can use loops to go through elements of an array.

```js
let cars = ["Saab", "Volvo", "BMW"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// we can also change the values in the array
cars[1] = "Fiat";

// and add additional items at the end of the array
cars.push("Honda");

```

---

### Finding the last element in an array

* What is the index of the last element in an array containing only one value?

```js
let arr = [ 42 ];
let lastElement = arr[0]; // last element has index 0
```

* What is the index of the last element in an array containing 3 values?
* What about 1000 values?

=> The index of the last element in an array is its length minus one (since we start counting at zero).
<!-- .element: class="fragment"  -->

---

### Finding the largest number

Imagine you need to find the tallest person in a building. There's one person in every room and you can only visit one room at a time. What's your strategy?

1. Ask the first person for their height, note it down
1. Go to next room. If person is larger than what you have on your note, update the number on your note.

After you visited all rooms, you have the height of the tallest person on your note.

---

### exercise

You have written a program that tells you how likely it is to rain outside (in percent %).

Unfortunately, it is not very accurate, it sometimes gives you more than 100% or less that 0%.

These are the values you got:
```js
[55.1, 45.6, 145.01, 10, -0.5, 0.001, 110, -0.001]
```
Write some code that replaces all values less than 0 with 0, and bigger than 100 with 100.

---

### exercise

You have the following information about your friends:

```js
let names = ['John Carmack', 'Frances Northcutt', 'John Nash'];
let ages = [23, 25, 66];
```

write a loop that prints the name and the age of each friend to console, e.g. : `John Carmack, 23`

---

### Solutions

```js
let temperatures = [55.1, 45.6, 145.01, 10, -0.5, 0.001, 110, -0.001];
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] < 0) {
        temperatures[i] = 0;
    } else if (temperatures[i] > 100) {
        temperatures[i] = 100;
    }
}
```

---

```js
let names = ['John Carmack', 'Frances Northcutt', 'John Nash'];
let ages = [23, 25, 66];

for (let i = 0; i < names.length; i++) {
    console.log(names[i] + ", " + ages[i]);
}
```

---

### Homework

Write a function that takes an array as argument and returns a new array with all elements of the original array reversed.

Example:

```js
function reverse(array) {
    // TODO
}

let array = [ 1, 2, 3, 4, 5 ];
let result = reverse(array);
// result must be [ 5, 4, 3, 2, 1 ]
```