<!-- .slide: id="lesson13" -->

# Basic Frontend - Fall 2020

Lesson 13, Thursday, 2020-10-08

---

### Recap: Array

```js
let myArray = [ 1, 2, 3 ];
console.log(myArray[1]);
```

What does it print?

Answer: 2
<!-- .element: class="fragment"  -->

---

### Recap: Objects

Can you describe the code below?

```js
let person = {
  name: 'John',
  age: 25,
  isMarried: false
};
```

What's the difference between an array and an object?

---

How do you print the person's age to console?

```js
let person = {
  name: 'John',
  age: 25,
  isMarried: false
};
```

```js
console.log(person.age);
```
<!-- .element: class="fragment"  -->

---

### Array vs. Object

* arrays contain multiple value. We access them by _index_.
* objects consist of **properties**, and they are key/value pairs. We access them by _name_.

---

### Alternative object property access

There's also an array-like access method for object properties that takes a _string_:

```js
let person = {
  name: 'John',
  age: 25,
  isMarried: false
};

let name = person["name"]; // same as person.name
```

---

### Nesting

* arrays can contain any data type
* array is a data type
* arrays can contain arrays:

```js
let nestedArray = [
    [1, 2, 3],
    [4, 5, 6]
];
```

---

```js
let nestedArray = [
    ["a", "b", "c"],
    ["d", "e", "f"]
];

let array1 = nestedArray[0]; // ["a", "b", "c"]
let firstInnerValue = array1[0]; // "a"
// or shorter:
let innerValue = nestedArray[0][0]; // "a"
```

How can you access the value `"e"` in the code above?

```js
let val = nestedArray[1][1]; // "e"
```
<!-- .element: class="fragment"  -->

---

Arrays can also contain objects:

```js
let arr = [
    { name: "Abdullah" },
    { name: "Carlo" }
];
```

How do you access the value `"Carlo"` inside `arr`?

```js
// long form
let obj = arr[1]; // { name: "Carlo" }
let name = obj.name;
// short form:
let name = arr[1].name;
```
<!-- .element: class="fragment"  -->

---

Objects can contain arrays:

```js
let person = {
  name: 'John',
  age: 25,
  isMarried: false,
  hobbies: [ 'eat', 'sleep' ]
};
```

How do you access `'sleep'` in the object above?

```js
person.hobbies[1];
```
<!-- .element: class="fragment"  -->

---

Objects can contain other objects:

```js
let person = {
  name: 'John',
  age: 25,
  isMarried: false,
  address: {
      city: "Berlin",
      country: "Germany"
  }
};
```

How do you access `"Germany"` above?

```js
person.address.country;
```
<!-- .element: class="fragment"  -->

---

### Let's practice

* Create an object describing yourself (or someone else). Try using every datatype (including objects and arrays)
* Try writing the properties of your object to console, e.g.:

```js
console.log("my name: " + person.name);
// ...
```

---

### Bonus

Can you extend the "person" object so that the `console.log()` below doesn't fail?

```js
let person = {
  // TODO
};

console.log(person.address[0].city.code);
```

---

### Functions as value

So far, we wrote functions like this:

```js
function hello() {
  console.log("hello");
}
```

---

But functions can be assigned to variables as well:

```js
let hello = function() {
  console.log("hello");
}
```

---

And since Arrays can include any values, we can have an array of functions:

```js
let arr = [
  function() { return 1; },
  function() { return 2; }
];

console.log( arr[1]() ); // what does this print?
```

Answer: 2 (remember, we start counting at zero!)
<!-- .element: class="fragment"  -->

---

And of course, objects can have function as well:

```js
let person = {
  name: 'John',
  age: 25,
  greetFriend: function(friend) {
    return "Hello " + friend;
  }
};
```

Quiz: How do we call the `greetFriend` function?

```js
person.greetFriend("Carlo");
```
<!-- .element: class="fragment"  -->

---

### Practice time

You're the boss of a company, and you want to know the total budget of your employees. Write a function `getBudgets` that returns the total budget.

```js
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Mary",  age: 32, budget: 40000 },
  { name: "Lee",  age: 16, budget: 2700 }
]); // should return 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Mary",  age: 32, budget: 32000 },
  { name: "Lee",  age: 16, budget: 1600 }
]); // should return 62600
```

---

### Bonus

Imagine a totally made up world in which you might have to stay at home for 14 days. Write a function that tells you if you have enough TP.

We'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.

```js
tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"

tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"

tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
```

---

### Homework

Finish all the exercises and bonuses above :)
