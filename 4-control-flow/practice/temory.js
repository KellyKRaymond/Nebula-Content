// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called CreditCardNum, set it equal to a fake credit card string-number
// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
// Initialize a variable called userId, set it equal to a fake user ID
// Initialize a variable called password, set it equal to a fake password

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'


const creditCardNum = 789456
const last4ss = 4567
const userId = "KellyK"
const password = "ilovechase"

let inputId = "KellyK"
let inputPass = "ilovechase"

let loginAttempt = ((userId === inputId) && (password === inputPass)) ? `Cc num: ${creditCardNum} social: ${last4ss}`:`incorrect username or id`
// created variable loginAttempt to see if info was entered correctly.  set it equal to userID being the same as the entered username and the password had to match. 
// If both statement were true (after the '?') it returned my info. if they didn't BOTH match (after the : ), then the error 'incorrect ussername or id was returned

console.log(loginAttempt)
//retured my info because the username entered matched the userID AND the password entered matches the required password