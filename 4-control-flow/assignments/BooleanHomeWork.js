//1. Write a statement that checks if 2 and 'two' are equal
console.log(2 === "two")
//2. Write a statement that checks if '2' and 2 are loosely equal
console.log("2" == 2)
//3. Write a statement that checks if 14 and '14' are strictly equal
console.log(14 === '14')
//4. Write a statement that checks if 10 is greater than -100
console.log(10 > -100)
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
console.log(4 === Math.round(4.4))
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
console.log(10 >= Math.ceill(9.1))
//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
  // 7.a Without changing any of the numbers, or their order. How do we make this print true?
console.log( 10 > 2 && 3 > 4) 
console.log( 10 > 2 || 3 > 4)
console.log( !(10 > 2 && 3 > 4))
console.log( 10 > 2 && 3 < 4)
//8. Pick a number between 1-20 and assign it to a variable
const numOfWM = 8
  // This is the number of watermelons you purchased.
  //
  // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
  // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
  // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
  // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
  // If your number of watermelons is more than 15, print, 'Did you have a coupon?'

  if(numOfWM === 1 || numOfWM === 2) {
      console.log('Looks like you like watermelon')
  } else if (numOfWM > 2 && numOfWM < 5) {
      console.log('Thats a lot of watermelon')
  } else if (numOfWM > 5 &&  numOfWM <+ 10){
 console.log('thats too many!')
      }else if (numOfWM > 10 && numOfWM <= 15)
      console.log('did you use a couple')

//9. Create a variable that represents your current hunger on a level of 1-10
  // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
  // Otherwise print. "I'm not hungry"

  const hungerLevel = 4
  const answer = hungerLevel < 6 ?'Time to eat' : 'Im not hungry'
  console.log(answer)

// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement?
  // Ex: 
    // I update a question variable to say "Will I win the lottery?"
    // I run node <FILENAME> 
    // The console prints out:
      // Will I win the lottery? Not Likely. 

  // Pseudocode:
    // variable that holds a randomly generated number
    // variable for holding the question
    // switch statement that picks responses based on the random number variable 

    const randomNum = Math.ceil(Math.random() * 9)
    const question = "Will I win the lottery??"

    switch(randomNum){
        case 1:
            console.log(`${question}: Not likely`)
            break;
            case 2:
                console.log(`${question}: IDK Maybe`)
                break;
                case 3:
                    console.log(`${question}: For Sure!`)

    }

// BONUS:
  // On the prior example, try and have the answer print like someone is speaking to you.
  
  // Ex:
    //Input:  Will I win the lottery?
    //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

  // Ex2:
    // Input: Will I get a new pet this year?
    // Output: Will you get a pet this year? It is certain. 

  // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?


