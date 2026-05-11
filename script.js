const container = document.getElementById("container");
const gridSize = 16 * 16;

for (let i = 1; i <= gridSize ; i++){ 
    const square = document.createElement("div"); // create the element, and append inside the loop
    square.style.cssText = "width:50px ; height:50px; border:2px solid black";
   
    container.appendChild(square);

    function changeColor () {
        square.style.cssText = "width:50px ; height:50px; border:2px solid black ; background-color: black"; //you're not replacing the cssText, you're adding to it! 
    }
    square.addEventListener('mouseenter' , changeColor ); //its inside the loop cus the variable square only exists inside
}

const button = document.createElement("button");
heading.appendChild(button);
button.textContent = "new grid size";
button.style.cssText ="color:#f06e95; background-color:#276ce4"


function popup () {
    let input = prompt ("Enter a positive number less than 100 for the new grid:" , " ")
    if (input > 100 || input < 1 || input == "string") {
        alert ("pick a positive number");
    } else {
    // replace the grid in the container
    const newGridSize = input * input;
    container.replaceChildren();
    const newSize = 800/input;

    for (let i = 1; i <= newGridSize ; i++) {
    const newGrid = document.createElement("div");
    newGrid.style.cssText = `width: ${newSize}px; height:${newSize}px; border:2px solid black`;
    /* line 34 Previous Syntax Error : i had a feeling u needed to use `` and ${} for the variable 
    but i wasnt sure if it was going to work or not */
    container.appendChild(newGrid);

    function newChangeColor () {
        newGrid.style.cssText = `width: ${newSize}px; height:${newSize}px; border:2px solid black ; background-color: black`;
    }
    newGrid.addEventListener('mouseenter' , newChangeColor);    
    }
    }
}
button.addEventListener ("click" , popup);

//square size must shrink as grid increases, control squares per side not total squares created