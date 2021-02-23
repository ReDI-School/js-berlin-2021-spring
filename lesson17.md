<!-- .slide: id="lesson17" -->

# Basic Frontend - Fall 2020

Lesson 17, Tuesday, 2020-10-27

---

### Recap

How can you create the following HTML Element in JavaScript?

```html
<foo></foo>
```

```js
let fooElement = document.createElement("foo");
```
<!-- .element: class="fragment" -->

---

How can you create the following HTML Element in JavaScript?

```html
<foo blubb="blipp"></foo>
```

```js
let fooElement = document.createElement("foo");
fooElement.blubb = "blipp";
```
<!-- .element: class="fragment" -->

---

How can you create the following HTML Element in JavaScript?

```html
<foo blubb="blipp">BlahBlah</foo>
```

```js
let fooElement = document.createElement("foo");
fooElement.blubb = "blipp";
fooElement.textContent = "BlahBlah";
```
<!-- .element: class="fragment" -->

---

How can you add your `fooElement` to the body of your page?

```js
let fooElement = document.createElement("foo");
// ???
```

```js
let fooElement = document.createElement("foo");
document.body.appendChild(fooElement);
```
<!-- .element: class="fragment" -->

---

### Homework

We're going to breakout rooms for homework. Please indicate which group you'd like to be...

1. I want a full step by step explanation of the homework from a teacher.
1. I'm done with homework, but would like to work on the bonus.
1. I'm done with homework and bonus, want to work on something new.

---

### Bonus Bonus

Instead of only striking through done elements, strike then through _and_ move them to the bottom of the list.
