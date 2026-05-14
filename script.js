const container = document.getElementById("container");
const gridSize = 16 * 16;

for (let i = 1; i <= gridSize ; i++){ 
    const square = document.createElement("div"); // create the element, and append inside the loop
    square.style.cssText = "width:50px ; height:50px; border:2px solid black"; //change this hardcoded value ltr !!
   
    container.appendChild(square);

    function changeColor () {
        square.style.cssText = "width:50px ; height:50px; border:2px solid black ; background-color: black"; //you're not replacing the cssText, you're adding to it! 
    }
    square.addEventListener('mouseenter' , changeColor ); //its inside the loop cus the variable square only exists inside
}

const buttonColor = document.createElement("button");
heading.appendChild(buttonColor);
buttonColor.textContent = "new color grid";
buttonColor.style.cssText ="color:#f06e95; background-color:#276ce4"

const buttonBlack = document.createElement("button");
heading.appendChild(buttonBlack);
buttonBlack.textContent = "new black grid";
buttonBlack.style.cssText ="color:white; background-color:black"

function popupColor () {
    let input = prompt ("Enter a positive number less than 100 for the new grid:" , " ")
    if (input > 100 || input < 1 || isNaN(input)) {
        // isNaN() returns true if the value is not a valid number.
        alert ("pick a positive number");
    } else {
    // replace the grid in the container
    const newGridSize = input * input;
    container.replaceChildren(); //to delete the previous element
    const newSize = 800/input; //you're not making new squares, youre just dividng up the space into smaller squares according to input

    for (let i = 1; i <= newGridSize ; i++) {
    const newGrid = document.createElement("div");
    newGrid.style.cssText = `width: ${newSize}px; height:${newSize}px; border:2px solid black`;
    /* line 34 Previous Syntax Error : i had a feeling u needed to use `` and ${} for the variable 
    but i wasnt sure if it was going to work or not */
    container.appendChild(newGrid);

    function randomColor () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb("+r+","+g+","+b+")";
        //returns a colour string so newChangeColor() can use it
    } 
    
    let opacity =0;
    function changeOpacity () {
    for (let x=0; x<=1; x++) {
        if (opacity<1){
            return opacity += 0.1;
        } else {
           return opacity = 1;
        }
    }
}
//opacity: ${changeOpacity()
    function newChangeColor () {
        newGrid.style.cssText = `width: ${newSize}px; height:${newSize}px; border:2px solid black ; background-color: ${randomColor()}`;
        // the new size is a variable, whereas the randomColor is a function so u have to include the () !!
    }
    newGrid.addEventListener('mouseenter' , newChangeColor);    
    }
    }
}
//square size must shrink as grid increases, control squares per side not total squares created
buttonColor.addEventListener ("click" , popupColor);

function popupBlack () {
    let input = prompt ("Enter a positive number less than 100 for the new grid:" , " ")
    if (input > 100 || input < 1 || isNaN(input)) {
        // isNaN() returns true if the value is not a valid number.
        alert ("pick a positive number");
    } else {
    // replace the grid in the container
    const newGridSize = input * input;
    container.replaceChildren(); //to delete the previous element
    const newSize = 800/input; //you're not making new squares, youre just dividng up the space into smaller squares according to input

    for (let i = 1; i <= newGridSize ; i++) {
    const newGrid = document.createElement("div");
    newGrid.style.cssText = `width: ${newSize}px; height:${newSize}px; border:2px solid black`;
    /* line 34 Previous Syntax Error : i had a feeling u needed to use `` and ${} for the variable 
    but i wasnt sure if it was going to work or not */
    container.appendChild(newGrid);

    function colorBlack () {
        newGrid.style.cssText = `width: ${newSize}px; height:${newSize}px; border:2px solid black ; background-color: black`
    }
    
    newGrid.addEventListener('mouseenter' , colorBlack); }
}
}

buttonBlack.addEventListener('click', popupBlack);

