 const userEmail = [];
 if(userEmail) //As there is email present if there is " " empty string it will print else code
 {
    console.log("Got user email");
 }
 else{
    console.log("Don't have user email");
 }

 /*
 false values in JS: false,0, -0, "",'', null, undefined, NaN, BigInt(0n)
 true values in JS: true,"0",any non zero number(43,-1), Non empty strings("false"), " "
                    Arrays([]), Objects({}), functions(){}
 */

if(userEmail.length === 0){
   console.log("Array is empty")
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
   console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined
// Syntax: let result = expression1 ?? expression2;
/*
If expression1 is not null or undefined, the result is expression1.
If expression1 is null or undefined, the result is expression2.
*/
//eg:
let val1;
val1 = null ?? 10;
console.log(val1); //10

let val2;
val2 = undefined ?? 5
console.log(val2) //5

// Ternary Operator
//Syntax:
// condition ? expressionIfTrue : expressionIfFalse;
/*
If the condition is true, the expressionIfTrue is executed.
If the condition is false, the expressionIfFalse is executed.
*/
const price = 29;
price > 30 ? console.log("more than 30"): console.log("less than 30")