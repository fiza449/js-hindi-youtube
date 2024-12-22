/* JS execution context: refers to the environment in which a piece of JavaScript code is executed.(How the code will run?)
   Understanding execution context is key to understanding JavaScript's behavior, especially when it comes to scope, closures, and this. */

/* Types of EC
 1. Global EC[{ }]: Will always be created when script starts runnung.
                    It is the default or base execution context.
                    In broswer -> the global enviornment is window object (The window object is the "main object" that JavaScript uses to interact with the browser.)
                    In Node.js -> the global environment is the global object.
                    (Both are "containers" for global variables and functions, but they are specific to the environment.)
                    Variables and functions declared in the global scope are accessible here.
    When JavaScript code runs, it always runs in some kind of environment. That environment is called the Global Execution Context.

    In Hindi: GEC ek default environment h jaha pr apna full code run hota h. Automatically create hota jab apna code execute hota h

 2. Function EC: Created whenever function is invoked.
                 Each function call -> gets its own execution context, separate from the global execution context.  
                 It saves info like: Arguments passed to the function, Local variables and function declarations within the function.
    In Hindi: FEC ek alag se space create krta for Functions in the Global Excution Context

 3. Eval Execution Context: Created when code is executed inside an eval() function.
                            Rarely used and  generally discouraged due to performance and security issues.


  PHASES OF EXECUTION CONTEXT:
  1. Memory Creation Phase: Allocate MEMORY SPACE for variables or jo bhi declare kra h (ONLY the space will be created wil value undefined for var)(for function definition is store)
  2. Execution Phase: Variables are assigned values, and functions are invoked.
                      The code inside the context is executed line by line.


LET'S UNDERTAND WITH THE HELP OF CODE
*/                    
 let val1 = 10
 let val2 = 5
 function addNum(num1,num2){
    let total = num1 + num2;
    return total
 }
 let result1 = addNum(val1,val2);
 let result2 = addN(10,2);
 
 /*
 1. Global Execution: Whole environment of code (this)
 2. Memory Phase: 
                  val1 -> undefined
                  val2 -> undefined
                  addNum -> definition(of function)
                  result1 -> undefined
                  result2 -> undefined
 3. Execution Phase:
                  val1 <- 10
                  val2 <- 5
                  **result1** <- 15 (returned from total)
                  **result2** <- 12 (returned from total)
                  addNum --> NOW function execution context will be created for addNum(function) which includes (Memory space and Execution Phase apart from Global one to execute the function)
                             a. Memory Phase for addNum(result1):            | THIS
for context in function addNum<- val1 -> undefined                  | FUNCTION EC WILL BE DELETED 
                                 val2 -> undefined                  |AFTER RETURNING VALUE
                                 total -> undefined
                             
                             b. Execution Phase for addNum(result1):
                                 num1(val1 hi h) <- 10
                                 num2(val2 hi h) <- 5
                                 total <- 15 
                                 return total (Now this total will be RETURN to GLOBAL excution phase ke result 1 ko)
   NOW SAME FOR RESULT2 A NEW FUNCTION EC WILL BE CREATED AND RETURN THE TOTAL TO GEC EXECUTION PHASE
      
 CALL STACK: Follows last in first out principle
            The call stack in JavaScript is a data structure that keeps
            track of function calls in the order they are executed.
            Think of it as a stack of plates: when a function is called,
            it’s placed on top of the stack, and when the function finishes,
            it’s removed from the top.

            How the call stack works?
         1. When your JavaScript code runs, the Global Execution Context is pushed onto the call stack.
         2. Each time a function is called, a new Execution Context for that function is created and pushed onto the stack.
         3. When a function finishes execution, its context is popped off the stack.

 */

/*
Interview questions for the above topics

1. What is an execution context in JavaScript?

Ans: EC is an environment in which JS code is executed. Three main components are
     Variable environment: Holds var, functiom declarations and arguments
     Lexical Environment: Refers to outer environment
     this binding:Determines the value of this based on how the function is called.

 2. What are the types of execution contexts in JavaScript?

 Ans: Global Execution Context (GEC): Created when the script starts executing.
      Function Execution Context (FEC): Created whenever a function is called.
      Eval Execution Context: Created when code inside an eval() function is executed (rarely used).

 3. What happens during the creation phase of an execution context?

 Ans: The global object (window or global) is created
      Variables declared with var are initialized to undefined.
      Function Declarations are Fully Hoisted (Function is declared at the top so even if func is defines later in code it's already available for use)
      The this Keyword is Set Based on the Execution Context(value of this depends on how function is called not where it's defined)
   
4.  What is hoisting in the context of execution?

Ans: Hoisting is the process where JavaScript moves variable and function
     declarations to the top of their scope during the creation phase of the
     execution context.

5. What does the this keyword refer to in different execution contexts?

Ans: In,
     Global Execution Context: this refers to -> Global Object ({})
     Browser -> this refers to WINDOW
     Node.js -> global
     In,
     Function Execution Context: this DEPENDS on how the function is called
     If,
     Called as a methods -> then OBJECT
     Called as a standalone function -> Global object OR undefined in strict mode
     In a constructor: then refers to newly created object

 6. What is the call stack in JavaScript?

 Ans: The call stack is a data structure that tracks the order of function 
 calls in JavaScript. It uses the Last In, First Out (LIFO)
  principle, meaning the last function added is the first 
  to be removed.

7. What happens when a function is called in JavaScript?

Ans: 1. A new Function Execution Context is created.
     2. This execution context is pushed onto the call stack
     3. The function executes, and when it finishes, its execution context is popped off the call stack.

8. Explain the role of the call stack with an example

Ans: The call stack keeps track of the execution order of functions.
     Example:
     neeche h

9. What happens if a function calls itself?

Ans: If a function calls itself, a new execution context for the function is pushed onto 
the call stack each time it is called. Without a termination condition, this can lead to 
a stack overflow.
 
*/

/*Self doubt questions:
 1. What's method: A method is just a function that belongs to an object. Think of it as an action that an object can perform.
 2. Whtat's Global Object: The global object is like a "container" for all the default things available in your JavaScript environment.
*/