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
    if (input > 100 || input < 1) {
        alert ("pick a positive number");
    } else {
    // replace the grid in the container
    container.replaceChildren();
    }
}
button.addEventListener ("click" , popup);