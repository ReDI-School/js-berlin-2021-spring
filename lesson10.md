<!-- .slide: id="lesson10" -->

# Basic Frontend - Spring 2021

Lesson 10, Tuesday, 2021-04-06

---

<!-- .slide: id="intro-objects" -->

# Intro to Objects

---

<!-- .slide: style="font-size:80%" -->

### Outline

- Why we need a new data type
- Limitations of basic data types
- A collection of values vs a basic value
- Two ways of creating a collection
- Object data type
- Terminology: property, name, value, key-value pair
- Operations on Objects
- Qualities of object data
    - Order of properties does not matter
    - Property names must be unique
    - Every object is unique
- Objects can have methods
    - `this` keyword
- Exercises

---

### Why we need a new data type

---

### HTML Elements

An HTML element collects values it needs in its opening tag:

```html
<img src="cat.jpg" alt="Cute cat" />
<input type="text" placeholder="Enter name" />
```

src, alt, type, and placeholder are called <span style="color: indianred;">HTML attributes</span>

---

### Limitations of basic data types

---

### Code’s ability

Able to represent facts as values

Able to combine values to produce new info

Able to define functions

Conditionally execute code

Limited ability to interact with a user

---

A combination of values still produces a single value

Number:

`34 * 10 + 170`

String:

`"Hello, I am Anne from Denmark, 34 years-old"`

---

An entity's information can only be captured in multiple variables

```js
let name = "Anne";
let age = 34;
let height = 170;
let origin = "Denmark";
let likesPizza = true;
```

---

Keeping track of multiple entities is difficult

```js
person1Name, person1Age, person1Height, person1Origin
person2Name, person2Age, person2Height, person2Origin
person3Name, person3Age, person3Height, person3Origin
```

---

Basic data types are useful when we are okay with

- combining multiple values into a single value
- creating multiple variables to represent related data
- few number of entities

---

### A collection of values vs a basic value

---

However if we want to bypass these limitations, we need to define a <span style="color: indianred;">collection</span>.

In Abdullah’s game, we can think of a collection for holding a person’s name, age and height as one single unit

`[name, age, height]`

---

### Comparision between a basic value and a collection

|Criteria|Basic value|A collection|
|--------|-----------|------------|
|Sample|34| [34, "Anne", 170]|
|Number of values inside|1|3|
|Type of values inside|`number`|`number`, `string`, `number`|
|Operations|defined by data type|defined by data type + defined by us|
|Equality of values| `34 === 34 //true`|`[34] === [34] //false`|

---

### Two ways of creating a collection

---

### Increasing Code’s ability

<span style="color: indianred;">Collecting</span> values into one unit is so essential that JS provides 2 different data types for representing them: <span style="color: indianred;">Object</span> and <span style="color: indianred;">Array</span>.

Today's topic is Object data type

---

### Object data type

---

### JS Objects

A JS Object collects data which belong to a single entity using two curly braces

```js
{
    name: "Anne", 
    age: 34, 
    height: 170, 
    origin: "Denmark"
}
```

---

### Terminology

---

### Property

Every element between two curly braces is called an <span style="color: indianred;">object property</span>

```js
{
    userID: 1234,
    memberSince: "01/01/2001"
}

This object has 2 properties

---

### Property name and property value

Every property has a <span style="color: indianred;">name</span> and a <span style="color: indianred;">value</span>

|Category|Sample|
----------|----------
|Property: |`age: 34`|
|Property's name: |`age`|
|Property's value: |`34`|

---

### Key-value pair

A property is also called a <span style="color: indianred;">key-value pair</span>, especially useful when you think of your object as a dictionary


![](images/dictionary.png) <!-- .element: style="width: 1000px; height: 300px; display: block; margin: auto;" -->

Each word is a <span style="color: indianred;">key</span>

Each definition is a <span style="color: indianred;">value</span>

---

### Examples

Object with properties

```js
{name: "Anne", age: 34, height: 170, origin: "Denmark"}

{name: "Andy", age: 27, height: 185, origin: "England"}

