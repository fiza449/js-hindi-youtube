//Stack: Stores Simple Data (All Primitive data types)
//Stack Gives copy and make changes in that ONLY not in original
//Heap: Stores Complex Data(All Non-Primitive Data Types)
//Heap does not gives copy and make changes in original

//Stack Example                
let myName = "Fiza";  //There are no changes in this but in the copied one          
let myOtherName = myName;           
myOtherName = "Simi";
console.log(myName); //Fiza
console.log(myOtherName); //Simi

//Heap Example
let userOne = {
    email: "user@google.com", //Changes is done in this Original
    upi : "user@ybl"
}
let userTwo = userOne;

userTwo.email = "fiza@google.com"; //Changes are done in original userOne email value
console.log(userOne.email); //fiza@google.com
console.log(userTwo.email); //fiza@google.com