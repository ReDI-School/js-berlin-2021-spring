let sockElement = document.getElementById("socks");
let chocolateElement = document.getElementById("chocolates");
let totalPriceElement = document.getElementById("total");

function amountChanged() {
  let totalPrice = 0;
  if (sockElement.value !== "") {
    totalPrice += sockElement.valueAsNumber * 2;
  }
  if (chocolateElement.value !== "") {
    totalPrice += chocolateElement.valueAsNumber * 1;
  }
  totalPriceElement.textContent = totalPrice;
}
