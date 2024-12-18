// { } --> scope
var a =6
console.log("Outer a: ",a) //Outer a:  6
let b = 7
const c = 8
if(true){
   var a = 3 // can be work outside the scope
   let b = 4 //cannot be printed or used outside the scope
   const c = 5 //cannot be printed or used outside the scope
   console.log("Inner b: ",b) //Inner b:  4
   console.log("Inner c: ", c) //Inner c:  5
}

console.log(a) //3 (which is inside the if-scope).. 6(which is outside the if-scope) is not printed so that create confusion that's why using var is ignored
console.log(b) //7 (which is outside the if-scope) is printed NOT 4 (which is inside the if scope)
console.log(c) //8 (which is outside the if-scope) is printed NOT 5 (which is inside the if scope)

// There is a big difference in CORE SCOPE(the one that is run in console browser) and NODE SCOPE (the one run in terminal in VS/ github)
/*
1. Block scope: Variables declared inside a block (enclosed by {}) are only accessible within that block.
  eg:  let and const have block scope
2. Global scope: Variables defined outside any function or block are in the global scope and can be accessed from anywhere in the code.
*/