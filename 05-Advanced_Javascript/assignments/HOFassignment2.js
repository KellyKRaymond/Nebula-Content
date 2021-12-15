// .filter()

// 1.   Write a function to filter an array for all the numbers greater than 5

const myNums = [1,2,3,4,5,6,7,8,9,99]
const overFive = myNums.filter(myNums => myNums > 5);
console.log(overFive)

// 2.   Write a function to filter an array for all the even numbers

const numsAgain = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const evenNums = numsAgain.filter(numsAgain => numsAgain % 2 === 0);
console.log(evenNums)


// 3.   Write a function to filter an array for all the non number items

const items = ['string' , 1 , 5, 9, 'anotherString' , 99 , 14 ]
const notNums = items.filter(items => typeof(items) !== 'number');
console.log(notNums)


// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)

const ageNumbers = [15, 19, 21, 24, 92, 14, 11, 72, 45, 29, 27]
const canDrink = ageNumbers.filter(ageNumbers => ageNumbers >= 21)
console.log(canDrink)



// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings.. need to SPLIT first to make an

const theString = 'this string contains a lot of letters and numbers 1 2 3 4 5 6'  
const lettersAre = theString.split('').filter(char => char === a-zA-Z)
console.log(lettersAre)

// not sure how to completly solve the last one 