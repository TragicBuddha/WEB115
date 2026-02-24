
const myDiv = document.querySelector("#myDiv");

// Step A: create and add a heading element with text
let h1 = document.createElement("h1");
h1.textContent = "Welcome to DOM homework.";
myDiv.appendChild(h1);

// Step B: create and add a paragraph element with text
let p = document.createElement("p");
p.textContent = "This is your first DOM homework assignment.";
myDiv.appendChild(p);

// Step C: create and add an unordered list element 
// that contains three list item elements with any text
let ul = document.createElement("ul");
myDiv.appendChild(ul);

let li1 = document.createElement("li");
li1.textContent = "Item 1";

let li2 = document.createElement("li");
li2.textContent = "Item 2";

let li3 = document.createElement("li");
li3.textContent = "Item 3";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Step D: Add class "highlight" to the h1 element
h1.className = "highlight";

// Step E: Add a background color to the heading with class "highlight"
let highlightElements = document.querySelectorAll("h1.highlight");
highlightElements[0].style.backgroundColor = "yellow";

// Step F: Create a button element below myDiv that says add new list item
let button = document.createElement("button");
button.textContent = "Add new list item";
document.body.appendChild(button);

// Step G: Add an event listener to the button that 
// adds a new list item to the unordered list when clicked
// Step H: Each new list item should have a random color and the text 
// "New List Item X", where X is the number of new list item.
let newItemNumber = 0;

button.addEventListener("click", function() {
    let newLi = document.createElement("li");
    newLi.textContent = `New List Item ${newItemNumber + 1}`;
    newLi.style.color = colorRandomizer();
    ul.appendChild(newLi);
    newItemNumber++;
});

// Step i: add an event listener to the myDiv element 
// that changes the background color to a random color when the user clicks on the myDiv element.
myDiv.addEventListener("click", function() {
    myDiv.style.backgroundColor = colorRandomizer();
});


// Function to generate random color
function colorRandomizer() {
    let r = randomInteger(255)
    let g = randomInteger(255)
    let b = randomInteger(255)
    return `rgb(${r}, ${g}, ${b})`;
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

