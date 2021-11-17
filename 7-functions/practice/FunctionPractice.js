//Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. 
//Test the function with some numbers.
function multiplyBy10(num) {
return num * 10
}
const result = multiplyBy10(8)
console.log(result)
// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.

const sayGoodBye = function(name){
return `see ya!${name}`
}
console.log(sayGoodBye("Kelly")) 

// Define a function called evenNumbers that takes in an array as an argument and iterates over that 
// array and returns a new array with all the even numbers from that input array 
//(Hint: you can use the modulus operator to check whether a number is even or not).

const getEvenNumbers = function(myArr){
    const evenNums = []; 
    for(let i = 0; i < myArr.length; i++){
    if (myArr[i]%2 === 0){
        evenNums.push(myArr[i])
    }
    }console.log(evenNums)
    return evenNums
}
const array = [1, 4, 8, 13]
getEvenNumbers(array)


// Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.