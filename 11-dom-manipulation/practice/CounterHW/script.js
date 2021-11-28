// COUNTER EXERCISE

// Select the body element from index.html
// Set an attribute of 'style' to the body tag and add a background color of anything other than white

const bodyElement = document.querySelector('body');
bodyElement.setAttribute('style', 'background-color: #000080')

/* -------------------------------------------------------------------------- */

// Create an h1 element
// Append a new h1 element to the body element as a child
// Add text to the h1 element 

let h1Element = document.createElement('h1')
bodyElement.appendChild(h1Element)
h1Element.innerText = 'This is the text inside my body';

// Assign the background color of this element to something unique

h1Element.setAttribute('style', 'background-color: beige')

// Set a new style attribute to the h1 element

h1Element.setAttribute('style','font-family: Arial')

// Add font size to the h1Element

h1Element.setAttribute('style' , 'font-size: 100px')

// Set the default text to the number zero

h1Element.innerText = 0
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text

let buttonElement = document.createElement('button')

// Append the button element to the body element

bodyElement.appendChild(buttonElement)

// Add text to the boxButton

buttonElement.innerText = 'click here to add text'

// Add a class attribute to boxButton

buttonElement.className = 'boxy'

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text

let deleteButtonElement = document.createElement('button')

// Add the button element to the body element

bodyElement.appendChild(deleteButtonElement)

// Add text to the button element

deleteButtonElement.innerText = 'delete this text'

// Add a class attribute of style to the button element

deleteButtonElement.className = 'delete-text'

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value

// add event lister to button element
// create a function to increase by 1

// buttonElement.addEventListener('click' , testClick) // makes button clickable

// function testClick(){
// console.log('this is the string im testing')
// } // this is a test to see if the event is working in the console
let i = 0
function addBox (){
    h1Element.setAttribute('id' ,i)
    h1Element.innerHTML = i
    bodyElement.appendChild(h1Element)
    i++
}
buttonElement.addEventListener('click' , addBox)

/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
// Create functionality that, when you click this button it decreases the h1 value

function deleteBox (){
    h1Element.setAttribute('id' ,i)
    h1Element.innerHTML = i
    bodyElement.appendChild(h1Element)
    i--
}
deleteButtonElement.addEventListener('click' , deleteBox)