//Interview Questions for variable and strings IN JS

/*
1. What are the differences between var, let, and const?
Ans: 1. var: function scoped  (available throughout the function where it's declared).
             can be redeclared or updated
             hoisted but initialized as undefined
             eg: console.log(a); //undefined
                 var a;
    Ex:     var x = 10; 
            var x = 20; // No error, redeclaration allowed
            console.log(x); // Output: 20

            function example() {
            if (true) {
            var y = 30; // Available throughout the entire function
            }
            console.log(y); // Output: 30
            }


     2. let: Block-scoped (only available inside the {} where it’s defined
             Cannot be redeclared in same scope but can be updated
             It is hoisted but not initialized, so using it before declaration throws an error.
             eg: let a; //throw error
    Ex:      let x = 10; 
// let x = 20; // Error: Cannot redeclare x
x = 20; // Updating the value is allowed
console.log(x); // Output: 20

if (true) {
    let y = 30; // Only available inside this block
    console.log(y); // Output: 30
}
// console.log(y); // Error: y is not defined


     3. const: Block-scoped (like let, only available inside {}).
               Cannot be redeclared or updated.
               Must be initialized when declared
               It is hoisted but not initialized.
ex: const x = 10; 
// const x = 20; // Error: Cannot redeclare x
// x = 20; // Error: Cannot update x
console.log(x); // Output: 10

if (true) {
    const y = 30; // Only available inside this block
    console.log(y); // Output: 30
}
// console.log(y); // Error: y is not defined


2. What is string interpolation? How is it done in JavaScript?

Ans: String interpolation is the process of embedding variables or expression inside a string
     It is done using a template literals(way of creating strings without using ',"") with the help of (` ${variable}`) backticks.
     
 3. How are strings immutable in JavaScript?
 Ans: Because any operation of string creates a NEW STRING insted of modifying the original one (Primitive)
      ex: let str1 = "Hello"
          str1[0] = "Y"
          console.log(str1) //has no effect
 4. What are the different ways to declare a string in JavaScript?

 Ans: Using single quotes: 'Hello', Using double quotes: "World", Using template literals (backticks): `Hello, ${name}`

 5. How can you find the length of a string?

 Ans: let str = "Hello";
      console.log(str.length); // Output: 5

6. How do you concatenate two strings?

Ans: 1. Using + operator
     let first = "Hello";
     let second = "World";
     console.log(first + " " + second);
     2. Using concat method

     console.log(first.concat(" ",second));

 7. What is the difference between slice, substring, and substr?

 Ans: 1. slice(start, end): Extracts part of the string from start to end (excluding end).
      2. substring(start, end): Similar to slice, but doesn't support negative indices.
      3. substr(start, length): Extracts a substring of a specified length starting from start.

8. How do you check if a string contains a specific substring?

Ans: 1. Using include(check if the particular is present or not. returns the o/p in boolean)
       code: let str = "JavaScript is fun";
             console.log(str.includes("fun")); // Output: true
                  
     2. Using indexOf:
        console.log(str.indexOf("fun")!== -1)// true
    
    3. What is the purpose of template literals?
    Ans: To embed variables and expressions in a string using backticks
    

*/
let first = "Hello";
let second = "World";
console.log(first.concat(" ",second));
console.log(first);
