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
                  **result2** <- 
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

                    
 */

