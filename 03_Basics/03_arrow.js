// this keyword --> The this keyword in JavaScript is like a pointer that refers to an object
// console.log(this) // returns the empty object {}

// const user = {
//     username: "Fiza",
//     price: 999,
//     welcomeMessage: function()
//     {
//         console.log(`${this.username}, Welcome to Website`);
//         console.log(this) //agr username change hua to context batata h
//     }
// }

// user.welcomeMessage();
// user.username = "Shifa";
// user.welcomeMessage()
//node environmant mai console.log(this) prints {}
// IMP FOR INTERVIEW: 
//  Browser ka jo JS engine h(jiske wajh se JS browser mai JS work krta h) usmai jo 
// GLOBAL OBJECT H WO H: WINDOW 
// NODE MAI : EMPTY OBJECT
// BROWSER MAI: WINDOW OBJECT

// function chai()
// {
//     let username = "fiza"
//     console.log(this.username) //undefined
// }
// chai()

// function show() {
//     console.log(this);
//   }
//   show(); // In browser: `window`, in strict mode: `undefined`
  

// // this keyword does not work in FUNCTION just in OBJECT
// // ARROW FUNCTION
// const one = () => //(arrow function)
// {
   
//     console.log(this) //{}
// }
// one()
// IMP: ARROW function gives {} (empty object) as a output when console.log(this) is execute SAME AS OBJECT

// SYNTAX OF ARROW FUNC: () => {}
    const addtwo  = (num1,num2) => {
        return num1 + num2 //curly brace mai return likhna hi hoga
    }
console.log(addtwo(3,4)) //7
// OR
const subTwo = (num1,num2) => (num1 - num2)//can also write like this(no need to write return)
console.log(subTwo(4,3)) //1

const obj = () => ({username: "Fiza"});
console.log(obj()) //{ username: 'Fiza' }