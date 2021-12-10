// 1.   Write a higher order function that manipulates every number in an array 
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]

const calculating = (nums, func) => {
    const calculation = func(nums)
    return calculation 
}
function doubleThis(nums){
    let doubled = []
    for(let i = 0; i < nums.length; i++){
        doubled.push(nums[i] * 2) 
    }
    return doubled
}
console.log(calculating([1,2,3,4,5], doubleThis))

function halfThis(nums){
    let halfed = []
    for(let i = 0; i <nums.length; i++){
        halfed.push(nums[i] / 2)
    }
    return halfed
}
console.log(calculating([1,2,3,4,5], halfThis))

function power(nums){
    let thePower = []
    for (let i = 0; i < nums.length; i++){
        thePower.push(Math.pow(nums[i],2))
}
    return thePower
}
console.log(calculating([1,2,3,4,5],power))

// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 1
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2

const string = (string, func) => {
    const greeting = func(array);
    return greeting
}
function countString = (greeting) =>{
    
    for(let i =0; i <string; i++)

}









// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18
//      Ex: minimizeNums(average, [5,8,12,15]) => 10
