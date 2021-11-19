// 1.   Create an object for a celebrity and save it to a variable

const celeb = {}

// // 2.   Using dot-notation add 3 key-value pairs to the celebrity


    celeb.name = 'Adam Sandler'
    celeb.feeling = 'funny'
    celeb.hairColor ='Black'
    celeb.eyeColor = 'Brown'

console.log(celeb)

// // 3.   Using bracket-notation add 3 key-value pairs to the celebrity

celeb["moreProperties"] = 'nice'
celeb["morePros"] = 'smart'
celeb["evenMoreProbs"] ='idk' 

console.log(celeb)
// // 4.   Write a function that allows us to add or update 3 properties
const updateObject = function(obj, key, value){
    obj[key] = value
}
updateObject(celeb, "location", "California")
console.log(celeb)
// // 5.   Using a loop - log all the celebrities properties to the console

for(let key in celeb){

console.log(celeb[key])
}