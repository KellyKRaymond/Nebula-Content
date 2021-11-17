// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement

let horseName = "Chief" 
let position = Math.ceil(Math.random()*4)

switch(position) {
    case 1:
    console.log(`${horseName}, finihsed in first place!`);
    break;
    case 2:
    console.log(`${horseName}, finihsed in second place!`);
    break;
    case 3:
    console.log(`${horseName}, finihsed in third place!`);
    break;
    case 4:
    console.log(`${horseName}, finihsed in fourth place!`);

}

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."
