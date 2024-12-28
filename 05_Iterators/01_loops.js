// for loop
const array = [2,5,3,6,7,2,5,7,8]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element== 5) {
       // console.log("5 is best number")
    }
    //console.log(element)
}
//Loops to print tab;e
for (let i = 1; i < 10; i++) {
    console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j < 10; j++) {
       //console.log(`Inner loop value:${j} and inner loop ${i}`)
       console.log(i + ' * ' + j + ' = ' + i*j);
    } 
}
//loops to print array
const myArray = ["flash","batman","superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

//break and continue in JS

for (let index = 0; index <= 20; index++) {
    if (index ==5) {
        console.log("5 is detected")
        break;
    }
    console.log(`Value of i: ${index}`);
}
// Output: 
/*
Value of i: 0
Value of i: 1
Value of i: 2
Value of i: 3
Value of i: 4
5 is detected (In break when 5 is detected it EXITS THE WHOLE LOOP) 
*/

//continue:
for (let index = 0; index <= 20; index++) {
    if (index ==5) {
        console.log("5 is detected")
        continue;
    }
    console.log(`Value of i: ${index}`);
}
// Output:
/*
Value of i: 0
Value of i: 1
Value of i: 2
Value of i: 3
Value of i: 4
5 is detected  In continue JUST 5 IS IGNORED and then the loop continued
Value of i: 6
Value of i: 7
Value of i: 8
Value of i: 9
Value of i: 10
Value of i: 11
Value of i: 12
Value of i: 13
Value of i: 14
Value of i: 15
Value of i: 16
Value of i: 17
Value of i: 18
Value of i: 19
Value of i: 20
*/