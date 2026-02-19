



const myDiv = document.querySelector("#myDiv");

// Step 4a: create and add a heading element with text
let h1 = document.createElement("h1");
h1.textContent = "Welcome to DOM homework.";
myDiv.appendChild(h1);

// Step 4b: create and add a paragraph element with text
let p = document.createElement("p");
p.textContent = "This is your first DOM homework assignment.";
myDiv.appendChild(p);

// Step 4c: create and add an unordered list element 
// that contains three list item elements with any text
let ul = document.createElement("ul");
myDiv.appendChild(ul);

let li1 = document.createElement("li");
li1.textContent = "First item";

let li2 = document.createElement("li");
li2.textContent = "Second item";

let li3 = document.createElement("li");
li3.textContent = "Third item";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Step 4d: Add class "highlight" to the h1 element
h1.className = "highlight";

// Step 4e: Add a background color to the heading with class "highlight"
let highlightElements = document.querySelectorAll("h1.highlight");

// Step 4g: Add an event listener to the button that adds a new list item to the unordered list when clicked
let listItemNumber = 0;

let button = document.querySelector("button");
button.addEventListener("click", function() {
    let newLi = document.createElement("li");
    newLi.textContent = "New List Item ${listItemNumber + 1}";
    newLi.style.color = colorRandomizer();
    ul.appendChild(newLi);
});

// Function to generate random color
function colorRandomizer() {
    let r = "red";
    let g = "green";
    let b = "blue";
    letters = [r, g, b];
    let letChoice = letters[//Need a way to randomly select index of letters];
    return letChoice;  
}
// Step 4g: Add an event listener to the button that adds a new list item to the unordered list when clicked


