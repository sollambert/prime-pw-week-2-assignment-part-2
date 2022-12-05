// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create variable 'name' and assign the value 'Dane'
// We perform strict equal operator on 'name' compared to the string 'Mary'
// 'Dane' has a matching data type with 'Mary' but is not the same value, so the strict equals operator returns false
// We log "How do you do?" to the console

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create empty variable 'secret' and variable 'code' with value 123
// We compare code to the integer 123 with strict equals, this returns true because of both matching type and value
// 'secret' is assigned value 'super' and 'code' is *= 2
// 'code' is < 250 so we do not perform next conditional and print secret to the console which has value 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create variables 'isStudent', 'age', and 'zip' with values true, 34, and 55407 respectively
// We check if isStudent strict equals true (which returns true) with AND operator on zip > 80000 (which returns false) so we do not perform this conditional
// After previous fails, we check if isStudent strict equals false (which returns false) with OR operator on age < 30 (which also returns false) so we do not perform this conditional
// After previous fails, we check if isStudent strict equals true (which returns true) so we console log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne should be set to 'blue' and colorTwo should be set to 'red'
//let colorOne = 'blue';
//let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - only the colorOne variable is set to 'purple' after conditional
//
//if (mix === true) {
//  colorOne = 'purple';
//  colorTwo = 'purple';
//}
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - we need to use the AND operator on the conditional instead of the OR
//if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - we need to check if age >= minage. If we wanted to use the conditional already written below we'd have to flip the results of the conditional
//use this to replace first line of conditional: if(age < minage) {
//or rewrite whole statement as:
//if(age >= minage) {
//  console.log('enter');
//} else {
//  console.log('no entry');
//}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

