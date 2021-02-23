<!-- .slide: id="lesson20" -->

# Basic Frontend - Fall 2020

Lesson 20, Thursday, 2020-11-05

---

“I fear not the man who practiced 10.000 kicks once, but I fear the man who has practiced one kick 10.000 times .”

--Bruce Lee

---

### Agenda

* Async functions vs sync functions
* JSON formatted String
* Sample async function: fetch
* Practice

---

Async Functions vs Sync Functions

---

### Synchronous Life 

I want to prepare a salad myself

* Buy ingredients
* Wash ingredients
* Cut ingredients
* Mix ingredients in a bowl
* Once ready, eat your salad

---

### Asynchronous Life

I want to eat a salad and don’t want to pause my life

* Order a salad online
* Get on with your life until it gets delivered
* Once delivered, eat your salad

---

### Conclusion

* In programming, if a function reliably takes acceptable amount of time, we tend to implement and call that function synchronously, whereas if a function takes a lot of time and it might fail for various reasons which we have no control over(slow server, loss of Internet connection), we use asyncronous functions to implement our logic. This way, while the asyncronous call is in progress in the background we continue to respond to user events and execute other business logic. 

---

### One Function Two Styles

Compare these two functions, one written in sync style and one in async.

```js
function download() {
  fetch('https://rickandmortyapi.com/api/character/1');
  return;
}
download();
```

```js
async function download() {
  await fetch('https://rickandmortyapi.com/api/character/1');
  return;
}
download();
```

---

### Example 1: Sync vs Async Functions

Observe the effect of an async function on execution order.

* [exercise1.html](./20_exercises/exercise1.html)
* [exercise1.js](./20_exercises/exercise1.js)
* [exercise1_interactive.js](./20_exercises/exercise1_interactive.js)


---

JSON Formatted String

---

### Is This A String, Formatted As JSON, or A JS Object?

```js
let data = '{"name": “Jane"}';
```

```js
console.log(typeof data); // string
```
<!-- .element: class="fragment" -->

```js
let data = {"name": "John"};
```

```js
console.log(typeof data); // object
```
<!-- .element: class="fragment" -->

---

### String vs Object Representation Of Data

Data in string form is good for transmitting the data and storing it on a local storage.

However for accessing the individual parts of a structured data use, object form, which is much faster compared to string form.

---

### Convert Data From String To Object

Use `JSON.parse` to go from `string` to `object`

```js
let data = '{"name": "Jane"}';
```
<!-- .element: class="fragment" -->
```js
let obj = JSON.parse(data);
```
<!-- .element: class="fragment" -->

---

### Convert Data From Object To String

Use `JSON.stringify` to go from `object` to `string`

```js
let data = {name: "Jane"};
```
<!-- .element: class="fragment" -->
```js
let string = JSON.stringify(data);
```
<!-- .element: class="fragment" -->

---

### Example 2: JSON String vs JS Object

Observe the same data once in `string` form and once in `object` form. The difference is visually appearant.

* [exercise2.html](./20_exercises/exercise2.html)
* [exercise2.js](./20_exercises/exercise2.js)

---

Sample Async Function: fetch

---

### Fetching A Resource

To download and upload a resource use `fetch` function

* to download a resource from a web server
  
  `let response = await fetch(URL)`

* fetch can be used for uploading too
  
  [Example for file upload](https://flaviocopes.com/how-to-upload-files-fetch/)

---

### Example 3: To download use fetch

Observe the usage of `fetch`. It requires both `await` and `async`. If we `await` the result of `fetch` function, we get a response object back.

* [exercise3.html](./20_exercises/exercise3.html)
* [exercise3.js](./20_exercises/exercise3.js)

---

### After Fetching The Resource - Convert to JS Object

Response object does not contain the JSON data we requested right away. To get JSON formatted data object, we need to call `json` function on response object.

`let result = await response.json()`

[For more information about response.json check this page](https://javascript.info/fetch)

---

### Example 4: Convert to JS Object

Observe the usage of `response.json`. It also requires an `await` operator.

* [exercise4.html](./20_exercises/exercise4.html)
* [exercise4.js](./20_exercises/exercise4.js)

---

Practice

---

### Teacher Assisted Practice - displaying Rick character info

By using `async`, `await`, `fetch`, and DOM API, generate a page similar to the image.

![Rick info](./images/lesson-20-rick-info.png) <!-- .element width="300px" style="display: block; margin: 0 auto;" -->

---

### Example 5: Display Rick character info

Study the code for getting data and displaying the result dynamically.

* [exercise5.html](./20_exercises/exercise5.html)
* [exercise5.js](./20_exercises/exercise5.js)

---

### Review - what have we practiced today?

Make sure the following words make sense to you.

```js
async …
await …
fetch(…)
response.json()

console.table()
console.group()
console.groupEnd()
let {name} = data     // let name = data.name
```

---

### Bonus

* Read the documentation and confirm your understanding of Rick and Morty API as a group or an individual
* Google a project idea or use your imagination
* Alternatively produce a similar result to [Rick and Morty API webpage](https://rickandmortyapi.com/)

---

### Sample solution

[Here](https://codesandbox.io/s/redi-and-morty-hgc86?file=/src/index.js) is an example solution for displaying Rick and Morty characters
