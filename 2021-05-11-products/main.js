let products = [
    { name: "Shoe", price: 8, description: "For your feet" },
    { name: "Shirt", price: 3, description: "Covers your belly" }
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let divElement = document.createElement("div");
    // not pretty. BONUS: Make it a lot nicer, with more divs and CSS :)
    divElement.textContent = product.name + " (" + product.description + "): " + product.price + "EUR";
    document.body.appendChild(divElement);
}
