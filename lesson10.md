<!-- .slide: id="lesson10" -->

# Basic Frontend - Spring 2021

Lesson 10, Tuesday, 2021-04-06

---

<!-- .slide: id="intro-objects" -->

# Intro to Objects

---

### HTML Elements

An HTML element collects values it needs in its opening tag:

```html
<img src="cat.jpg" alt="Cute cat" />
<input type="text" placeholder="Enter name" />
```

src, alt, type, and placeholder are called <span style="color: indianred;">HTML attributes</span>

---

### Code’s ability

Able to represent facts as values

Able to combine values to produce new info

Able to define functions

Conditionally execute code

Limited ability to interact with a user

---

The values we operate on are so <span style="color: indianred;">basic</span> that any combination of values still produces one single value

Number:

`34 * 10 + 170`

String:

`"Hello, I am Anne from Denmark, 34 years-old"`

---

The data about Anne is stored in multiple variables

```js
let name = "Anne";
let age = 34;
let height = 170;
let origin = "Denmark";
let likesPizza = true;
```

---

Keeping track of multiple people is difficult

```js
person1Name, person1Age, person1Height, person1Origin
person2Name, person2Age, person2Height, person2Origin
person3Name, person3Age, person3Height, person3Origin
```

---

In producing new information from existing data, basic data types are useful when

- combining multiple values into a single value
- creating multiple variables to hold related data
- having multiple entities

are not an issue for us

---

However if we want to bypass these limitations, we need to define a <span style="color: indianred;">collection</span>.

In Abdullah’s game, we can think of a collection for holding a person’s name, age and height as one single unit

`[name, age, height]`

---

### Increasing Code’s ability

<span style="color: indianred;">Collecting</span> values into one unit is so essential that JS provides 2 different data types for representing them: <span style="color: indianred;">Object</span> and <span style="color: indianred;">Array</span>.

Today, we will introduce the Object data type and cover Array in another lesson.

---

### JS Objects

A JS Object collects values between two curly braces

```js
{
    name: "Anne", 
    age: 34, 
    height: 170, 
    origin: "Denmark"
}
```

Every element between two curly braces is called an <span style="color: indianred;">object property</span>

This object has 4 properties

---

Every property has a <span style="color: indianred;">name</span> and a <span style="color: indianred;">value</span>

`age: 34` is a property

`age` is property's name

`34` is property's value

---

A property is also called a <span style="color: indianred;">key-value pair</span>, especially useful when you think of your object as a dictionary


![](images/dictionary.png) <!-- .element: style="width: 1000px; height: 300px; display: block; margin: auto;" -->

Each word is a <span style="color: indianred;">key</span>

Each definition is a <span style="color: indianred;">value</span>

---

### Examples

```js
{name: "Anne", age: 34, height: 170, origin: "Denmark"}

{name: "Andy", age: 27, height: 185, origin: "England"}

{name: "Ahmed", age: 30, height: 177, origin: "Syria"}
```

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

### Object data type

When working with the Object data type, the order of the properties does not matter

```js
{name: "Anne", age: 34, height: 170}
{age: 34, height: 170, name: "Anne"}
{name: "Anne", height: 170, age: 34}
```

---

When working with the Object data type, property names must be unique

```js
{name: "Anne", age: 34, height: 170} // correct
{name: "Anne", name: "Annie", height: 170} // wrong

```

---

### Objects are unique

Every object we create is unique, even though they might contain the same data

```js
let anne = {name: "Anne", age: 34};
let anneAgain = {name: "Anne", age: 34};

console.log("me and meAgain are not the same", anne !== anneAgain);
// true
```

---

There is only one instance for each basic data type value

```js
let name = "Anne";
let nameAgain = "Anne";

console.log("name and nameAgain are the same", 
            name === nameAgain);
// true
```

---

### Methods

A property's value can also be a function

```js
{
    name: "Ekas",
    greet: function() {
        return "Hello, I am " + this.name;
    }
}
```

---

### this keyword

Inside the greet function, we used `this`, which is a variable we use whenever we need to refer back to the object we are working with. The following is always true .

```js
let me = {
    name: "Jane", 
    greet: function() {
        console.log("This is true all the time", this === me);
        // true
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

Call them using

```js
me.greet();
classmate.greet();
```

---

You can find the exercise solutions here

- [Exercise 1](2021-04-06-intro-objects/exercise1.js)
- [Exercise 2](2021-04-06-intro-objects/exercise2.js)
- [Exercise 3](2021-04-06-intro-objects/exercise3.js)
- [Exercise 4](2021-04-06-intro-objects/exercise4.js)
