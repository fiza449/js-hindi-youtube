console.table([2>1,2<3,2>=2,2==3,2<1,3<=3]); //MOSTLY USED
//IMP note: In JS comparison(>,<) and equality(==) works differently
//While comparing two values the data type should be same.
console.log("1"> 2); //"String 1" is automatically converted to number and them compared giving o/p false
//As they are of not same data type we should avoid this
//GIVES PROBLEM. DON'T USE
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
/*
While comparing null with 0. null is treated as 0
the reason why null==0 is false and null>=0 is true because equality check works differently
*/
//ALSO CAUSE PROBLEM. DON'T USE
console.log(undefined>0); //false
console.log(undefined>=0); //false
console.log(undefined==0); //false

// ===: Strictly Checks Data type also
console.log("2"===2); //false