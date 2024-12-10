// Date: Date is an OBJECT in JAVASCRIPT
// JS stores dates as number of milliseconds since Jan 01, 1970
let myDate = new Date()
// METHODS IN DATE
console.log(myDate.toString())
//Mon Dec 09 2024 05:39:28 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString());
//12/9/2024
console.log(myDate.toLocaleString())
//12/9/2024, 5:39:28 AM
console.log(myDate.toISOString())
//2024-12-09T05:39:28.078Z
console.log(myDate.toJSON())
//2024-12-09T05:39:28.078Z
console.log(myDate.toDateString())
//Mon Dec 09 2024
console.log(myDate.toTimeString())
//05:39:28 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString())
//05:39:28 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString())
//Mon, 09 Dec 2024 05:39:28 GMT

// ++++++++TYPEOF OF DATE++++++++++ (IMP FOR INTERVIEW)
console.log(typeof myDate); //object: Beacuse instance banate h

let myCreatedDate = new Date(2024, 1, 23); // Year, Month(starts with 0-11), Date
console.log(myCreatedDate.toDateString());
// Fri Feb 23 2024

let anotherDate = new Date(2023,3,12,3,4,23); //(Year,Month(April),Date,Hour,Min,Sec)
console.log(anotherDate.toLocaleString());
// 4/12/2023, 3:04:23 AM

// Another Syntax 
let ThirdDate = new Date("01-12-2023");
console.log(ThirdDate.toDateString()); //Thu Jan 12 2023

// +++++++++++++++++ TIMESTAMP +++++++++++++++++++++++++++++
//used when designing quiz and polls to determine the winner
let myTimeStamp = Date.now(); //--> Gives Date of today
console.log(myTimeStamp); // Gives in milisecond: 1733723768007
console.log(myCreatedDate.getTime()); //Converts in Miliseconds: 1708646400000
//Now we can compared the times

// ASKED IN INTERVIEW
//Converts the date in seconds
console.log(Date.now());
// Milisecond: 1733724246246
console.log(Math.floor(Date.now()/1000));
// Seconds mai: 1733724366

let newDate = new Date()
console.log(newDate.toLocaleString());

newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
    era:"narrow"
})