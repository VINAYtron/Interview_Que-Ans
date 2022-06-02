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


//* 7) Explain call(), apply() and, bind() methods.
// Ans =>
// These are the methods in js serving the same purpose with some differences. The purpose they serve is take in object and sets the this keyword in a function to the specified object.
// this(keyword) refers to the object from where the function is invoked from.
// bind() => it creates and returns a new function.
// call() and apply() => it set this keyword and immediately executes the function doesnt return anything.
// only difference between call() and apply() is call accepts comma seperated arguments and apply accepts array of arguments
//Ex.,
// const john = {
//     name: 'John',
//     age: 22
// }
// const jane = {
//     name: 'Jane',
//     age: 26
// }
// function greeting () {
//     consoel.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)
// }
// greeting.call(john) // Hi my name is John and I am 22 years old.
// let newFunc = greeting.bind(jane)
// newFunc(); // Hi my name is Jane and I am 26 years old.


//* 8) Explain prototypes.
// Ans =>
//  Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//The prototype is an object that is associated with every functions and objects by default in JavaScript,
//  where function's prototype property is accessible and modifiable and object's prototype property is not visible
//Ex .,
// let animal = {
//     eats: true,
//     moves: true
// }
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }
// rabiit inherits from animal.


//* 9) What are function constructors. 
//Ans =>
// They are just like regular functions used to create objects.
// They are called with new keyowrd.
// Good practice to capitalize first letter of the constructor function.
// When the function is executed with new keyword 2 things happen:
// 1) it creates an empty object and assigns that empty object to this keyword.
// 2) Returns this( which is object created by the function)
// function Person(name, age) {
//     this.fname = name,
//     this.myAge = age
// }
// const person1 = new Person("John", "22");
// console.log(person1.fname);  => John


//* 10) Give an example of inheritance using function constructor.
//Ans =>
// function Employee(name, age, gender, id) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.id = id;
// }

// function Developer(name, age, gender, id, specialization) {
//    Calling Employee constructor function
//   Employee.call(this, name, age, gender, id);

//    Adding a new parameter
//   this.specialization = specialization;
// }
// console.log(Employee.prototype);
// console.log(Developer.prototype);


//* 11) What is prototype chain.
//Ans =>
// Prototypes are objects from which other objects can inherit properties.
// The Prototype of an object could also have prototype object and this continues until we reach the level where no prototype object is found. This is called prototype chaining.
// Eg .,
// pocket -> bed -> table -> head
//         let head = {
//             glasses: 1
//         }
//         let table = {
//             pen: 3,
//             __proto__: head
//         }
//         let bed = {
//             sheet: 1,
//             pillow: 2,
//             __proto__: table
//         }
//         let pocket = {
//             money: 2000,
//             __proto__: bed
//         }


//* 12) Callback Functions.
//Ans =>
// In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. 
// Ex .,
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// function callMe() {
//     console.log('I am callback function');
// }
// greet('Peter', callMe);
//O/P => Hi peter, I am callback function


//* 13) What is the use of setTimeout.
//Ans =>
// It is an asynchronous function, it will not pause execution of other functions in call stack (As in js code is exceuted line by line and next line to execute previous one should be finished).
// It take a callback function to execute and time in ms as arguments and it exceutes that callback function after specified time.
// It can be used in alarms or reminders, delay some kind of executions.
// Ex .,
// console.log("i am first")
// setTimeout(() => {
//     "I am Last"
// }, 3000);
// console.log("I am Second");


//* 14) What is an event loop and call stack.
//Ans =>
// Call Stack => It is where the execution context in javascript are maintained and are being tracked so that we know which current context of code is running. Js has only one call stack at a time because it is single threaded language.
// It follows Last In First Out principle (LIFO)
// Event Loop => Whenever a asynchronous operation or function is being execcutes it doesnt directly go into the callstack there is queue caalled as callbakc queue which is where it goes. this queue follows principle of FIFO(first in first out). And event loop frequently checks whether the call stack is empty or not, Whenever it founds it is empty is pushes the first call of callback queue to call stack.


//* 15) What is creation phase and execution phase.
//Ans
// There is execution context in js which holds information about the environment where the current js code is being exceuted.
// Every execution context has two phases:
// 1) Memory creation Phase => In this phase variables and function definitions gets allocated in the memory. Also variables declared gets intialized with undefined.
// 2) Code Execution Phase => Here, variables gets the value assigned to them and for every function call a new execution context i.e. FEC is created with same 2 phases.


//* 16) What are objects in javascript.
//Ans 
//An object is an unordered collection of key-value pairs. Each key-value pair is called a property. //its consists of properties and methods. //object have keys which are converted to string types, the properties and method do not follow the insertion order.
//Ex ., 
// const user= { 
//     name: "Rahul",
//     profession: "Teacher",
//     hobbies: ["Reading", "Dancing"],
//     bio: function() { 
//         return(`Hi! I am ${this.name}, my profession is ${this.profession}`);
//     }
// }
// console.log(user.bio());
// O/P => Hi! I am Rahul, my profession is Teacher


//* 18) What is Callback Hell.
//Ans
// It is an issue caused by coding with complex nested callbacks.
// Each and every callback takes an argument that is result of previous callbacks.
// The code structure looks like a pyramid of doom, making it difficult to read and maintain.
// If there is an error in one function, all other functions get affected.
//Ex.,
// function printNumbers() {
//     setTimeout(() => {
//         console.log('1')
//         setTimeout(() => {
//             console.log('2')
//             setTimeout(() => {
//                 console.log('3')
//                 setTimeout(() => {
//                     console.log('4')
//                     setTimeout(() => {
//                         console.log('5')
//                         setTimeout(() => {
//                             console.log('6')
//                             setTimeout(() => {
//                                 console.log('7')
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }
// This is called the callback hell