{name: "Ahmed", age: 30, height: 177, origin: "Syria"}
```

---

Object with key-value pairs

```js
{
    Monday: "Oh, it's Monday again",
    Tuesday: "Much better",
    Wednesday: "Already mid-week :)",
    Thursday: "Soon it is weekend",
    Friday: "Last day of the work-week",
    Saturday: "Do some shopping",
    Sunday: "Rest at last"
}
```

---

### Operations on Objects

---

### Object

A collection has a data type: <span style="color: indianred;">Object</span>

```js
typeof {name: "Anne", age: 34, height: 170} // "object"
```

---

### How to create an Object

This is the age of Anne:

```js
34
```

This is how we create an <span style="color: cadetblue;">object</span> holding Anne’s age:

```js
{age: 34}
```

---

### Assign to a variable

This is how we <span style="color: cadetblue;">assign an object to a variable</span>:

```js
let anne = {age: 34};
```

---

### Read a property’s value

This is how we <span style="color: cadetblue;">read the value of a property from the object</span>:

```js
anne.age
```

If a property does not exist in the object, then we get <span style="color: indianred;">undefined</span>

---

### Change property’s value

This is how we <span style="color: cadetblue;">change the value stored in anne.age</span>:

```js
anne.age = 35;
```

---

### Add a new property

Here is an existing object

```js
let anne = {name: "Anne"};
```

here is how to add a new property to `anne`

```js
anne.address = "123 Street, Berlin";
```

---

### Qualities of object data

---

### Order of properties does not matter

When working with the Object data type, the order of the properties does not matter

```js
{name: "Anne", age: 34, height: 170}
{age: 34, height: 170, name: "Anne"}
{name: "Anne", height: 170, age: 34}
```

---

### Property names must be unique

When working with the Object data type, property names must be unique

```js
{name: "Anne", age: 34, height: 170} // correct
{name: "Anne", name: "Annie", height: 170} // wrong

```

---

### Every object is unique

Every object we create is only identical to itself but not to a different copy, even though they might contain the same data

```js
let anne      = {name: "Anne", age: 34};
let anneAgain = {name: "Anne", age: 34};

let areSame = anne === anne; // true
let areNotSame = anne !== anneAgain; // true

console.log("anne and anne are the same", areSame);
console.log("anne and anneAgain are not the same", areNotSame);
```

---

However for values which belong to basic data types, `number, boolean, string, undefined`, there is only one copy

```js
let name      = "Anne";
let nameAgain = "Anne";

let areSame = name === nameAgain; // true

console.log("name and nameAgain are the same", areSame);
```

---

### Objects can have methods

---

### Methods

A property's value can also be a function

```js
let person = {
    name: "Ekas",
    greet: function() {
        return "Hello, I am " + person.name;
    }
}
```

---

There is an alternate way to define the greet method:

```js
let person = {
    name: "Ekas",
    greet: function() {
        return "Hello, I am " + this.name;
    }
}
```

`this` and `person` point to the same object

---

### this keyword

`this` is an automatically defined variable

`this` points to the enclosing object

```js
let person = {
    name: "Ekas", 
    greet: function() {
        let areSame = this === person; // true
        console.log("This is true all the time", areSame);
        return "Hello, I am " + this.name;
    }
}
```

---

Prefer the following code

```js
let person = {
    name: "Ekas", 
    greet: function() {
        return "Hello, I am " + this.name;
    }
}
```

to this code

```js
let person = {
    name: "Ekas", 
    greet: function() {
        return "Hello, I am " + person.name;
    }
}
```

---

### Exercise 1

Now it is your turn to create an object to represent your data

It could contain:

```js
name, age, favouriteFood, hobbies, favouriteMusic, isStudent
```

Assign your object to a variable called `me`

---

### Exercise 2

Now interview your classmate to collect their data

```js
name, age, favouriteFood, hobbies, favouriteMusic, isStudent
```

Assign this object to a variable called `classmate`

---

### Exercise 3

Now define an `introduce` function which accepts a `person` object with `name, age, favouriteFood, hobbies, favouriteMusic, isStudent` properties and creates an introduction such as:

```js
"Hi, my name is Anne. \
I am 34 years-old. \
My favourite food is Pizza. \
I like hiking and programming. \
I enjoy listening to Jazz. \
I am a student."
```

---

### Exercise 4

Add a `greet` method to `me` and `classmate` objects
`greet` method should return a string `"Hello, I am <name>"`

Call them using

```js
console.log(me.greet());
console.log(classmate.greet());
```

---

You can find the exercise solutions here

- [Exercise 1](2021-04-06-intro-objects/exercise1.js)
- [Exercise 2](2021-04-06-intro-objects/exercise2.js)
- [Exercise 3](2021-04-06-intro-objects/exercise3.js)
- [Exercise 4](2021-04-06-intro-objects/exercise4.js)
