// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array
const array =[1,2,3,4,5,6,7,8]
const doubledAgain = array.map(num => num * 2)

console.log(doubledAgain)

// 2.   Using .map() create a new array that halves all numbers in a given array
const anotherArray =[1,2,3,4,5,6,7,8]
const halfed = anotherArray.map(num => num /2)
console.log(halfed)


// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
const thirdArray =[1,2,3,4,5,6,7,8]
const powPow = thirdArray.map(num => num * num)
console.log(powPow)


// 4.   Using .map() create a new array of all capital strings from an array of lower case strings

const theString = (func, str) => {
const string = "this is my string that has letters in it"
const newString = ""
for(let i = 0; i <string.length; i++){
    return(string.toUpperCase)
}
}
// 5.   Using .map() create a new array of greeting sentences from an array of given people
//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
let people = [
    {name: 'Pamela'}, 
    {name: 'Micheal'},
    {name: 'Angela'}
]


