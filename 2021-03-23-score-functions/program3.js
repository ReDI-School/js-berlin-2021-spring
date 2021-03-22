// Define score function
function score(age, height, numberOfSiblings) {
    return age * 10 + height + numberOfSiblings * 5;
}

// Define whoWon function
function whoWon(myScore, yourScore) {
    // Find the winner after comparing scores
    if (myScore > yourScore) {
        return "I won";
    } else if (myScore < yourScore) {
        return "You won";
    } else {
        return "It's a draw";
    }
}

// Define my values
let myAge = 42;
let myHeight = 166;
let myNumberOfSiblings = 2;

// Define classmate's values
let yourAge = 35;
let yourHeight = 175;
let yourNumberOfSiblings = 1;

// Compute my score
let myScore = score(myAge, myHeight, myNumberOfSiblings);

// Compute your score
let yourScore = score(yourAge, yourHeight, yourNumberOfSiblings);

// Compute the winner
let winner = whoWon(myScore, yourScore);
console.log(winner);