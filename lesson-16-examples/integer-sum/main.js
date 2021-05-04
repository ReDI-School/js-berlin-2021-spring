let inputElement = document.getElementById("number");
let displaySum = document.getElementById("display-sum");

function sum() {
  let number = inputElement.value;
  let count = 0;
  let sum = 0;
  while (count <= number) {
    sum += count;
    count++;
  }

  displaySum.textContent = sum;
}
