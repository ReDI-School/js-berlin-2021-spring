<!-- .slide: id="lesson1" -->

# Basic Frontend - Spring 2021

Lesson 1, Tuesday, 2021-03-02

---

### Lesson overview

- Course overview 
- introduction to JavaScript
- basic JavaScript data types
- basic JavaScript operators

---

### Welcome to JavaScript!

---

> It does not matter what we cover, but what you discover
>
> \- ~Noam Chomsky~ Victor Weisskopf

(recently learned that the quote is by Victor Weisskopf, a "famous" physicist, but it's often attributed to Chomsky because he mentioned in some interviews. Still a good quote.)
<!-- .element: class="fragment" data-fragment-index="2" -->

---

### Course overview 
#### JS teachers, in alphabetical order

- Abdullah
- Adrian
- Ahmee
- Carlo (hey, that's me!)
- Ekas
- Harald
- Nada
- Owen
- Sevtap

---

### Course overview 
#### Lesson structure 

- 2 hour lessons, with a 10 minute break
- a new topic (mostly) every week
- a mix of theory/explanation and short exercises to practice

---

### Course overview 
#### Slides

- we'll create slides (like the one you are seeing now) for each lesson
- published after each lesson and shared on Slack
- always accessible at this link: https://redi-school.github.io/js-berlin-2021-spring/

---

### Course overview 
#### Theory / Exercises / homework 

- homeworks (exercises you're supposed to do at home) are given on Thursday
<!-- .element: class="fragment" -->
- not mandatory, but highly encouraged
<!-- .element: class="fragment" -->
- no grades, no evaluations
<!-- .element: class="fragment" -->
- we can provide useful feedback 
<!-- .element: class="fragment" -->
  - but only if you share your code
<!-- .element: class="fragment" -->

---

### Course overview 
#### Theory and practice 

- not in contrast with each other
- one complements the other
- both equally important
- without theory, there's nothing to practice
- without practice, it's hard to understand the theory

---

### Course overview 
#### Questions

- don't be shy (or scared), ask questions!
  - as many as possible, or as you want/need
- interrupt us
- there are no stupid questions
- ask us to repeat stuff, if you think it's not clear 
- if something's not clear for you, it's likely that it's not clear for many others

---

### Class
#### Course overview

1. JavaScript as a programming language
1. JavaScript and the browser / web
1. JavaScript and remote/external resources
1. final project

---

### Class
#### Course overview: JavaScript as a programming language

- basics of programming
- topics, concepts and patterns common to every programming language
- basic math and logical operations
- text manipulation
- understanding and controlling the flow of a program 

---

### Class
#### Course overview: JavaScript and the browser / web 

- interacting with a web page
- creating / manipulating HTML elements on the fly
- change CSS properties dinamically
- listen and respond to user inputs and/or interactions
- much more...

---

### Class
#### Course overview: JavaScript and remote resources 

- get data from external websites and services
- use third-party plugins and libraries
- build complex apps

---

### Class
#### Course overview: final project 

A project chosen by you to put into practice everything we've learned in class

---

# Questions?

#### (Come on, this is your moment)
<!-- .element: class="fragment" -->

---

### Pillars of Web Development

| HTML | CSS | JavaScript |
| ---- | --- | ---------- |
| ![HTML5](images/HTML5_Logo.svg) <!-- .element height="64px" width="64px" --> | ![CSS3](images/css3.svg) <!-- .element height="64px" width="64px" --> | ![JS](images/javascript-logo.svg) <!-- .element height="64px" width="64px" --> |
| *Content* |  *Presentation* | *Dynamic Effects* |
| Nouns | Adjectives | Verbs |

```html
<p>Hey</p>  <!-- HTML: Adds a paragraph -->
```

```css
p {color: red;}  /* CSS: Makes the paragraph red */
```

```js
p.remove(); // JavaScript: removes the paragraph
```

---

### JavaScript - What is it?

* JS is a *programming language*
* JS allows you to implement complex features on web pages
* JS is the third layer of the cake of web technologies

---

* Interactivity?
* Dynamic effects?
* 2D/3D graphics?
* Timed events?

If you see any of this in a web page, it's (probably) JavaScript!

---

### JavaScript - "Full Stack"

* For servers, back-end: [Node.js](https://nodejs.org/en/)
* For mobile apps: [React Native](https://facebook.github.io/react-native/), [Cordova](https://cordova.apache.org/)
* For desktop apps: [PWAs](https://developers.google.com/web/progressive-web-apps), [Elektron](https://www.electronjs.org/)


---

### Tools

We'll be using these tools during our course:

* [Chrome Browser](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MDN Web Documentation](https://developer.mozilla.org/en-US/)

---

### Tools: Chrome Browser

* https://www.google.com/chrome/
* Most common browser
* Most up to date
* Excellent Development Tools (F12)

---

### Tools: Visual Studio Code

* https://code.visualstudio.com/
* Open source IDE (**I**ntegrated **D**evelopment **E**nvironment)
* Great tools
* Good defaults
* Fast

---

### Tools: MDN Web Documentation

* https://developer.mozilla.org/en-US/
* Up to date reference for JS
* Good guides
* Free

The way I use it:
<!-- .element: class="fragment" data-fragment-index="1" -->
- open my favourite search engine
<!-- .element: class="fragment" data-fragment-index="1" -->
- type <!-- .element: class="fragment" data-fragment-index="1" --> `mdn [topic I'm looking for]`
<!-- .element: class="fragment" data-fragment-index="1" -->
- for example: <!-- .element: class="fragment" data-fragment-index="1" --> `mdn javascript variables`
<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Additional Material

* [javascript.info](https://javascript.info/) - tutorials with nice (often visual) explanations  
* [freecodecamp.org](https://www.freecodecamp.org/) - full free courses on many topics
* [udemy.com](https://www.udemy.com): Introduction to JS (course)
* [codeacademy.com](https://www.codecademy.com): Introduction to JS (another course)
* [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources
* [learnjavascript.online](https://learnjavascript.online): very good online course, but costs 40€

---

### The standard

* Standardized Specification of JavaScript
* Very technical, not good for learning
* [You can see it here, if you want to :/](http://www.ecma-international.org/ecma-262/10.0/index.html)

---

### Names of Special Characters

|||
| --- | --- |
| `(` Parentheses `)` | `<` Angle brackets `>` |
| `{` Braces, or curly braces `}` | `&` Ampersand `&` |
| `[` Brackets, or square brackets `]` | &#124; Vertical bar, or pipe &#124; |
| `;` Semicolon `;` | `:` Colon `:`  |
| `'` Single quote `'`| `#` Hash or number sign `#` |
| `"` Double quote `"` | `` ` `` Back tick `` ` `` |
| `_` Underscore `_` | `*` Asterisk `*` |
| `/` Slash, or Forward slash `/` | `~` Tilde `~` |
| `\` Backslash `\` | `^` Caret or circumflex `^` |

---

<!-- .slide: id="basic-data-types" -->

# Basic Data Types

---

### Let's start with JavaScript!

* Open Google Chrome
* Hit `F12` key
* Click on **Console**

---

### Enter Some Data

* Try entering your name
<!-- .element: class="fragment" data-fragment-index="1" -->
* try entering your shoe size
<!-- .element: class="fragment" data-fragment-index="1" -->
* or anything else you want, really
<!-- .element: class="fragment" data-fragment-index="1" -->

What did you try? What did you see?
<!-- .element: class="fragment" data-fragment-index="2" -->

---

### Data Types

* JavaScript seems to be picky about the data we enter
* In order to understand how to enter data, we need to know about **Data Types**

---

### Data Types: Number

* One basic data type is called **Number**
* A Number can be a positive *integer* `(1, 2, 42)`
* or a negative one `(-1, -2, -42)`
* or a *floating point* `(0.25, -4.5)`

---

### DIY

Open the console, and type in the following numbers:

* Your age
* The number of siblings you have


---


### Numerical Operators

Basic mathematical operators:

`+` addition <br>
`-` subtraction <br>
`*` multiplication <br>
`/` division <br>
`**` exponentiation

---

### Quick Quiz

Let's say, everyone here wants to go to the cinema with their siblings.

How many people in total are going to the cinema?
<!-- .element: class="fragment" -->

A ticket to watch the movie *The Joker* costs 8€, how much do we have to pay in total?
<!-- .element: class="fragment" -->

Harald and Adrian volunteered to pay for the tickets, how much each one pays?
<!-- .element: class="fragment" -->

Can they afford buying popcorn too?
<!-- .element: class="fragment" -->

---

### Data Type: String

* A **String** is a sequence of characters 
    * a good way to represent text
* It starts and ends with a `"` double quote
* It can also start and end with a `'` single quote
* Examples: `"Hello"`, `'Sevtap'`

---

### DIY

Open the console, and type in the following strings:

* Your full name
* Your favourite food 
* Name of your favourite book / tv series / anime 

---

### Strings and Quotes

Strings start and end with  (`'`) or (`"`). But what if we want to add a quote within our string?

```js
"He said: "Hello""
```

We can escape the quote with a backslash (`\`):

```js
"He said: \"Hello\""
```

---

### Practice

Can you do the same using `'` single quotes?

Try writing this string:

`'She said: 'Hello''`

---

### Special Characters

If you want a backslash in a string, you need to escape it: `"\\"`

There are some special characters in strings, for example:

* `"\n"` - new line
* `"\t"` - tab


---


### Quiz: Which strings are correct?

```plaintext
"Hello"
'World'
"He said "hello" to me"
'Let's go!'
""
'This is a\nnew line'
'This is a backslash: \'
```

---

### Solution

```js
"Hello"                        // CORRECT
'World'                        // CORRECT
"He said "hello" to me";       // WRONG - unescaped quotes
'Let's go!'                    // WRONG - unescaped '
""                             // CORRECT
'This is a\nnew line';         // CORRECT
'This is a backslash: \';      // WRONG - escaped '
```

---

The addition operator can be used on Strings and Numbers:

```js
1 + 1                // is 2
"hello" + " world"   // is "hello world"
```

---

### Importance of data types

```js
1 + 1        // is 2
"1" + "1"    // is "11"
```

Make sure to always choose the correct data type for your data,
since the operators in JavaScript behave differently depending on the data type.

---


### Data Type: Boolean

* **Boolean** describes a yes/no situation
* in JavaScript, we use `true` or `false`

---


### DIY?

Open the console, and type in the following:

* true
* false

Yep, that is it.

Why would we dedicate an entire data type for just two values?

YOU JUST WAIT!
<!-- .element: class="fragment" -->

---

### Comparison operators

For all data types:
* `===` strict equality
* `!==` strict inequality

Numbers only:
* `>` greater than
* `<` less than
* `>=` greater or equal
* `<=` less or equal

All of these return a boolean!

---

### Let's practice

Use JavaScript to check if:
* you are older than me (I'm 39)
* your first name is the same as mine 

---

### Solution

```js
39 > 36                   // true - I am older
"Carlo" === "Owen"   // false - not the same first name
```

---


### Logical Operators

These operators also work only on Boolean values:

* `!` Logical NOT
* `&&` Logical AND
* `||` Logical OR

We are not going to explain them today, but definitely when we talk about conditionals.

---

### Data Type: Undefined

*  **Undefined** has only one value: `undefined`
* it is just `undefined`
* it means there is no value here

---

### Try it out

Now, try to enter some data to the JavaScript console, but think of the data type first:

* Your name
* Your shoe size
* Wether you think it's ok to put pineapple on pizza 

---

### Try it out: Solution

```js
"Carlo"
45
false
```

---

### Summary: what did we learn?

- what is JavaScript?
<!-- .element: class="fragment"  -->
- how do we open the JavaScript console in the browser?
<!-- .element: class="fragment"  -->
- what can we do in the JavaScript console?
<!-- .element: class="fragment"  -->
- what operators have we learnt?
<!-- .element: class="fragment"  -->
- what data types have we learnt?
<!-- .element: class="fragment" -->

---

### Summary: Basic Data types 

- number
- string 
- boolean
- undefined 

---

### Summary: Operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * / **` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `30 !== 25`<br/>`20 >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `true && !false`<br />`9 >= 5 && 1 < 15` |
