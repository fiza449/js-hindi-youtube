// for of loop: for MAP, array
// ["","",""]: strings in array
//[{},{},{}]: objects in array
//Syntax of for of:
const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}
// for strings
const greetings = "Hello Fiza";
for (const greet of greetings) {
    //console.log(`Each character is: ${greet}`);
}
/*
Each character is: H
Each character is: e
Each character is: l
Each character is: l
Each character is: o
Each character is:  
Each character is: F
Each character is: i
Each character is: z
Each character is: a
*/

//Map in JS: Unique values rehti or repeated ko fir se print nhi krti h. Order wise print krti h
/*
In JavaScript, a Map is a built-in object that allows you to store key-value pairs
where both keys and values can be of any data type. It is similar to an object,
but it provides more flexibility and methods for handling key-value pairs.
*/

const map = new Map()
map.set('IN','India'); //('key','value')
map.set('US','United States');
map.set('Fr','France');
map.set('IN','India');
//console.log(map)
//Map(3) { 'IN' => 'India', 'US' => 'United States', 'Fr' => 'France' }

//Applying loop on map
for (const key of map) {
   // console.log(key)
}
/*
Output:
[ 'IN', 'India' ]
[ 'US', 'United States' ]
[ 'Fr', 'France' ]
*/
//If we want key and values in different fllow this syntax

for (const [key,value] of map) {
    //console.log(key,": ", value);
}
/*
Now output: 
IN :  India
US :  United States
Fr :  France
*/

//for of loop is not iterable for OBJECTS!!!! ONLY FOR MAP

//Loops for Object: for in

const myObj  = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObj) {
 //console.log(`Key: ${key}, Value: ${myObj[key]}`);  
}
//Ouput:
/*
Key: js, Value: JavaScript
Key: cpp, Value: C++
Key: rb, Value: ruby
Key: swift, Value: swift by apple
*/

//Now for in for array
const programming = ["js","ruby","cpp","swift"];
for (const key in programming) {
    //console.log(`Index: ${key}, Value: ${programming[key]}`)
}

//Ouput:
/*
Index: 0, Value: js
Index: 1, Value: ruby
Index: 2, Value: cpp
Index: 3, Value: swift
*/

//Difference in Object and Map

/*
Map                                        Object
1. Can use any value as a key,       1. Keys must be strings or symbols; 
   including objects and functions.  other types (like numbers) are
                                     converted to strings.

2. Loops used to iterate             2. Loops used to iterate
   for...of, forEach                    for...in

3. Map isn't enumerable like         3. In a regular object, properties (keys)
objects: Means it doesn't               are enumerable.This means you can use
The key-value pairs in a Map            for...in  to loop through them:
are stored in a special way 
that doesn't make them directly
accessible through loops like 
for...in
*/


//for each loop: for array
// syntax:                 nameofarray.forEach( CallbackFunction (parameter) {} );  -> CallBakcFunction: is a function with no name

const coding = ["js","ruby","cpp"]
//Using normal function
coding.forEach( function (item) {
  //console.log(item)
} )
//js, ruby,cpp

//using arrow function
const fruits = ["apple","mango","banana"];
fruits.forEach( (item) => {
   //console.log(item)
})

//By giving reference of function in Call Back function

function printMe(item){
   // console.log(item)
}

fruits.forEach(printMe)

coding.forEach( (item,index,arr) => {
   // console.log(item,index,arr)
})

//How to access object in array values using for each loop

const myCoding = [
    { //Object1
        languageNamee : "JavScript", 
        languageFileName: "js"
    },
    { //Object2
        languageNamee : "Java",
        languageFileName: "java"
    },
    { //Object3
        languageNamee : "PyThon",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
   console.log(item.languageFileName) 
})