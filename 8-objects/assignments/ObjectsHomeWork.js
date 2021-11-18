// 1.   Create an object for your dream vehicle
// Give it a minimum of 6 key-value pairs 
// this object should contain many datatypes (string, number, boolean, null, array)
const dreamJeep = {
    make: 'Jeep Wrangler',
    color: 'White',
    engine: 'V8',
    transmission: 'Automatic',
    doors: 4 ,
    gift: true
}
console.log(dreamJeep)

// 2.   Using dot-notation Log to the console 3 properties from the previous object

console.log(dreamJeep.make)
console.log(dreamJeep.color)
console.log(dreamJeep.doors)

// // 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamJeep['doors'])
console.log(dreamJeep['transmission'])
console.log(dreamJeep['gift'])

// // 4.   Try and log a property that doesn't already exist - what output do we get?

console.log(dreamJeep.removableDoors) 
//undefined

// // 5.   Add a new key-value pair to the vehicle. 

dreamJeep['accessories'] = 'Hula Girl'
dreamJeep['steeringWheel'] = 'Fuzzy'
dreamJeep['price'] = 'Free'

console.log(dreamJeep)

// // 6.   Using bracket-notation update a property on the vehicle. 

dreamJeep['color'] = 'Black'
console.log(dreamJeep)

// // 7.   Using dot-notation update a property on the vehicle. 

dreamJeep.color = 'White'
console.log(dreamJeep)

// // 8.   Create a method for turning your vehicle on
function startJeep(){
    console.log('Vroom Vroom');
}
    dreamJeep.start = startJeep
    console.log(dreamJeep)

// // 9.   Create a method for turning your vehicle off
function stopJeep(){
    console.log('Turning Off');
}
    dreamJeep.stop = stopJeep
    console.log(dreamJeep)

// //10.   
// //      a. Check if your vehicle is on (it should be off)
console.log(dreamJeep.start)
// //      b. Start your vehicle
console.log(dreamJeep.start)
// //      c. Check if your vehicle is on (it should be on)
console.log(dreamJeep.start)
// //      d. Stop your vehicle
console.llg(dreamJeep.stop)
// //      e. Check if your vehicle is on (it should be on)
console.log(dreamJeep.start)