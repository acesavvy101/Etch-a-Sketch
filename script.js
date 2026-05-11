const container = document.getElementById("container");
const gridSize = 16 * 16;

for (let i = 1; i <= gridSize ; i++){ 
    const square = document.createElement("div"); // create the element, and append inside the loop
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.border = "2px solid black";

    container.appendChild(square);
}





