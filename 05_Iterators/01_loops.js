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