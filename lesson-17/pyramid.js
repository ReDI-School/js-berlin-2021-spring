// Preferred fast solution: append to a string that represents the current row
let pyramidRow = "";
for (let i = 0; i <= 5; i++) {
    pyramidRow += "*";
    console.log(pyramidRow);
}

// Alternative slow solution, involves a nested loop
for (let i = 0; i <= 5; i++) {
    let currentRow = "";
    // If we are on row index (i) = 1, then we want to draw one "*", i = 2; draw 2 "*", notice the condition
    for (let j = 0; j <= i; j++) {
        currentRow += "*";
    }
    console.log(currentRow);
}