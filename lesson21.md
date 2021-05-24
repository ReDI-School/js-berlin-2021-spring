<!-- .slide: id="lesson21" -->

# Basic Frontend - Spring 2021

Lesson 21, Tuesday, 2021-05-25

---

### Recap: asynchronous functions

- we need to get access to remote resources
- we don't know how long it will take for those resources to be available
- we need a way to wait for the resource to be ready, while at the same time continue doing other things

The solution to this problem is the use of asynchronous functions.

---

### Recap: asynchronous functions

Inside of an asynchronous function we can use the fetch api together with async/await.

```js
// create an asynchronous function
async function getRemoteData() {
    // we try to get access to a remote resource 
    // and tell to JavaScript to wait until we receive a response
    let response = await fetch("http://some-remote-resource.com");
    // once the reponse is ready, we convert it
    // into a JavaScript array or object (or a mix of the 2)
    let result = await response.json();
    // at this point we are sure that our data is ready and we can use it
    console.log(result);
}
getRemoteData();
```

---

### Recap: rest countries API

```js
async function getCountry() {
    let response = await fetch("https://restcountries.eu/rest/v2/name/germany");
    let result = await response.json();
    // print the name of the first result in the list
    console.log(result[0].name);
}
getCountry();
```


---

### Query parameters

Similar to the way we use parameters to pass an input to functions, we can do the same them with URLs, using what we call query parameters.

```
http://example.com?param1=value&param2=another-value&param3=some-other-value
```

Query parameters are a list of key/value pairs:

- the list starts with a question mark `?`
- each pair of key/value is separated by a `&`
- between key and value there is a `=` sign

---

### Query parameter: example

Whenever we search something on Google, for example, the keyword we searched is passed as a query parameter.

For example:

https://google.com/search?q=brontosaurus

---

### Query parameters and APIs

Many APIs make use of query parameters to offer extra functionalities.

With the Rest Countries API we can pass a `fields` key to limit the number of fields we want in the resulting objects.

---

### Filtering countries result

- https://restcountries.eu/rest/v2/all?fields=name;capital;currencies

- https://restcountries.eu/rest/v2/name/germany?fields=name;capital;currencies;languages


---

### The Rick and Morty API

https://rickandmortyapi.com

Base url: https://rickandmortyapi.com/api

Endpoints:

- https://rickandmortyapi.com/api/character
- https://rickandmortyapi.com/api/location
- https://rickandmortyapi.com/api/episode

Let's use the one for characters.

---

### The Rick and Morty API

Get a list of all the characters

```js
async function getAllCharacters() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let result = await response.json();
  console.log(result);
}
```

---

### The Rick and Morty API

Get a single character using the id:

```js
async function getAllCharacters() {
  let response = await fetch("https://rickandmortyapi.com/api/character/1");
  let result = await response.json();
  console.log(result);
}
```

---

### The Rick and Morty API

```js
// Filter characters by name:
// https://rickandmortyapi.com/api/character/?name=rick

// Filter characters by name and species: 
// https://rickandmortyapi.com/api/character/?name=rick&species=Human

---

### The Open Trivia Database API

```js
async function fetchMyApi() {
  let response = await fetch("https://opentdb.com/api.php?amount=10&category=9");
  let result = await response.json();
  console.log(result);
}
```

---

### Exercise 1: Rick and Morty API

https://rickandmortyapi.com/documentation/#get-all-characters

1. use the Rick and Morty API to get a list of all characters
1. use the result to display some info on the page:
    - name of the character
    - picture
    - species and status

Look at the example on the next slide, but feel free to style as you wish.

---

### Exercise 1: Rick and Morty API


![](images/lesson-21-rick-and-morty-api-basic.png) <!-- .element: style="width: 600px"-->

---

### Exercise 2: Rick and Morty API

Use the code you've already written in exercise 1. 

1. add an input field and a button to search characters by name 
1. the list of characters will initially be empty


---

### Exercise 3: Open Trivia Database API

Using the Open Trivia Database API, create a page that shows a new question every time

https://opentdb.com/api_config.php

1. display the question on top
1. list all the possible answers below
1. each answer should be clickable
1. after clicking on an answer, a message should appear to say if it was the correct answer or not
1. add a button to load a new question

Bonus: display the answers in a random order on the page


<!-- .slide: id="lesson1" style="font-size: 90%" -->
