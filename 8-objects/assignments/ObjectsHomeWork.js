// // 1.   Create an object for your dream vehicle
const dreamVehicle = {}

// //      Give it a minimum of 6 key-value pairs
const dreamJeep = {
make: 'Jeep Wrangler',
color: 'White',
engine: 'V8',
transmission: 'Automatic',
doors: 'four',
entry: 'keyless'
}
console.log(dreamJeep)

// //      This object should contain many datatypes (string, number, boolean, null, array)

let newString = "Cool Jeep!"

topspeed = 100

let x = "free"
let y = "100,000"
let statement = y < x ? "No, I don't want it"

//if(null){
 //   console.log("no i hate jeeps")
//}

//Object.keys(dreamVehicle).forEach((key)) => {
 //  dreamVehicle[key] = "Wrangler"
//}
//console.log(dreamVehicle)
// // 2.   Using dot-notation Log to the console 3 properties from the previous object

dreamJeep.tint = 'Tinted'
dreamJeep.seats = 'Leather'
dreamJeep.entertainment = 'Carplay'

console.log(dreamJeep)

// 3.   Using bracket-notation Log to the console 3 properties from the previous object

dreamJeep['accessories'] = 'Hula Girl'
dreamJeep['steeringWheel'] = 'Fuzzy'
dreamJeep['price'] = 'Free'

console.log(dreamJeep)
// 4.   Try and log a property that doesn't already exist - what output do we get?

//I'm not exactly sure what this question is trying to get us to do - an error code?
// console.log(RemovableDoors)

// 5.   Add a new key-value pair to the vehicle. 

const newKeyValue = function(obj,key,value){
    obj[value] = "Gold"
    console.log(dreamJeep)
}

// 6.   Using bracket-notation update a property on the vehicle. 

const updateObject = function(obj, key, value){
    obj[key] = value
}
updateObject(dreamJeep, "amount of doors", "2")
console.log(dreamJeep)


// 7.   Using dot-notation update a property on the vehicle. 

const updateObject = function(obj, key, value){
    obj.key = value

    updateObject(dreamJeep, "amount of doors", "2")
console.log(dreamJeep)
}
// 8.   Create a method for turning your vehicle on

start: function(){
    console.log('Vroom Vroom');
}
// 9.   Create a method for turning your vehicle off

stop: function(){
    console.log('powering down');
}
//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)

// wouldn't you just be running a console.log 