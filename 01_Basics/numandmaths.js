const score = 400 //JS auto detects it as a number
//Declaring number using Number Function explicitly
const balance = new Number(100);
console.log(score); //O/P: 100
console.log(balance); //O/P: [Number: 100] <--Tells that its number

//Note: Number has comparatively less prototype (methods) than String

//Methods with Example
// 1. .toString() --> Converts number into String
console.log(balance.toString())
// 2. .toString.length --> Gives the length of Converted String
 console.log(balance.toString().length);
// 3. .toFixed() --> Used to reduce or round off to specific Decimal Values
// Use Cases: After Calculation of GST , In Economic websites
console.log(balance.toFixed(2));
// 4. .toPrecision(Number to focus on) --> Round off the decimal number
// For eg if 5 number are precised then after that number if number is more than 4 than point
//ke baad waale number will be +1
function precise(x) {
    return x.toPrecision(4);
}
console.log(precise(231.456)) //231.5
console.log(precise(0.000451353)); //0.0004514 (Point ke baad waale 0 will not count as a number)
console.log(precise(11233.8966)) //1.123e+4 (exponential Value 1 ke point se pehle se 4 number h to it gives like garbage value)

// +++++++++++++++++++ MATHS IN JS ++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4)); //Converts + -> -, + -> + (absolute value)
console.log(Math.ceil(4.9)) //Upar jaayega wo value dega (4)
console.log(Math.floor(4.1)) //Neeche hi Jaayega (5)
console.log(Math.min(4,3,8,9)) //3
console.log(Math.max(4,3,8,9)) //9

// Math.random() --> 0 se 1 ke beech mai random hi decimal value aayegi
console.log(Math.random()) //O/P: 0.42944514423050095
console.log(Math.random()*10) //--> by *10 ek digit shift hojaayega
//O/P: 4.15776018873782 (4 shift ho gya)
console.log(Math.random()*100) //--> by *100 do digit shift hoga
//O/P: 14.533459383350312


console.log((Math.random()*10) + 1); //+1 is added to ensure that result will be in range [0,10]
console.log(Math.floor(Math.random()*10) + 1); //Math.floor is used to get a single digit (8)

//IMP: Trick to randomize value between range
const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1)) + min); //10 se neeche koi value nhi aayegi randomly

/*
A simple explanation that I always think about is "Math.random()
sirf 0 se 1 tk random number generate krta hai 0 is inclusive,
1 is exclusive....So in this statement Math.random() * 10,
the result can never be equal to 10 qki 10 lane k lie usko
1 se mulitply hona pdega jo ki possible nahi hai, to result
hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi 
hoga, or iske upr se agar aap Math.floor(Math.random() * 10) 
krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 
10 nahi, to 10 ko bhi range me include krne k lie hum usme 1
add kr dete hai.....that is if you do Math.floor(Math.random() * 11) 
to result [0,10] tk aaega both inclusive.....and at last 
isme bas aap 1 add kr doge to result [1,11] m convert ho jaega
*/