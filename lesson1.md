<!-- .slide: id="lesson1" -->

# Basic Frontend - Fall 2020

Lesson 1, Tuesday, 2020-08-25

---

### Welcome to JavaScript!

---

> It does not matter what we cover, but what you discover
>
> \- Noam Chomsky

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

If you see any of this in a web page, its JavaScript!

---

### JavaScript - "Full Stack"

* For servers: [Node.js](https://nodejs.org/en/)
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

---

### Additional Material

* [freecodecamp.org](https://www.freecodecamp.org/)
* [udemy.com](https://www.udemy.com): Introduction to JS
* [codeacademy.com](https://www.codecademy.com): Introduction to JS
* [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources

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

# Basic Data Types

---

### Let's start with JavaScript!

* Open Google Chrome
* Hit `F12` key
* Click on **Console**

---

### Enter Some Data

* Try entering your name
* Try entering your shoe size

---

### Data Types

* JavaScript seems to be picky about the data we enter
* In order to understand how to enter data, we need to know about **Data Types**

---

### Data Types: Number

* One basic data type is called **Number**
* A Number can be a positive *integer* `(1, 2, 42)`
* or negative `(-1, -2, -42)`
* or a *floating point* `(0.25, -4.5)`

---

### DIY

Open the console, and type in the following numbers:

* Your age
* The number of siblings you have


---


### Numerical Operators

Basic mathematical operators:

`+ ` addition <br>
`- ` subtraction <br>
`* ` multiplication <br>
`/ ` division <br>
`**` exponentiation

---

### Quick Quiz

Let's say, everyone here wants to go to the cinema with their siblings.

How many people in total are going to the cinema?
<!-- .element: class="fragment" -->

A ticket to watch the movie *The Joker* costs 8€, how much do we have to pay in total?
<!-- .element: class="fragment" -->

Luise and I volunteered to pay for the tickets, how much each one pays?
<!-- .element: class="fragment" -->

Will we be homeless after paying? :p
<!-- .element: class="fragment" -->

---

### Data Type: String

* A **String** is just text
* It starts and ends with a `"` double quote
* It can also start and end with a `'` single quote
* Examples: `"Hello"`, `'Carlo'`

---

### DIY

Open the console, and type in the following strings:

* Your full name
* The name of your neighbor on the right

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

### Addition operator

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
because the operators in JavaScript behave differently depending on the data type.

---


### Data Type: Boolean

* **Boolean** describes a yes/no situation
* in Javascript, we use `true` or `false`

---


### DIY?

Open the console, and type in the following:

* true
* false

Yep, that is it.

It seems not very useful...

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

* Are you older than the person next to your right?
* Do you have the same first name as the person next to you?

---

### Solution

```js
42 > 40                   // true - I am older
"Harald" === "Abdullah"   // false - not the same first name
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
* Wether you had lunch earlier than your neighbor on the left

---

### Try it out: Solution

```js
"Harald"
41
true
```

---


### Summary: Operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * / **` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `30 !== 25`<br/>`20 >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `true && !false`<br />`9 >= 5 && 1 < 15` |
