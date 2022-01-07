// .reduce()

// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let sum = (array.reduce((accumulator, current) => accumulator + current));
// console.log(sum)
// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
// const array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let multiplied = (array1.reduce((accumulator, current)=> accumulator * current));
// console.log(multiplied)

// 3.   Write a HOF to reduce all numbers in an array to the largest number 
// const array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let largestNum = (array2.reduce((largestNum, current) => largestNum)); 
// console.log(largestNum)

// 4.   Write a HOF to find the oldest person in a group

//.find()

// 1.   Write a HOF to find the first number greater than 10 in an array
// const thisArray = [1,2,55, 11, 12,14,72, 2, 4]
// const doubleDigits = thisArray.find(element => element > 10)
// console.log(doubleDigits)


// 2.   Write a HOF to find the first string in an array
// const anotherArray = [ 33, 'string' , 1 , 4, 9 ,'anotherstring']
// const theStringIs = anotherArray.find(element => ' ')
// console.log(theStringIs)

// 3.   Write a HOF to find the first instance of null in an array 
// const lastArray = [null, 'string' , 42]
// const nullIs = lastArray.find(element => null === null) // use triple equals 
// console.log(nullIs)

// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
// const arrayOfNumbers = [22, 21, 34, 1, 19, 76, 444, 1075];
// arrayOfNumbers.sort((a, b) => a > b ? 1 : -1);
// console.log(arrayOfNumbers)

// 2.   Write a HOF to sort an array of numbers from smallest to largest
// const arrayOfNumbers2 = [22, 21, 34, 1, 19, 76, 444, 1075];
// arrayOfNumbers2.sort((b, a) => b > a ? -1 : 1);
// console.log(arrayOfNumbers2)

// 3.   Write a HOF to sort peoples names by their length
// const peoplesNames = ['Jamie,' , 'Kim', 'Dudehead' , 'Mike' , 'Oprah']
// nameLength.sort(peoplesNames => peoplesNames.length < peoplesNames.length === nameLength)
// console.log(nameLength)

// 4.   Write an HOF to sort an array of objects of people by their age youngest to largest

// const weThePeople =[{Name: Jamie, age 32} ,{Name: Dudehead, age 21} ,{Name: Chase, Age 2}]
// youngestPerson.sort(weThePeople => weThePeople.age < weThepeople.age)
// console.log(youngestPerson)

// 5.   Write an HOF to sort an array of strings by the last letter of the string
// create array with random names
// const moreNames = ['Anna' , 'Kelly' , 'Roberto' , 'Taylor'

// reverse to reverse order of letters 


// then grab the first letter and put it into the corrent order by using sort 


// return the sorted a - b array list
