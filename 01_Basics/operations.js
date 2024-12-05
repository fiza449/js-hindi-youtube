 "use strict";
 //console.table([2+2,2*2,2-3,2**3,2/3,2%3]); //Arithmetic Operations
 //String Operations
 let str1 = "Hello";
 let str2 = " World";
 let str3 = str1 + str2;
 console.log(str3);

 console.log(1 + 2 + "2"); //Don't write code like this
 console.log("1" + 2); //This too
 console.log(+true); //Give o/p: 1

//Increment and Dec 
let num = 100;
let num2 = 102;
num++;
num2--;
//console.log(num);//
//console.log(num2);//

let x = 3;
let y = ++x;
console.log(`x:${x}, y:${y}`);
// Expected output: "y:4, x:4"

let a = 3;
let b = a++;
console.log(`a:${a},b:${b}`);
//Expected Output: "a:4 b:3"