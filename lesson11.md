<!-- .slide: id="lesson11" -->

# Basic Frontend - Spring 2021

Lesson 11, Thursday, 2021-04-08

---

### Refresher: What is an object?

A collection of key-value pairs

<!-- .element: class="fragment" -->

OR

<!-- .element: class="fragment" -->

A collection of properties names and values

<!-- .element: class="fragment" -->

---

### Refresher: Object example

```js
let person = {
  name: "Anne",
  age: 34,
  sayHello: function () {
    console.log("hi");
  },
};
```

```js
console.log(person.name); // ???
```

<!-- .element: class="fragment" -->

```js
console.log(person.age); // ???
```

<!-- .element: class="fragment" -->

```js
console.log(person.sayHello); // ???
```

<!-- .element: class="fragment" -->

```js
person.sayHello(); // "hi!"
```

<!-- .element: class="fragment" -->

---

### Refresher: Functions & Objects

```js
function introduce(somebody) {
  console.log("Hi, this is " + somebody.name);
}
introduce(person);
```
<!-- .element: class="fragment" -->

```js
let person = {
  name: "Anne",
  sayHello: function () {
    console.log("Hi, my name is " + this.name);
  },
};
person.sayHello();
```
<!-- .element: class="fragment" -->

---

# More practice with Objects

---


### Exercise 1

Given the person:

```js
let person = {
  name: "Anne",
  age: 34
};
```

Create the function `celebrateBirthday`, which takes a `person` object, prints a birthday message, stating the person's name and age. After it is called, the person's `age` property should be updated.

```js
celebrateBirthday(person);
// -> "Happy birthday! Anne is now 35!
console.log(person.birthday); // -> 35
```

---

### Exercise 2

Using the `person` object from the previous example, give it a method (function) called `canRentCar` that returns `true` if they are old enough to rent a car (must be over 18 years old), and `false` otherwise.

```js
// `person` is "Anne" age 34 from exercise 1
console.log(person.canRentCar()); // -> true
```

Create another person under the age requirement, and verify that your method returns false for them.

Bonus: Use the function from exercise 1 to age the younger person until they are old enough to rent a car.


---

### Exercise 3

Create a function `determineOlderPerson` that takes two person objects and prints who is the older person of the two, and the age difference between them.

```js
let person1 = {
  name: "Anne",
  age: 34
};
let person2 = {
  name: "Owen",
  age: 29
};
determineOlderPerson(person1, person2);
// -> "Anne is 5 years older than Owen"
```
