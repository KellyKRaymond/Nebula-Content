
// 1.   Create an array that contains two of your favorite things to do

let FavToDo = ["Go To Marshall's" , "Travel"]

// 2.   Using an array method, add another thing you like to do to that list

FavToDo.push("Play with my son") 
console.log(FavToDo)

// ANSWER: [ "Go To Marshall's", 'Travel', 'Play with my son' ]
// 3.   Reverse the order of the array (remember, if needed use MDN)

FavToDo = FavToDo.reverse() 
 console.log(FavToDo)

 //ANSWER: [ 'Play with my son', 'Travel', "Go To Marshall's" ]

// 4.   Using this array: 
let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 5.   log the length of the array

 console.log(days.length)
 //ANSWER: 7


// 6.   log the 4th element in the array
console.log(days[3])
//ANSWER:Wednesday

// 7.   Remove the first element in the array. Log the new array and the element removed from the array

days.shift()
console.log(days)

// 8.   Put 'Sunday' back at the beginning of the array (.unshift) and log the new array

days.unshift("Sunday")
console.log(days)

// 9.   Remove the last element in the array. Log the new array and log the element removed

const elementRemoved = days.pop()

//10.   Add 'Saturday' back to the end of the array and log the new array

days.push(saturday)

//11.   Replace 'Thursday' with 'Friday Junior'

days[4]="friday jr"

//12.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

const favDay =days[4]
//console.log(`My favorite day of the week is ${FavDay}`)

//13.   Combine these two arrays together
//14.   let phone = ['iphone', 'android']
//15.   let laptop = ['MacBook', 'HP', 'Dell'

let tech = phone.concat(laptop)
console.log(tech)

Array.isArray(days)
