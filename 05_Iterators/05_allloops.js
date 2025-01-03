//1. for-in loop
/*
What it does:  Iterates over the keys of an object
When to use:   When you want to work with an object's properties or keys.
Example
*/
const car = { brand:"Toyota", model:"Corolla", year: 2020};
for (const key in car) {
    //console.log(key); //brand, model , year
    //console.log(car[key]); //Toyota, Corolla, 2020
}
// It gives you the property names (key) and allows you to access their values.

// 2. forEach
/*
What it does: Executes a function for each element in an array.
When to use:  When working with arrays and you want to perform an action on each item.
*/
const numbers = [1, 2, 3, 4];
numbers.forEach(num => {
    //console.log(num); // 1, 2, 3, 4
});
//It doesn't return a new array and is mainly for side effects (e.g., logging or modifying data).

// 3. filter
/*
What it does:   Creates a new array by keeping only the elements that satisfy a condition.
When to use:    To filter out elements from an array.
*/
const num = [1, 2, 3, 4, 5];
const evenNumbers = num.filter(num => num % 2 === 0);
//console.log(evenNumbers); // [2, 4]
// It doesn't modify the original array but creates a new one with the filtered items.

// 4. Map
/*
1. A Map is a built-in object in JavaScript that allows you to store key-value pairs, where:
2. Keys can be of any data type (e.g., strings, numbers, objects, or even functions)
3. It preserves the insertion order of the key-value pairs
4. You can easily check how many entries are in the Map using .size.
5. It is faster than objects for adding/removing key-value pairs in certain scenarios.
*/
const map = new Map(); //Creating a new map
map.set('name','Alice');
map.set('Age',34); //Using (.set) to ADD elementss
//console.log(map) //Map(2) { 'name' => 'Alice', 'Age' => 34 }

//console.log(map.get('name')); //Using(.get ) to GET the values

//console.log(map.has('year')); //false Checking if a key exists
map.delete('Age');
//console.log(map.has('Age'));//false

map.clear();
//console.log(map.size); //0

//CHAINING IN JS: Using two-three methods tgt

const newNumers = [1,2,3,4,5,6,7,8,9,10]
const myAnother = newNumers
                  .map((num) => {return num*10})
                  .map((num) => {return num + 1})
                  .filter((num) => {return num>=40})
console.log(myAnother);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/