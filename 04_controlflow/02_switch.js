//Syntax of switch
// switch (key) {
//     case value:

//          break;
//     default:
//         break;
// }

const month = 9; //September

switch(month){
    case 1:
        console.log("January");
        //break;
    case 2:
        console.log("February");
        //break;
    case 3:
        console.log("March");
        //break;
    case 4:
        console.log("April");
        //break;
    case 5:
        console.log("May");
        //break;
    case 6:
        console.log("June");
        //break;
    case 7:
        console.log("July");
       // break;
    case 8:
        console.log("August");
        //break;
    case 9:
        console.log("September");
        //break;
    case 10:
        console.log("October");
        //break;
    case 11:
        console.log("November");
        //break;
    case 12:
        console.log("December");
        //break;
    default:
        console.log("NT");
        break;
}
// Why break is used in switch?
/*
Ans: The break statement in a switch case is used to terminate the execution of the current case block. Without it,
 the program continues executing the subsequent cases (fall-through behavior), even if their conditions don’t match.
*/