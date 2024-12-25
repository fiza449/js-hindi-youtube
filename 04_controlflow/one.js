// if in JS
// Syntax
// if(true){
//     console.log("Printed because the condition is true");
// }
// if(false){
//     console.log("Not Printed because the condition is False");
// }
const userloggedIn = true;
if(userloggedIn){
    console.log("User is logged in");
}
// <: less than h ki nhi, >: greater than h ki nhi, <=: less than or equal to, >=: greter than or equal to
// ==: check if right and left values are equal, !=: not equal, ===: compare without type coercion(strictly checking)

if(2=="2") //true
{
    console.log("== compared after type coercion(type same krne ke badd) that's why true");
}
if(2==="2"){ //false
    console.log("===compared without any type coercion so it is false and this console will not print")
}

console.log("3"!==3);//true: because "3" is a string and 3 is Number so ofcourse they are not equal
console.log("3"!=3); //false: because it does not see "3" as a string so it returns false for "3" not equal to 3


//difference in != and !== in JS
/*
1. != (Loose Inequality): Compares two values for inequality after performing type coercion if the types are different.
                          If the types are the same, it checks for inequality directly.
2. !== (Strict Inequality): Compares two values for inequality without performing type coercion.
                            Both the value and the type must differ for the comparison to return true
*/

// if-else in JS

const score = 200
// Syntax:
// if(false)
// {
//     console.log("This will run if the condition is true");
// }
// else{
//     console.log("else code run when the if conditiion is false if if condition is true. else will be skipped")
// }


// if-else if-else: else if can be multiple

//Syntax
const balance = 1000;
// if(balance < 700)
// {
//     console.log("less than 700");
// }
// else if(balance < 800){
//     console.log("less than 800");
// }
// else if(balance <900){
//     console.log("less than 900");
// }
// else{
//     console.log("equal to 1000");
// }

//If-else in real time app example

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User Logged In");
}