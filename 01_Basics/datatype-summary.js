/*
On the basis of how the data is stored and accessed the data is divided into 2 parts
1. Primitive: Simples IMMUTABLE type of data. Means cannot be changed once assigned.
  Strings,Number,Boolean,undefined(Declared but not initialized),null(Empty),
  symbol(to make value unique), BigInt(for big values).

2. Non-Primitve:MUTABLE-means once assigned can be changed.
   Array,Objects,Functions 
*/

//Imp: Primitive(Compared by value), Non-Primitve(Compared by reference)

const Id = Symbol('123');
const AnotherId = Symbol('123');
console.log(Id==AnotherId); //False

const BigInt = 2889280203003n;

//Array
const heros = ["Shaktiman","Naagraj","Doga"];
//Object
let myObj = {
    name: "Fiza",
    age:22,
}

//Function
const myFunction = function(){
    console.log("Hello world");
}
//All NON-PRIMITVE ka typeof object hota h
console.log(typeof heros); //Array ka type of bhi OBJECT h
console.log(typeof myObj);//Object h type of
console.log(typeof myFunction)//typeof h Object Function