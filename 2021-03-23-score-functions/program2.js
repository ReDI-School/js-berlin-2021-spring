// Define score function
function score(age, height) {
    return age * 10 + height;
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

// Define classmate's values
let yourAge = 35;
let yourHeight = 175;

// Compute my score
let myScore = score(myAge, myHeight);

// Compute your score
let yourScore = score(yourAge, yourHeight);

// Compute the winner
let winner = whoWon(myScore, yourScore);
console.log(winner);