// ``: String Interpolation
const Name = "Fiza";
const FavColor = "Black";
console.log(`My name is ${Name} and My favourite color is ${FavColor}.`);

//How to declare Strings In JS
const gameName  = new String('hite-sh-hc');

console.log(gameName[1]); //i
console.log(gameName.__proto__); //To check prototype of String

//String Methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h')); 
//Slice the string
const newString = gameName.substring(0,4); //Slicing (Last one is not included) but it does not accept negative value
console.log(newString);

const newString2 = gameName.slice(-7,4); //Accepts negative value too
console.log(newString2);

//trim: Remove the unneccessary spaces 
const Naam = "   Fiza   ";
console.log(Naam.trim());

//replace
const url = "https://fiza.com/fiza%20ansari"
console.log(url.replace('%20','-'));

//includes: To see if particular word is present or not
console.log(url.includes('sundar')); //false

//split: Splits the strings into array
console.log(gameName.split('-'));