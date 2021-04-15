
function changePageBackground() {
    let contentElement = document.getElementById('myContent');
    contentElement.style.backgroundColor = "tomato";
    // background-color => backgroundColor
    // font-size => fontSize 
    console.log(contentElement);
}




function changePageBackground() {
    let inputElement = document.getElementById('pageBackgroundInput');
    let backgroundColor = inputElement.value;
    document.body.style.backgroundColor = backgroundColor;

}

function changeContentBackground() {
    let inputElement = document.getElementById("contentBackgroundInput");
    let contentElement = document.getElementById('myContent');
    let backgroundColor = inputElement.value;
    console.log(inputElement);
    console.log(contentElement);
    console.log(backgroundColor);
    contentElement.style.backgroundColor = backgroundColor;
}

function changeMyName() {
    let inputElement = document.getElementById("myNameInput");
    let nameElement = document.getElementById("myName");
    let newName = inputElement.value;
    nameElement.textContent = newName;
}
