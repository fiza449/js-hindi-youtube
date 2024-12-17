//Function definition ke time: Parameters 
//Function calling ke time: Argument
function sayMyName(){
    console.log("Fiza")
}
sayMyName //--> Bs reference de raha h(bata raha h ke bs function waha rehta h)
sayMyName(); //--> Calling function: Fiza

//Function with numbers as a parameters
function addNum(num1,num2){
    let result = num1+ num2;
    return result;
    return num1+num2 //We can just write this
    console.log("Hi")// after return will not run anything
}
console.log(addNum(2,3)) //5
console.log(addNum()) //NaN (because i didn't passed any arguments)
console.log(addNum(3,"4")) //34
console.log(addNum(3,null))// null: 0 (3+0)= 3


// function addNumb(num1,num2){
//  console.log(num1+ num2) //undefined because: we didn't return anything 
// }
//  const result = addNumb(2,3)
//  console.log(result) //undefined

//Function with string parameters and string interpolation

function usermess(username = "sam"){
    if(username===undefined){ //if will work if this situation is true we can also write (!username)
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in!`;
}
console.log(usermess("Fiza")); //Fiza just logged in

//  IMP: When we don't pass any arguments in string
console.log(usermess()) //O/p: undefined just logged in!
//IMP: When we don't pass any arguments in numbers
console.log(addNum())// O/p: NaN

//" " --> False value
// undefined --> False

//function usermess(username = "sam") --> Jab koi arguments paas
// nhi honge to sam just logged in will execute or agr argument 
// paas ho raha h to it will overwrite sam

// Rest operator(...): USED When we paas more arguments than the written parameter

function CalculatePrice(num1){ //only one parameter
    return num1;
}

console.log(CalculatePrice(200,400,500)); //Passed 3 arguments
// O/P: will be only the first one: 200 that's when we use spread operator

function AddNum(...num1){
    return num1;
}
console.log(AddNum(200,300,400)) // O/P: [200,300,400]

//Imp question: Whats the o/p of:
function CalculateCart(val1,val2,...num3){
    return num3;
}
console.log(CalculateCart(200,300,400,500)); //O/P: [400,500]
//val1: 200, val2: 300, ...num3: 400,500

//How to handle object using function:

const user = {
     username: 'Fiza',
     age: 19
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

console.log(handleObject(user)) //Username is Fiza and age is 19
// How to handle array with function
const arrayName = ['a','b',2,3,'hitexh']
function handleArray(anyArray){
    return anyArray[4];
}
console.log(handleArray(arrayName)); //hitexh