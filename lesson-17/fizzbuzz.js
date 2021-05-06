/*
 FizzBuzz:
 * Print all the numbers from 1 to 100 to console
  * If the number is divisible by 3, print “Fizz” instead
  * If the number is divisible by 5 (and not by 3), print “Buzz” instead
  * If the number is divisible by both 3 and 5, print “FizzBuzz” instead
  * 
*/

// There are many ways to solve FizzBuzz! This one is probably the most straightforward to read:
for (let i = 1; i <= 100; i++) {
    // Note the order matters here, you must check for FizzBuzz first
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}