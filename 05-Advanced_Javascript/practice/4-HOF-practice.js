// .forEach

// 1.   Given an array of numbers, log them to the console for each number. 
const array = [1,2,3,4,5,6];
array.forEach(element => console.log(element));

// 2.   Given an array of people, log a greeting to the console for each person.
const people = [
    {fName: 'Josh'},
    {fName: 'Steve'},
    {fName: 'Joe'}
]
const greeting = people.forEach((person) => console.log(`hi, ${person.fName} have you seen my dog?`))
// 3.   Given an array of mixed values, log whether the value is undefined.
const thisArray = ['string' , 10, NaN,]

thisArray.forEach
// if undefined === true?
// then log if undefined

// 4.   Given an array of strings, log the vowel count for each string.

const strArray = ['this' ,'string' ,'dog' ,'cold' ,'nonsense']
const vowels = ['a', 'e', 'i,', 'o', 'u']

const findVowels = strArray.forEach(element => console.log(vowels))

// 5.   Given an array of numbers, duplicate them and log them to the console. 