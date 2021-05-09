<!-- .slide: id="lesson19" -->

# Basic Frontend - Spring 2021

Lesson 19, Tuesday, 2021-05-11

---

### Recap: Arrays

An Array is a collection of elements.

Multiple values are stored in a single variable.

Access is index-based.

---

### Quiz

What's printed to console?

```js
let arr = [ 1, 2, 3 ];
console.log(arr[1]);
```

`2`<!-- .element: class="fragment" -->

---

### Array vs. Object

Array access is index based (first index is `0`)

Object access is name based (key-value pairs)

```js
let arr = [ 'Pizza', 'Muffin' ];
let obj = {
    favoriteFood: 'Pizza',
    favoriteSweet: 'Muffin'
}
```

---

### Recap: DOM

What do you remember about DOM?

---

### DOM and Arrays

Let's say we have the following HTML:

```html
<ul id="todoList">
  <li> Eat </li>
  <li> Sleep </li>
  <li> Work </li>
</ul>
```

How would we access all elements?

---

### children property

We can ask any HTML element for an array of its children:

```js
let todoListElement = document.getElementById("todoList");
let children = todoListElement.children;
for (let i = 0; i < children.length; i++) {
  let child = children[i];
  console.log(child[i]);
}
```

---

### Let's practice

Remember our shopping list?

* [2021-04-29-shoplist/main.js](2021-04-29-shoplist/main.js)
* [2021-04-29-shoplist/index.html](2021-04-29-shoplist/index.html)

Can you add a button that marks all items as done?
E.g. when the user presses the button, all items in your shopping list
will be strike-through.

---

### Second assignment

You're working as a frontend engineer in a company. The backend people team just
finished their code to get the products for your web shop from the database. An example
object looks like this:

```js
let products = [
    { name: "Shoe", price: 8, description: "For your feet" },
    { name: "Shirt", price: 3, description: "Covers your belly" }
];
```

Can you create a shop UI that renders the products on screen no matter which
products the backend people send to you? Try changing the `products` array and
see how it affects your page.

