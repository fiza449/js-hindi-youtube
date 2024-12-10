/*
1.Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,
boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change 
because it is non primitive (refrence) type.
*/
const myArr = [1,2,3,4,5];
console.log(myArr); //[ 1, 2, 3, 4, 5 ]
//Accessing individual element of array
console.log(myArr[3]); //4
console.log(typeof myArr);//object
const heroes = ["shaktiman",2,"Marvel",3,"Ironman"];
const myArr2 = new Array(1,2,3,4,5);// Different way to declare array
console.log(heroes.length) //5

//Methods Of Array
myArr.push(6); //push: To insert value at end
console.log(myArr) //[ 1, 2, 3, 4, 5, 6 ]
myArr.pop() //Automically removes the last element
console.log(myArr) //[ 1, 2, 3, 4, 5 ]

myArr.unshift(8) //Add the element at the start
console.log(myArr) //[ 8, 1, 2, 3, 4, 5 ]
myArr.shift() //Same as pop removes the first element
console.log(myArr) //[ 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9)) //false (checks if the element is present or not)
console.log(myArr.indexOf(9)) //-1 --> As 9 is not in array it gives -1
console.log(myArr.indexOf(3)) //2

//.join: Converts all the elements of an array in to string
const newArr = myArr.join()
console.log(myArr) //[ 1, 2, 3, 4, 5 ]
console.log(newArr) //1,2,3,4,5 --> Converted into string
console.log(typeof newArr) //string

//IMP: Difference in slice and splice
// SLICE
console.log("A", myArr) //A [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1) // After slicing: [ 2, 3 ]

console.log("B", myArr); // No changes in original array: B [ 1, 2, 3, 4, 5 ]

// SPLICE
const myn2 = myArr.splice(1,3);
console.log(myn2) // In splice last one is also included: [ 2, 3, 4 ]

console.log("C", myArr); // Changes are done in Originak after splicing: C [ 1, 5 ]

/*
Slice                                  Splice
1. It does not include the      1. It DOES include the last
last number                        number

2. After slicing, There are     2. After Splicing, Changes will be
NO changes in original Array       in original Array
*/