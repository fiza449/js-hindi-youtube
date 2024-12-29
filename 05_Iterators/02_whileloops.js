// Syntax of while loop
let index = 0 //Initialization
while (index<=10) { //condition
    console.log(`Value of index is ${index}`)
    index = index  + 2; //increment
}
//
let myArray = ["fiza","shifa","riza"];
let i = 0
while (i<myArray.length) {
  console.log(`Value is ${myArray[i]}`);
  i = i + 1;
}

// do while loop
let score = 11
do {
  console.log(`Score is: ${score}`);
  score++;
} while (score<=10); //Score is: 11(condition is false so it will not go in do again.)