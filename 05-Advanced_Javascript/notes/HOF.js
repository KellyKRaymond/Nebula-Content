// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
const calculateThis = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation
}
function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}
console.log(calculateThis(2, 4, multiplyTwoNumbers));
//          Ex: calculate(subtract, 2,4) => -2
function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}
console.log(calculateThis(2, 4, subtractTwoNumbers));
//          Ex: calculate(exponent, 2,4) => 16
function exponentTwoNumbers(num1, num2){
    return Math.pow(num1,num2);
}
console.log(calculateThis(2, 4, exponentTwoNumbers));

// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      This will require usage of 'args' object that we have access to in a function
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14
//An array of numbers

const calculateAgain = (array, func) => {
    const calc = func(array);
    return calc
}
function multiplyAll(array){
    let product = 1
    for(let i = 0; i < array.length; i++){
        product *=array[i]
    }
    return product
}
console.log(calculateAgain( [1,4,1,231,5], multiplyAll ))

// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

const modify = (func, phrase) =>{
return func(phrase)
}

const yeller = (phrase) =>{
return phrase.toUpperCase()
}

console.log(modify(yeller,"I need a nap"))

const sarcastic = (phrase) =>{

    for(let i = 0; i < thisPhrase.length; i++)
        let lettersAloneArr = phrase[i].split('')
        // every other index to upper case 
        // slice split need to join them back together 
        // don't want to include the spaces 
        // % to find if its an even or odd character to assign up/low


console.log(modify(sarcastic,'I really like running'))

}
// cake example = need to loop again through phrase
// if ===  a e i o u 
// put the letters into an empty array 
// else return the values of the string 


// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]

//const oneType = (func, arr)=>{

//}

// const findStrings = (arr)=>{
//     find all the strings in array