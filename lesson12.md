<!-- .slide: id="lesson12" -->

# Basic Frontend - Spring 2021

Lesson 12, Tuesday, 2021-04-13

---

Lesson overview:

- nested objects
- introduction to the DOM API
- interacting with HTML elements through the DOM API

---

### Homework solution

```js
let myCar = {
    model: "DeLorean DMC 12",
    engineIsWorking: true,
    wheelCount: 4,
    canBeDriven: function() {
        return this.engineIsWorking && this.wheelCount === 4;
    },
    serviceCar: function() {
        this.engineIsWorking = true;
        this.wheelCount = 4;
    }
};
```

---

### Recap: Objects

```js
let myObject = {
    a: 42,
    b: true,
    c: "hello",
    d: function () { return this.a; },
};
```

---

Objects consist of key-value pairs (properties)

For values, we used `number`, `boolean`, `string` or `function` (also called "member function").

Which other data type you think is possible as a property value?

`object`
<!-- .element: class="fragment" -->

---

```js
let me = {
    name: "Harald",
    address: {
        street: "ReDI Straße",
        city: "Berlin",
    }
}
```

How would we access the `street` and `city`?

---

```js
let me = {
    name: "Harald",
    address: {
        street: "ReDI Straße",
        city: "Berlin",
    }
}

console.log(me.address.street); // "ReDI Straße"
console.log(me.address.city); // "Berlin"

```

---

### Quiz

Can you come up with an object so that the following code is valid:

```js
let a = // ????
console.log(a.b.c); // "yay"
```

BONUS: add a property `d` so that the following code is valid:

```js
console.log(a.d().e); // "yippee"
```

---

### Solution

```js
let a = {
    b: {
        c: "yay"
    },
    d: function() {
        return { e: "yippee" }
    }
};
```

---

