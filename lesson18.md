<!-- .slide: id="lesson18" -->

# Basic Frontend - Fall 2020

Lesson 18, Thursday, 2020-10-29

---

### Recap - Bonus Bonus

In order to move a `<li>` to the bottom of its parent, we can first remove the item with `item.remove()`, and then append it again:

```js
    item = document.createElement("li");
    // ... populate your item
    item.onclick = function() {
        item.style.textDecoration = 'line-through';
        item.remove();
        list.appendChild(item);
    }
```

---

### Let's practice some more...

Your task, should you choose to accept, is to create a shopping website.

The owner will provide an array of the products, e.g.:

```js
let products = [
    { name: 'Socks', price: 3.99 },
    { name: 'Hat', price: 29.99 },
    // feel free to add your own :)
];
```

Can you create a website that shows the products from the array?

---

### Bonus

1. For every product, add a number input field where the user can specify the amount of products they want to order
1. Compute the total price the user has to pay, including 5.99 shipping fee
1. Shipping is free if the sum of all ordered products is >= 40
1. Add a search input field that only shows products that start with the input string (hint - use the [oninput](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput) event and the string method [startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

---

### Please indicate your breakout room preference

1. I want to work more on last week's shopping item example
1. I want to work on the shop, step by step with teacher
1. I want to work on the shop by my own, just asking questions when I'm stuck
