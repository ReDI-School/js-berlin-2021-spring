let shoppingListElement = document.getElementById("shoppingList");
let shoppingInputElement = document.getElementById("shoppingInput");

function addItem() {
    let newItem = shoppingInputElement.value;
    let newElement = document.createElement("div");
    newElement.textContent = newItem;
    shoppingListElement.appendChild(newElement);

    // BONUS 1
    newElement.onclick = function () {
        newElement.remove();

        // BONUS 2 - also set the text to line-through
        // and move the element to the bottom of the list
        newElement.style.textDecoration = "line-through";
        shoppingListElement.appendChild(newElement);
    }
}

function markAllAsDone() {
    let divs = shoppingListElement.children;
    for (let i = 0; i < divs.length; i++) {
        let child = divs[i];
        child.style.textDecoration = "line-through";
    }
}
