 //Concatenation: .concat
 const num1 = [0,1,2,3,4,5]
 const num2 = [6,7,8,9]
 //When we use push instead of concat it creates problem
//  num1.push(num2);
//  console.log(num1); //[ 0, 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ] --> Array ke andar Array gives problem
//  console.log(num1[6][1]); //This makes it complicated

//  const Concat = num1.concat(num2)
//  console.log(Concat); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

 // 2. spread(...) (easy way to concat. more easyyy)
 const Spread = [...num1, ...num2] //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 console.log(Spread) 

 //3. .flat: Returns a new array with all sub-array elements concatenated
 // into it.
 const newArr = [0,1,2,3,4,[5,6,[7,8,9]]]; //Array ke andar array ke andar array h
 const anotherArr = newArr.flat(Infinity)
 console.log(anotherArr); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 

 // 4. Array.isArray(" "): we can ask if array or not
 console.log(Array.isArray([1,2,3,4])) //true
 console.log(Array.isArray("Fiza")) //false

 // 5. Array.from(" "): We can make array by using this
 console.log(Array.from("Fiza")); //[ 'F', 'i', 'z', 'a' ]

 //Special case askesd in Interview
 console.log(Array.from({name: "Fiza"})); //[]: Gives empty array
 // as it can't make a array of key

 let score1  = 100;
 let score2  = 200;
 let score3  = 300;
 // Make array 
 console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]


 const arr1 = [1,2,3,4,5]
 const arr2 = [5,6,7,8,9,10]
 const arr3 = [0,0,0]
 const arr4 = [1,3,8,9,10]
 //Using Concat
//  const ConCatAll = arr1.concat(arr2,arr3,arr4)
//  console.log(ConCatAll)
 /*
 [
  1, 2, 3,  4,  5, 5, 6,
  7, 8, 9, 10,  0, 0, 0,
  1, 3, 8,  9, 10
]
 */

//Using Spread
// const ConCatAll = [...arr1,...arr2,...arr3,...arr4];
// console.log(ConCatAll)
/*
[
  1, 2, 3,  4,  5, 5, 6,
  7, 8, 9, 10,  0, 0, 0,
  1, 3, 8,  9, 10
]
*/