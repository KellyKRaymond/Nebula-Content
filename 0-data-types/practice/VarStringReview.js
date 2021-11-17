// 1. Create two string variables and concatenate them 
const color1 = "blue"
const color2 = "green"
const color3 = color1.concat(color2)
console.log(color3)

// 2. Create variables; name, age, and favoriteFood and using a template literal return the string 'Hello, my name is _ , I am _ years old and my favorite food is _'
        // Note, the underscores should be replaced by your variable values

const name = "Kelly"
let age = 27
let favFood = "Tacos"

console.log(`Hello, my name is ${name},I am ${age} years old, and my favorite food is${favFood}`)
// 3. Using JavaScript, find the length of "Finding the length of a string is easy!"

let sentence = ("finding the length of string is easy!")
console.log(sentence.length)

// 4. PT 1: Create a variable and set it equal to a random number between 0 and 50
//      PT 2: Reassign that variable to the nearest whole number
let amtOfDogs =Math.random() *50 

// console.log you last name
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letter1 = letters[17]
let letter2 = letters[0]
let letter3 = letters[24]
let letter4 = letters[12]
let letter5 = letters[14]
let letter6 = letters[13]
let letter7 = letters[3]

let myLName = `${letter1},${letter2},${letter3},${letter4},${letter5},${letter6},${letter7}`
console.log(myLName)

// 6. PT 1: Create a variable and set it equal to a number
//     PT 2: Reassign that variable to the value of it times itself
//     PT 3: console.log the square root of the new value

let num1 = 25
num1 *=5
console.log(num1)
let answer = (Math.sqrt(25))
console.log(answer)

// 7. Create a variable and set it equal to a string and then console.log the last letter
let hydrate =("Drink more water")
console.log(hydrate[15]);
// string.length-1

// 8. Using the string below, console.long only your name
        let classList = 'The people is this class are Daniel, Jordan, and Kelly'
        let myName = classList[classList.length-1]
        console.log(myName)

       // (classlist.slice(49,54))
// ******* just pulled off the y??? ***** ask about this one *******


// 9. Don't just count. Using JS and the string below, what index is 'w' at?
        let stringExample = 'The index and character position are actually two different numbers because indexes start with 0'
console.log(stringExample.indexOf("w"));


// 10. Create variables for the number 33 and the number 7. 
//      Using two different Math methods, create new variables from these numbers
//      There should now be 4 total variables
let firstNum = 33
let secondNum = 7
let thirdNum = (firstNum + secondNum)
let fourthNum =(Math.sqrt(thirdNum))

console.log(thirdNum)
console.log(fourthNum)


// BONUS: Given the list of names below, use a JavaScript method to find the one that would come first in a dictionary
    let nameList = 'George, Heather, Peter, Anna, Josh, Linda'

    const arr = nameList.split(" ")
    arr.sort()

    console.log(arr)


