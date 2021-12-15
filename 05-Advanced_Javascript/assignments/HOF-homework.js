// cumilitive - this is the difficult part. Figuring out which HOF to use. 
// 1.   Write a hof function which returns the first number larger than 100

const theseNums = [22, 107, 11, 76, 29, 124]
const filteredNums = theseNums.filter(num => num > 100)
tripleDigits = filteredNums.sort((a,b) => a < b ? -1 : 1)
console.log(tripleDigits[0])

// 2.   Write a hof which lists a set of people based on their birth year
const people = [{name: 'Kelly' , birthyear: 1994},{name: 'George', birthyear: 1907}, {name: 'Lucas', birthyear: 1942},{name:'Jennifer', birthyear: 2002}]
const oldest = people.sort((function (a, b) {
    return a.birthyear - b.birthyear
}))
console.log(oldest)

// 3.   Given an array of cars only list cars that are build pre-2000
carArray = [{type: 'Ford' , year: 1997} , {type: 'Tesla' , year: 2020} ,{type: 'Chevy' , year: 1986} , {type: 'Jeep' , year: 2013}]
const olderCars = carArray.filter(car =>car.year < 2000)
console.log(olderCars)

// filter

// 4.   Given an array of phone numbers return an array of protected phone numbers so that it has this structure:
//      input: 555-555-5555, output: 5##-###-#555
const phoneNumbers =['542-911-7124' , '911-867-5309', '863-445-0739', '157-741-1592']
const protectedNumbers = phoneNumbers.map(phoneNum => phoneNum(
    // map over // split // replace each index // join back together ?
    // please go over this in class !! 
))  
// keep dashes and the last three indexs and the first index 
// replace indexs where numbers are not dashes 
// map


// 5.   Given an array of numbers write a HOF that logs to the console:
//      `Thats a big number!` if it's larger than 1000 or
//      `This number isnt so big...` if its smaller than or equal to 1000
const numbers = [1, 2, 55, 1021, 5432, 1194, 2010, 25, 18, 9282, 4]
const isNumberBig = numbers.map(number =>
    { if (number >= 1000){
    return 'Thats a big number!'
    } else {
        return "This number isn't so big..."
    }
    })
console.log(isNumberBig)

// 6.   Given an array of people's name write a hof that returns only people with names longer than 5 characters
const names = ['Tiffany' , 'Jared' , 'Drew' , 'Vera' , 'Chelsea' , 'Eric' , 'ted' , 'Cameron'] 
const longNames = names.filter(name => name.length > 5)
console.log(longNames)

// 7.   Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest
const invitedGuest = [{name: 'Sarah', age: 31}, {name: 'Craig', age: 26}, {name: 'Donna', age: 55}, {name: 'Nicholas', age: 19}]
const inviteOnly = invitedGuest.filter(name => name.age > 20 && name.age < 35) 
const sortedInvites = inviteOnly.sort((a,b) => a.age - b.age)
console.log(sortedInvites)

// 8.   Given an array of objects, each object is a food, including an expiration date
//      return the food that will expire soonest
//      ex food: {name: 'banana', expiration: "Dec 21, 2022"}
//      hint: JavaScript Date object may be helpful
//      // new Date(year, monthIndex, day)
        // const d1 = new Date(2010, 3, 28) => April, 28, 2010

const groceryList = [{food: 'Apple' , date: 'Dec 21, 2022'}, {food: 'Chicken Nuggets' , date: 'Oct 4, 2029'}, {food: 'Bologna' , date: 'Sep 14, 2003'}]
const goodByDate = groceryList.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date)
})
console.log(goodByDate)
       