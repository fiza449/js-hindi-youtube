// IIFE: Immediately Involed Function Expression
/*
IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined.
 It is a commonly used design pattern that helps to create a private scope and avoid polluting the global namespace.
*/
// Variables inside an IIFE are not accessible from the outside, ensuring encapsulation. 

//Basic Syntax:
(function chai(){
    console.log("DB CONNECTED");
})();
// chai(); //ERROR AAYEGA AS IIFE DOES NOT REQUIRE CALLING AS IT IMMEDIATELY INVOKED/CALLED WHEN UIT IS DEFINED
//IIFE IN ARROW FUNCTION
(()=>{
   console.log("DB CONNECTED TWO");
})();
// Immediately Invoked Function Expression (IIFE) does not require calling explicitly because it is executed as soon as it is defined.
// Output: DB CONNECTED
//         DB CONNECTED TWO

//We can also pass argument in IIFE

//()(): IIFE FUNCTION
// (parameters)=>(argyment): Arrwo function

((name) => { //Parameter
    console.log(`Hi ${name}`);
})("Fiza"); // --> Argument O/P: Hi, Fiza

// Two types of IIFE 
// Named IIFE:

(function one(){
    console.log("This is named IIFE");
})();

// Simple IIFE
(()=>{
    console.log("This is simple IIFE");
})();

// IIFE WITH OBJECT

const userOne = (function(){
    const name = "Fiza";
    return {getName: () => name}
})();
console.log(userOne.getName());
// uses Immediately Invoked Function Expression (IIFE) and closures to create a private variable.
