<!-- .slide: id="lesson7" -->

# Basic Frontend - Spring 2021

Lesson 7, Tuesday, 2021-03-23

---

<!-- .slide: id="intro-functions" -->

# Intro to JS functions

---

### Code's ability

The facts are represented as values

```js
“Carlo” // someone has this as a name

23 // maybe someone’s age, or shoe size

true // it is the case that …
```

---

Programs get all so powerful to the degree that they can produce new information from existing data

For producing new info, we need operators

```js
2 + 3

canSpeakEnglish || canSpeakGerman
```

---

Operators provided by JS are limited in number

- Arithmetic
- Assignment
- Comparison
- Logical
- String

---

Also limited in how many input values they take

Takes 2:

```js
value1 + value2

variable = value

value1 < value2

value1 || value2
```

---

Takes 1:

```js
!value

-value
  
(value)
```

---

Since we have only 1 or 2 input values, we could position an operator in fixed number of places

in the middle: 

```js
value1 + value2

variable = value

value1 < value2
```

---

Sometimes we position it before, or after or around the value

Before:

```js
!value

-value
```

---

After:

```js
variable++
```

Around:

```js
(value)
```

---

Operators are also limited in the type of input values they take

- Arithmetic: only numbers
- Assignment: any type
- Comparison: only between the same types, i.e. string to string
- Logical: only booleans
- String: only strings

---

When we perform an operation many times, we have to repeat the whole expression all the time

```js
person1Age * 10 + person1Height

person2Age * 10 + person2Height

person3Age * 10 + person3Height
```

---

In producing new information from existing data,

native operators are useful when

- type of operation
- type of input values
- number of input values
- code duplication

are not an issue for us.

---

However if we want to bypass these limitations, we need to define our <span style="color: indianred;">own operators</span>.

In Abdullah’s game, hypothetically we can think of an operator, which takes 2 input values, and produces the score

```js
person1Age @ person1Height
```

---

### Increasing Code’s ability

The custom operator we define can be used like this

`score(person1Age, person1Height)`<br><br>

`score`: is the name of our operator

`person1Age`: is the first input value we pass

`person1Height`: is the second input value we pass

---

When working with custom operators, the order of input values matters a lot

```js
score(person1Age, person1Height) !== 
  score(person1Height, person1Age)
```

Contrast this to arithmetic operators

```js
2 + 3 === 3 + 2
```

---

### Functions

How do we define score operator?

```js
function score(age, height) {
   return age * 10 + height;
}
```

In JS, a custom operator is called a <span style="color: indianred;">function</span>

---

How do we define any operator?<br><br>

```js
function <operator>(<input1>, <input2>, …, <inputn>) {
   // some logical computation
   return <result>;
}
```

---

### Exercise

Now it is your turn to implement score function.<br><br>

First define score function which takes 2 input values<br><br>

`   1st input value must be age`

`   2nd input value must be height`<br><br>

---

Second use score function

`  once with your own values`

`  once with your classmate’s values`

---

Hint 1: to define a score function with two input values; age and height, follow

```js
function score(age, height) {
 return age * 10 + height;
}
```

---

Hint 2: to use score function, follow

```js
score(42, 166);
score(30, 175);
```

---

### Exercise 2

Now implement score2 function. 

`  1st input value must be height`

`  2nd input value must be age`

Use it like this

`  score2(166, 42);`

---

### Questions

You have <span style="color: cadetblue;">implemented</span> two functions: score and score2.

Tell the difference you observe, in the way you typed the <span style="color: indianred;">parameters list</span>

function score<span style="color: indianred;">(age, height)</span>

function score2<span style="color: indianred;">(height, age)</span>

---

You have <span style="color: cadetblue;">called</span> score and score2 functions.

Tell the difference you observe, in the way you passed input values in the <span style="color: indianred;">arguments list</span>

score<span style="color: indianred;">(42, 166)</span>;

score2<span style="color: indianred;">(166, 42)</span>;

---

Is there any difference between the <span style="color: indianred;">body of the score function</span> and the <span style="color: cadetblue;">body of the score2 function</span>

<p style="color: indianred;">{ 
  return age * 10 + height;
}</p>
<p style="color: cadetblue;">{
  return age * 10 + height;
}<p>

---

### Observations

Observe the fact that changing the position of input values did not effect the body of the functions

It only effected the positions of the parameters in the parameter list

Also the positions of the arguments in the arguments list

---

### Rule

The positions of the arguments must match the positions of the parameters in the function <span style="color: indianred;">signature</span>

|Signature|Usage|Correct|
|---------|-----|-------|
|function score(age, height)|score(42, 166);|✅|
|function score(height, age)|score(42, 166);|❌|

---

### Homework 1

Implement a program to play Abdullah’s game using the score function

---

### Guide for homework

1. define myAge, myHeight, yourAge, yourHeight variables and initialize them
1. define myScore and initialize it with the outcome of the score function given your age and height
1. define yourScore and initialize it with the outcome of the score function given your classmate’s age and height
1. compare two scores and print who wins the game or it is a draw

---

### Homework 2

Write the same program using two functions: score and whoWon

1. whoWon takes two arguments: myScore, yourScore. It returns either “I won” or “You won” or “It’s a draw” after comparing myScore with yourScore
1. You call the whoWon function and print the winner

---

### Bonus Homework

Modify your score function to take a 3rd value called numberOfSiblings

The rule for calculating the score should be

```js
age * 10 + height + numberOfSiblings * 5
```

---

You can find the homework solutions here

- [Homework 1](2021-03-23-score-functions/program.js)
- [Homework 2](2021-03-23-score-functions/program2.js)
- [Bonus Homework](2021-03-23-score-functions/program3.js)
