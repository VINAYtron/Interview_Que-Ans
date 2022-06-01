// JAVASCRIPT INTERVIEW QUESTIONS & ANSWERS


//* 1) Difference between “ == “ and “ === “ operators.
// Ans =>
// These are the comparison operators. 
// They always return boolean values like true or false.
// == it compares only the value.
// === it compares both the value as well as type of data.
// If you want to find the data type of value we use typeof operator. (syntax :- typeof a)
// Ex.,
// let a = 5
// let b = "5"
// a == b will give true
// a === b will give false


//* 2) What is the spread operator?
// Ans => 
// Spread Operator in javascript take in the iterable and expands it into individual value(destructuring.
// It's syntax is (...)
// It can be used to clone, expand and concat arrays and objects.
// const arr1 = [1, 2, 3]
// const arr2 = [...arr1, 4, 5, 6]
// O/P = [1, 2, 3, 4, 5, 6]


//* 3) What are the differences between var, let and const?
// Ans => 
// These are three different ways of creating or declaring the variables in JS.
// Out of thses threee var used to be a part of ES5 and let and const are part of latest release of JS version i.e. ES6.
// VAR KEYWORD =
// var is a global scoped & function scoped variable, var variables can be redecleared & reassigned.
// LET KEYWORD =
// let is a Block scoped variable.It can’t be accessible outside the particular block ({block}). let keywoed can't redecleared but we can reassign.
// CONST KEYWORD =
// const is a Blocked scoped varibale. They need to initialize it, otherwise, it returns an error.
// const keywoed can't be redecleared or reassign. 
// At the time of memory allocation they will get  their memory  also at different location means var will be in global and let and const will be in script scope according to browser, resulting in that if you will try to access var keyword vairbale before intialization you will get undefined.
// But if you will try to access variable created with let or const it will give Reference error: Variable is not defined.


//* 4) What is execution context
// Ans =>
// It is an concept in javascript that holds information about the environment where the current js code is being exceuted.
// It has Two Phases :=
// 1) Creation Phase => In this phase variables and function definitions gets allocated in the memory. Also variables declared gets intialized with undefined.
// 2) Execution Phase => Here, variables gets the value assigned to them and for every function call a new execution context i.e. FEC is created with same 2 phases.
// In js we can have 2 types of execution context:
// 1) Global (GEC) => When the js file first loads on the browser this context is created and pushed into the call stack. Code which is not in any function or object is excuted inside.
// 2) Functional (FEC) =>  When Js Engine finds a function call it creates a new execution context refering that function which is also pushed in call stack. 


//* 5) What is meant by first class functions?
// Ans =>
// When functions are treated like any other variable in js they are called as first class functions.
// This function can be passed as an argument to other function also they can be returned by other functions.
// Ex.,
// const greeting = () => {
//   return("Tron");
// };
// const result = (greet) => {
//   console.log("Hi", greet);
// };
// result(greeting());
// O/P => Hi Tron


//* 6) What are Closures ?
// Ans =>
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. 
// closures are created every time a function is created, at function creation time.
// Ex.,
// function outer() {
//     var num = 5;
//     fucntion inner() {
//         console.log(num)
//     }
//     return inner;
// }
// outer()();
// O/P => 5
