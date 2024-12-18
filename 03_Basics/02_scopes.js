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

//Nested function scopes execution
function one(){
  const username = "Fiza"
  function two(){
    const website  = "youtube"
    console.log(username)
  }
  // console.log(website);
  //two() //--> O/P: Fiza
}
one() // --> It won't give any o/p

// In nested function: Child function(two()) can access the variable of Parent function(one())but not vice versa
/*
In JS, a variable can hold any type of data. JavaScript is a dynamically 
typed language, meaning variables are not bound to a specific 
type and can hold any type of value at any point in time
*/
console.log(addone(5)); //6 (When we declare function wihtout using variable we can call t before function declaration)
function addone(num){
  return num + 1;
}

console.log(addtwo(4)) //Cannot access 'addtwo' before initialization(as we declare function in variable we cannot call it before declaration)
const addtwo = function(num){
  return num + 2;
}

//HOISTING: It is JavaScript's default behavior of moving declarations 
// to the top of their scope (script or function) during the compilation phase. 