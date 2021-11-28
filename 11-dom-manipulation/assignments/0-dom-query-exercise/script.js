
// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello
//      console.log these elements

document.getElementById('first')
console.log(first)
// Q3:  Grab and console.log the text in the h1 that says 'Good Afternoon'

const headings = document.querySelectorAll("h1")
console.log(headings[2])
// Q4:  Grab the h1 with the text that says "Catch me if you can" - console.log it.

const catchMe = document.getElementsByClassName('catch-me')
console.log(catchMe[0])
const catchMe1 = document.querySelector(".catch-me")
console.log(catchMe1)
// Q5:  Grab the span element and change the text to "Got ya"

document.querySelector('span')
const span = document.querySelector('span')

span.innerText = "Got ya"

console.log(span)