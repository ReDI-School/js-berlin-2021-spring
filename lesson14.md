<!-- .slide: id="lesson14" -->

# Basic Frontend - Spring 2021

Lesson 14, Tuesday, 2021-04-20

---

### Recap: DOM

**DOM** lets us manipulate HTML elements from JavaScript. It's a very powerful **API** (Application Programming Interface).

---

HTML:
```html
<div id="myDiv">Hello</div>
<input id="myInput" type="number" value="42" />
<button id="myButton">Click me!</button>
```

Select the elements from JavaScript:
```js
let myDivElement = document.getElementById("myDiv");
let myInputElement = document.getElementById("myInput");
let myButtonElement = document.getElementById("myButton");
```

---

```js
let myDivElement = document.getElementById("myDiv");
console.log(typeof myDivElement); // what does it print?
```

```js
"object"
```
<!-- .element: class="fragment" -->

---

So `getElementById()` returns an object. What can we do with objects?

* Set or get properties
<!-- .element: class="fragment" -->
* Call methods
<!-- .element: class="fragment" -->

---

### Setting or getting properties

```js
let myInputElement = document.getElementById("myInput");
// get a property
console.log(myInputElement.value); // the current value
// set a property
myInputElement.value = 43; // change the value from JavaScript
```

---

### Example

HTML:
```html
<input id="myInput" type="number"
    min=0 max=10
    placeholder="Enter a number"
/>
```

Same from JavaScript:
```js
let myInputElement = document.getElementById("myInput");
myInputElement.type = "number";
myInputElement.min = 0;
myInputElement.max = 10;
myInputElement.placeholder = "Enter a number";
```

---

### textContent

The `textContent` property allows to get or set the text within a HTML Element:

```html
<div id="myDiv">This is the text content</div>
```

JavaScript:

```js
let myDivElement = document.getElementById("myDiv");
// get the text content
console.log(myDivElement.textContent);
// set a new text content
myDivElement.textContent = "This is the new text content";
```

---

### Calling methods

```js
let myDivElement = document.getElementById("myDiv");

// remove the element
myDivElement.remove();
```

---

### Assigning new methods

```js
let myButtonElement = document.getElementById("myButton");
myButtonElement.onclick = function() {
    console.log("my button was clicked!");
}
```

---

### Let's practice

1. Create a few HTML Elements in your HTML file
1. Create a button, and call a function in its `onclick` handler
1. Change some of the attributes of your HTML Elements

---

### Let's write a shop!

Create some HTML, with two (or more) products you would like to sell in your shop. Every product should have a small description, a price and a `<input type="number">` element for selecting the amount.

Example:

```html
<div>
  <input type="number" placeholder="amount" /> Socks, black, for keeping your feet warm. Price: 2 EUR each.
</div>
```

---

* Assign a function to each input element's `oninput` property. Update the total price your customer needs to pay:
  * Use the `valueAsNumber` property of your input element to get the value as `number` (not string).
  * Compute the total price the user has to pay and write that to a HTML `div` or `span` element. (Hint: Use the `textContent` property)

Example: Your customer selects 2 socks (2 EUR each) and 3 chocolates (1 EUR each). Your page should show 7 EUR as total price.

---

### Bonus

* Add a "Express Delivery" checkbox. Express Delivery costs 5 EUR extra
* Add a rebate. If the user shops for more than 20 EUR, they get 10% off
