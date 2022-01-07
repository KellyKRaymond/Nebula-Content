// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
// This would be O(n) because it is one single for loop meaning it is only going to itterate over each variable one time.



// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;

    // This would be O(of N) even though it is still only one for loop - 
}

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
// function printLast(arr){
//     console.log(arr[arr.length-1]); 
//}
    // o(1) because it is only going to itterate over your last index, no matter how many variables are in your array. 

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
// function everyOther(str){
//     let newStr = '';

//     for(let i = 0; i < str.length; i+=2){
//         newStr += str[i]
//     }

//     return newStr;

    // this would also be o(n) because it is a for loop running once, even though it is apply a 
    // math function to every other variable
//}

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

    // this would be o(1) because it is taking every variable and applying the equation to it without loop over and 
    // then applying the math to it. Similar to how I mentioned above.

// function doubled(num) {
//     return 2 * num
// }

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

    // o(1) because you are doing the math in two seperate steps but still simplified

// function multipleSteps(num) {
//     let final = 4 * num
//     return final * 3
// }

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

    // I think this would be o(n) as well because you are looping through every item, applying something to it 
    // and then returning another array with the updated information 

// function backwardsArr(arr) {
//     let arrReversed = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//       arrReversed.push(arr[i])
//     }
//     return arrReversed
// }
// // 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

    // I think this one would be O(n^2) 
// function multiplyAll(arr1, arr2) {
//     if (arr1.length !== arr2.length) return undefined
//     let total = 0
//     for (let i of arr1) {
//       for (let j of arr2) {
//         total += i * j
//       }
//     }
//     return total
//}
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.


    // this would be o(1)  I think because it isn't doing anything more than adding one number to the back of 
    // an exsisting array 

// let nums = [10,20,30,40];
// nums.push(50);

// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

    // this would be o(N)  needs to move all the indexes over - everything else moves over

// let nums2 = [10,20,30,40];
// nums.unshift(0);


// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

 //o(log of n) 


// function logTime(arr) {
//     let numberOfLoops = 0
//     for (let i = 1; i < arr.length; i *= 2) {
//       numberOfLoops++
//     }
//     return numberOfLoops
// }




// CHECK POINT NUMBER 8 

// class Elevator {
//     constructor (floor, transit, occupied){
//     this.floor = floor
//     this.transit = transit
//     this.occupied = occupied
//     }
// }

// const floors = [1,2, 3, 4, 5, 6, 7,];{
// const whatFloor = current.floor
// }
// console.log(whatFloor)




// const people = [{name: 'Alex', age: 74}, {name: 'Blippi', age: 22}, {name: 'Fiona', age: 50}, {name: 'Elsa', age: 12}]
// const youngest = people.sort((a,b) => a.age > b.age ? 1: -1)
// console.log(youngest)


// function subtractThese(num1, num2){
//     return num1 - num2
//}

// const numbers = [2, 9, 11, 12, 3, 6]
// const multiplied = numbers.reduce((total, current) => total *current)
// console.log(multiplied)

// const floors = [1,2, 3, 4, 5, 6, 7,];{
// const whatFloor = floors.forEach(floor =>{
//     console.log(floor + 1)
//     })
// }


function findSenior(list) {
    const sortByOldest = findSenior.sort((a,b)=> {
      return a.age - b.age
    })
  }