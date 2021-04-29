/* The element where we'll display all the divs we are going to create */
let containerElement = document.getElementById("container");

function createBoxes() {
  /* Number of boxes to display */
  let boxesTotal = 10;

  /* Initialization: let's start from 0 */
  let counter = 0;

  /* 
  Condition: let's execute the code inside as long as counter is smaller than boxesTotal. 

  In other words: let's run the code for boxesTotal times
   */
  while (counter < boxesTotal) {
    /* Create a box, (an empty div element) */
    let box = document.createElement('div');
    /* Let's give the box a width and height */
    box.style.width = "100px";
    box.style.height = "100px";
    /* Let's give the box a beautiful color */
    box.style.backgroundColor = "limegreen";
    /* Add some margin on top, to separate the boxes from one another */
    box.style.marginTop = "16px";
    /* Not necessary, but let's also add some content inside the box, 
    to show the number of the box */
    box.textContent = counter;

    /* Append the box to the container, to display it on the page */
    containerElement.appendChild(box);

    /* Update: important to avoid having an infinite loop */
    counter++;
  }
}
