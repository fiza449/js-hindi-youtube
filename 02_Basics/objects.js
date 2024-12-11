// Singleton: This is only created when we declare object as 
// constructor not as Object Literal

// Symbol: Is a unique properly which can acceessed as a key in
// object.
// const mySym = Symbol("myKey1"); //Symbol declaration
// console.log(typeof mySym) //symbol
//Object Literal
const mySym = Symbol("myUniqueKey"); // Declare mySym as a Symbol

const JsUser = {
    name: "Fiza",
    age: 18,
    "Full_name": "Ansari Fiza", // This can be accessed through a string key only
    location: "Mumbai",
    email: "fizaansari@google.com",
    [mySym]: "myKey1", // Use the symbol as a key
    isLoggedIn: false,
    LastLoggedIn: ["Monday", "Thursday"],
};

console.log(JsUser[mySym]); // Output: "myKey1"
console.log(typeof JsUser[mySym]); // Output: "string" (the value is "myKey1")
console.log(typeof mySym); // Output: "symbol"


// //Accessing Objects in 2 ways
// console.log(JsUser.email); //fizaansari@google.com
// console.log(JsUser["email"]) //fizaansari@google.com
// //2nd way is more preferred and useful
// console.log(JsUser["Full_name"]); //Ansari Fiza

JsUser.email = "shifaansari@google.com"; //Changes the value of email
// Object.freeze(JsUser); //No changes will be done after this
JsUser.location = "Thane";
console.log(JsUser); //location will not be changed
/*
{
  name: 'Fiza',
  age: 18,
  Full_name: 'Ansari Fiza',
  location: 'Mumbai',
  email: 'shifaansari@google.com',
  isLoggedIn: false,
  LastLoggedIn: [ 'Monday', 'Thursday' ],
  [Symbol(myUniqueKey)]: 'myKey1' --> We used [mySym] so it shows this
}
*/
/*
{
  name: 'Fiza',
  age: 18,
  Full_name: 'Ansari Fiza',
  location: 'Mumbai',
  email: 'shifaansari@google.com',
  mySym: 'myKey1', -> When we don't use [mySym] it  shows this
  isLoggedIn: false,
  LastLoggedIn: [ 'Monday', 'Thursday' ]
}
*/

JsUser.greeting = function()
{
    console.log("Hello Js user");
}
console.log(JsUser.greeting) //Function (anonymous)]
console.log(JsUser.greeting()) //Hello Js user

JsUser.greetingTwo = function()
{
    console.log(`Hello Js user, ${this.name}`); //-> String interpolation
}
console.log(JsUser.greetingTwo()) //Hello Js user, Fiza