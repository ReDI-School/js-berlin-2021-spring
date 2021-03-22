// Define score function
function score(age, height) {
    return age * 10 + height;
}

// Define my values
let myAge = 42;
let myHeight = 166;

// Define classmate's values
let yourAge = 35;
let yourHeight = 175;

// Compute my score
let myScore = score(myAge, myHeight);

// Compute your score
let yourScore = score(yourAge, yourHeight);

// Declare the winner after comparing scores
if (myScore > yourScore) {
    console.log("I won");
} else if (myScore < yourScore) {
    console.log("You won");
} else {
    console.log("It's a draw");
}