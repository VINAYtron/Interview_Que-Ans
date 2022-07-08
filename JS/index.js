// JAVASCRIPT INTERVIEW QUESTIONS & ANSWERS


//! 1) Difference between “ == “ and “ === “ operators.
// Ans =>
//* These are the comparison operators. 
//* They always return boolean values like true or false.
//* == it compares only the value.
//* === it compares both the value as well as type of data.
//* If you want to find the data type of value we use typeof operator. (syntax :- typeof a)
//* Ex.,
//* let a = 5
//* let b = "5"
//* a == b will give true
//* a === b will give false


//! 2) What is the spread operator?
// Ans => 
//* Spread Operator in javascript takes in the iterable and expands it into individual value(destructuring).
//* It's syntax is (...), Spread operator was introduced in ES6,
//* It can be used to clone, expand and concat arrays and objects.
//* Ex .,
//* const arr1 = [1, 2, 3]
//* const arr2 = [...arr1, 4, 5, 6]
//* O/P = [1, 2, 3, 4, 5, 6]


//! 3) What are the differences between var, let and const?
// Ans => 
//* These are three different ways of creating or declaring the variables in JS.
//* Out of thses threee var used to be a part of ES5 and let and const are part of latest release of JS version i.e. ES6.
//* VAR KEYWORD =
//* var is a global scoped & function scoped variable, It can be updated and re-declared into the scope.
//* LET KEYWORD =
//* let is a Block scoped variable.It can’t be accessible outside the particular block ({block}). It can be updated but cannot be re-declared into the scope.
//* CONST KEYWORD =
//* const is a Blocked scoped varibale. They need to initialize it, otherwise, it returns an error.
//* const keywoed can't be redecleared or reassign. 
//* At the time of memory allocation they will get  their memory  also at different location means var will be in global and let and const will be in script scope according to browser, resulting in that if you will try to access var keyword vairbale before intialization you will get undefined.
//* But if you will try to access variable created with let or const it will give Reference error: Variable is not defined.


//! 4) What is execution context
// Ans =>
//* It is an concept in javascript that holds information about the environment where the current js code is being exceuted.
//* It has Two Phases :=
//* 1) Creation Phase => In this phase variables and function definitions gets allocated in the memory. Also variables declared gets intialized with undefined.
//* 2) Execution Phase => Here, variables gets the value assigned to them and for every function call a new execution context i.e. FEC is created with same 2 phases.
//* In js we can have 2 types of execution context:
//* 1) Global (GEC) => When the js file first loads on the browser this context is created and pushed into the call stack. Code which is not in any function or object is excuted inside.
//* 2) Functional (FEC) =>  When Js Engine finds a function call it creates a new execution context refering that function which is also pushed in call stack. 


//! 5) What is meant by first class functions?
// Ans =>
//* When functions are treated like any other variable in js they are called as first class functions.
//* This function can be passed as an argument to other function also they can be returned by other functions.
//* Ex.,
//* const greeting = () => {
//*   return("Tron");
//* };
//* const result = (greet) => {
//*   console.log("Hi", greet);
//* };
//* result(greeting());
//* O/P => Hi Tron


//! 6) What are Closures ?
// Ans =>
//* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//* closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. 
//* closures are created every time a function is created, at function creation time.
//* Ex.,
//* function outer() {
//*     var num = 5;
//*     fucntion inner() {
//*         console.log(num)
//*     }
//*     return inner;
//* }
//* outer()();
//* O/P => 5


//! 7) Explain call(), apply() and, bind() methods.
// Ans =>
//* These are the methods in js serving the same purpose with some differences. The purpose they serve is take in object and sets the this keyword in a function to the specified object.
//* this(keyword) refers to the object from where the function is invoked from.
//* bind() => it creates and returns a new function.
//* call() and apply() => it set this keyword and immediately executes the function doesnt return anything.
//* only difference between call() and apply() is call accepts comma seperated arguments and apply accepts array of arguments
//*Ex.,
//* const john = {
//*     name: 'John',
//*     age: 22
//* }
//* const jane = {
//*     name: 'Jane',
//*     age: 26
//* }
//* function greeting () {
//*     consoel.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)
//* }
//* greeting.call(john) // Hi my name is John and I am 22 years old.
//* let newFunc = greeting.bind(jane)
//* newFunc(); // Hi my name is Jane and I am 26 years old.


//! 8) Explain prototypes.
// Ans =>
//*  Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//*  The prototype is an object that is associated with every functions and objects by default in JavaScript,
//*  where function's prototype property is accessible and modifiable and object's prototype property is not visible
//*  Ex .,
//* function Person(name, yearOfBirth) {
//*   this.FirstName = name;
//*   this.yearOfBirth = yearOfBirth;
//* }

// *Person.prototype.lname = "Wick";
// *Person.prototype.calcAge = function () {
// *  console.log(`The Current Age is ${2022 - this.yearOfBirth}`);
// *};

//* console.log(Person.prototype);

//* const Person1 = new Person("John", 1986);
//* console.log(Person1);

//* Person1.calcAge();


//! 9) What are function constructors. 
//Ans =>
//* They are just like regular functions used to create objects.
//* They are called with new keyowrd.
//* Good practice to capitalize first letter of the constructor function.
//* When the function is executed with new keyword 2 things happen:
//* 1) it creates an empty object and assigns that empty object to this keyword.
//* 2) Returns this( which is object created by the function)
//* Ex .,
//* function Person(name, age) {
//*     this.fname = name,
//*     this.myAge = age
//* }
//* const person1 = new Person("John", "22");
//* console.log(person1.fname);  => John


//! 10) Give an example of inheritance using function constructor.
//Ans =>
//* function Employee(name, age, gender, id) {
//*   this.name = name;
//*   this.age = age;
//*   this.gender = gender;
//*   this.id = id;
//* }

//* function Developer(name, age, gender, id, specialization) {
//*   Calling Employee constructor function
//*   Employee.call(this, name, age, gender, id);

//*   Adding a new parameter
//*   this.specialization = specialization;
//* }

//* Creating objects
//* let Employee1 = new Employee("Suraj", 28, "Male", 564);
//* let Developer1 = new Developer(
//*   "Karishma",
//*   31,
//*   "Female",
//*   345,
//*   "Frontend Developer"
//* );
//* console.log(Employee1);
//* console.log(Developer1);


//! 11) What is prototype chain.
//Ans =>
//* Prototypes are objects from which other objects can inherit properties.
//* The Prototype of an object could also have prototype object and this continues until we reach the level where no prototype object is found. This is called prototype chaining.
//* Eg .,
//* pocket -> bed -> table -> head
//*         let head = {
//*             glasses: 1
//*         }
//*         let table = {
//*             pen: 3,
//*             __proto__: head
//*         }
//*         let bed = {
//*             sheet: 1,
//*             pillow: 2,
//*             __proto__: table
//*         }
//*         let pocket = {
//*             money: 2000,
//*             __proto__: bed
//*         }


//! 12) Callback Functions.
//Ans =>
//* In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. 
//* Ex .,
//* function greet(name, callback) {
//*     console.log('Hi' + ' ' + name);
//*     callback();
//* }
//* function callMe() {
//*     console.log('I am callback function');
//* }
//* greet('Peter', callMe);
//*O/P => Hi peter, I am callback function


//! 13) What is the use of setTimeout.
//Ans =>
//* It is an asynchronous function, it will not pause execution of other functions in call stack (As in js code is exceuted line by line and next line to execute previous one should be finished).
//* It take a callback function to execute and time in ms as arguments and it exceutes that callback function after specified time.
//* It can be used in alarms or reminders, delay some kind of executions.
//* Ex .,
//* console.log("i am first")
//* setTimeout(() => {
//*     "I am Last"
//* }, 3000);
//* console.log("I am Second");


//! 14) What is an event loop and call stack.
//Ans =>
//* Call Stack => It is where the execution context in javascript are maintained and are being tracked so that we know which current context of code is running. Js has only one call stack at a time because it is single threaded language.
//* It follows Last In First Out principle (LIFO)
//* Event Loop => Whenever a asynchronous operation or function is being execcutes it doesnt directly go into the callstack there is queue called as callbakc queue which is where it goes. this queue follows principle of FIFO(first in first out). And event loop frequently checks whether the call stack is empty or not, Whenever it founds it is empty is pushes the first call of callback queue to call stack.


//! 15) What is creation phase and execution phase.
//Ans
//* There is execution context in js which holds information about the environment where the current js code is being exceuted.
//* Every execution context has two phases:
//* 1) Memory creation Phase => In this phase variables and function definitions gets allocated in the memory. Also variables declared gets intialized with undefined.
//* 2) Code Execution Phase => Here, variables gets the value assigned to them and for every function call a new execution context i.e. FEC is created with same 2 phases.


//! 16) What are objects in javascript.
//Ans 
//* An object is an unordered collection of key-value pairs. Each key-value pair is called a property.
//* its consists of properties and methods. 
//* object have keys which are converted to string types, the properties and method do not follow the insertion order.
//* Ex ., 
//* const user= { 
//*     name: "Rahul",
//*     profession: "Teacher",
//*     hobbies: ["Reading", "Dancing"],
//*     bio: function() { 
//*         return(`Hi! I am ${this.name}, my profession is ${this.profession}`);
//*     }
//* }
//* console.log(user.bio());
//* O/P => Hi! I am Rahul, my profession is Teacher


//! 17) What is Callback Hell.
//Ans
//* It is an issue caused by coding with complex nested callbacks.
//* Each and every callback takes an argument that is result of previous callbacks.
//* The code structure looks like a pyramid of doom, making it difficult to read and maintain.
//* If there is an error in one function, all other functions get affected.
//* Ex.,
//* function printNumbers() {
//*     setTimeout(() => {
//*         console.log('1')
//*         setTimeout(() => {
//*             console.log('2')
//*             setTimeout(() => {
//*                 console.log('3')
//*                 setTimeout(() => {
//*                     console.log('4')
//*                     setTimeout(() => {
//*                         console.log('5')
//*                         setTimeout(() => {
//*                             console.log('6')
//*                             setTimeout(() => {
//*                                 console.log('7')
//*                             }, 1000)
//*                         }, 1000)
//*                     }, 1000)
//*                 }, 1000)
//*             }, 1000)
//*         }, 1000)
//*     }, 1000)
//* }
//* This is called the callback hell


//! 18) What are promises and why do we need them?
//Ans =>
//* Promise is an object in javascript that represents eventual completion or failure of an asynchronous operation and its resulting value.
//* Promise can be created using Promise constructor. which takes in a callback function and which has 2 parameters resolve and reject.
//* Promise can be in one of the 3 state at an instance of time:
//* 1) pending: initial state, promise neither been resolved nor rejected
//* 2) fulfilled: it means operation has been completed successfully (resolved)
//* 3) rejected: it means operation has been failed to complete.
//* There are also promise consumers:
//* then() =>  it is invoked when promise gets fulfilled. It takes in a callback function and the parameter of the callback function will be equal to the resolve value.
//* .catch() => it is invoked when promise gets rejected. It takes in a callback function and the parameter of the callback function will be equal to the reject value.
//* Ex .,
//* let promise1 = new Promise((resolve, reject) => {
//*   const x = 5;
//*   const y = 6;
//*   if (x === y) {
//*     resolve("Both are equal");
//*   } else {
//*     reject("Not equal");
//*   }
//*   resolve("Promise has been fulfilled");
//*   reject("Promise has been rejected");
//* });
//* promise1.then(result =>  console.log(result))
//*     .catch(result =>  console.log(result))


//! 19) What is Promise Chaining ?
// Ans =>
//* The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. 
//* Sometimes, you want to execute two or more related asynchronous operations,
//* where the next operation starts with the result from the previous step this can be done using promise chaining
//*this can be done by calling the .then() method multiple in a single promise
//* Ex ., 
//* let p = new Promise((resolve, reject) => {
//*     setTimeout(() => {
//*         resolve(10);
//*     }, 1000);
//* });

//* p.then((result) => {
//*     console.log(result); //10
//*     return result * 2;
//* })
//* .then((result) => {
//*     console.log(result); //20
//*     return result * 3
//* })
//* .then((result) => {
//*     console.log(result); //60
//* });


//! 20) What is the purpose of asyn/await keywords ?
// Ans =>
//* async and await are predefined keywords in javascript.
//* They make promises easier to write.
//* async => it is used before fucntion and it makes the function return a promise.
//* await => it is used inside the function and it makes the function wait for the promise.
//* Ex .,
//* let promise = new Promise((resolve, reject) => {
//*     setTimeout(() => {
//*         console.log("second");
//*         resolve();
//*     }, 1000)
//* })

//* async function print() {
//*     console.log('first')
//*     await promise;
//*     console.log('third')
//* }
//* print();


//! 21) What is Hoisting ?
// Ans =>
//* Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.
//* Only normal functions are hoisted not arrow or first class or anonymous functions.
//* If we try to access var variable before intialization it gets hoisted and shows undefined.
//* But in case of let and const it shows reference error because we are accessing them in Temperal dead zone, which is context of code where variable is present in scope but are not accessible. so it is good practice to always define variables at top of their scope.
//* Ex .,
//* console.log(test) // undefined
//* var test

// *message("Good morning"); //Good morning
// *function message(name) {
// *  console.log(name);
//* }


//! 22) What is DOM ?
// Ans => 
//* Document Object Model (DOM) is a programming interface for HTML Documents.
//* It is a way to represent the webpage in a structured hierarchial way so that it will become easier for programmers an users to glide through the document.
//* With DOM, we can easily access and manipulate tags, IDs, classes, attributes, or elements using methods like getElementById etc.
//* When the Html file loads in the brower javascript cannot understand it directly, so we require DOM which is representtion of same html documnet but in different format with using objects.


//! 23) Difference between undefined , not defined & NaN ?
// Ans =>
//* undefined => When we declare a variable and do not assign any value to it, it by default gets the value assigned known as undefined in javascript.
//* typeof (undefined) gives us undefined.
//* not defined => When we try to access  vairable which is not declred then we encounter Reference Error saying variable is not defined.
//* NaN => It is known as Not a Number. It denotes that value of object is not a number.
//* Ex ., 
//* This function returns true if the value equates to NaN. Otherwise it returns false.
//* isNaN("Hello"); //true
//* isNaN("100"); //false


//! 24) How many operators do we have in JS ?
// Ans =>
//* Arithmetic Operators 
//* Comparison Operators
//* Logical Operators
//* Assignment Operators
//* Ternary Operators
//* typeof Operator
//* Bitwise Operators


//! 25) What are pure functions ?
// Ans =>
//* It is a function that always returns the same output for the same arguments passed in it.
//* That means function's return statement does not depend on the values outside the function.
//* Ex .,
//* let val1 = 6;
//* let val2 = 4;
//* function pure() {
//*   console.log(val1 * val2);
//* }
//* pure();


//! 26) What are arrow functions ?
// Ans =>
//* Arrow functions were introduced in ES6.
//* Arrow functions allow us to write shorter function syntax:
//* An arrow function expression  is an  alternative to a traditional function expression & its compact too
//* Syntax = () => {};
//* Ex ., 
//* const add = (a,b) => {console.log(a + b)};
//* add(5, 5); //10


//! 27) Give an example of async/await ?
// Ans =>
//* async function f() {

//*     let promise = new Promise((resolve, reject) => {

//*         setTimeout(() => {
//*             resolve("Done !");
//*         }, 2000);
//*     });

//*     let result = await promise;  // wait until the promise resolves
//*     alert(result);  
//* };

//* f();


//! 28) What is a Temporal Dead Zone ?
// Ans =>
//* A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
//* Before ES6 there was no other way to declare variables other than var. But ES6 brought us let and const.
//* let and const declarations are both block-scoped, which means they are only accessible within the { } surrounding them. 
//* var, on the other hand, doesn't have this restriction.
//* Ex .,
//* console.log(x);  Uncaught ReferenceError: Cannot access 'x' before initialization
//* let x = 10;


//! 29) What is the for-in loop in JavaScript? Give its syntax.
// Ans
//* The for...in statements combo iterates (loops) over the properties of an object.
//* The code block inside the loop is executed once for each property.
//* Ex ., 
//* const name1 = {
//*   name: "Tron",
//*   id: 88,
//*   clg: "XYZ",
//* };
//* for (let key in name1) {
//*   console.log(`Key is ${key} & Value is ${name1[key]}`);
//* }


//! 30) Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
//Ans 
//* Local Scope =>
//* Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function.
//* local scope can be divided into two scopes: Function Scope and Block Scope. Until ES6, JavaScript only had function scope
//* Ex ., 
//* var globalvar = 10;
//* function jsScope() {
//*     let localvar = 20;
//*     console.log(localvar);  20
//*     console.log(globalvar);  10
//* };
//* jsScope();
//* console.log(globalvar);  10
//* console.log(localvar);  Uncaught ReferenceError: localvar is not defined

//* Function Scope =>
//* Function Scope occurs when a variable is defined inside of a function.
//* Ex .,
//* function myFunction() {
//*   const carName = "Volvo";
//*   console.log(carName);  Function Scope
//* }
//* myFunction();
//* console.log(carName);  ncaught ReferenceError: carName is not defined 

//* Block Scope =>
//* Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//* ES6 introduced two important new JavaScript keywords: let and const.
//* These two keywords provide Block Scope in JavaScript.
//* Variables declared inside a { } block cannot be accessed from outside the block:
//*  {
//*      let x = 2;
//*  }
//* x can NOT be used here
//* Variables declared with the var keyword can NOT have block scope.
//* Variables declared inside a { } block can be accessed from outside the block.
//* {
//*     var x = 2;
//* }
//* x CAN be used here

//* Scope Chain =>
//* Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it’ll continue searching in its outer scope or parent functions’ scope until it reaches the global scope and completes searching for the variable there.
//* Ex ., 
//* const num1 = "10";
//* function numbers() {
//*   const num2 = "20";
//*   function innerNum() {
//*     const num3 = "30";
//*     function printNumbers() {
//*       console.log(`num 1 is ${num1}, num 2 is ${num2}, num 3 is s${num3}`);
//*     }
//*     printNumbers();
//*   }
//*   innerNum();
//* }
//* numbers();


//! 31) What is difference between null and undefined and where to use what?
// Ans => 
//* Null:-
//* null is a data type which can be use to implement or initialized a variable
//* null can also be written as "",''
//* let null = null;
//* console.log(null);  null

//* Undefined:-
//* It is a datatype in JS
//* undefine is  when a variable is define but not initialized or we have assign value to a variable then we get undefine
//* var value;
//* console.log(value);  undefine


//! 32) What is Symbol ?
// Ans =>
//* A “symbol” represents a unique identifier.
//* A value of this type can be created using Symbol():
//* Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values.
//* For instance, here are two symbols with the same description – they are not equal:
//* Ex .,
//* let id1 = Symbol("id");
//* let id2 = Symbol("id");
//* console.log(id1 == id2);  false 


//! 32) Write code to explain map and filter in arrays ?
// Ans =>
//* Map method() =>
//* creates a new array from calling a function for every array element.
//* calls a function once for each element in an array.
//* does not execute the function for empty elements.
//* does not change the original array
//* Ex .,
//* let arr = [1, 2, 3, 4, 5];
//* let newArr = arr.map((ele) => ele * 2);
//* console.log(newArr);

//* Filter Method() =>
//* It's creates a new array filled with elements that pass a test provided by a function.
//* It's does not execute the function for empty elements.
//* It's does not change the original array.
//* Ex .,
//* const ages = [32, 33, 16, 40];
//* const adults = ages.filter((age) => age >= 18);
//* console.log(adults);


//! 33) explain Self Invoking Function and its code ?
// Ans =>
//* The self-invoking function in JavaScript are known as Immediately Invoked Function Expressions (IIFE).
//* It is also used to avoid polluting global namespace
//* Ex .,
//* (function () {
//*   let x = "selfinvoking function";
//*   console.log(x);
//* })();


// ! 34) Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same ?
// Ans



//! 35) Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
// Ans 
//* function h2Tag() {
//*   const tag = (document.getElementById("h1").innerText = "MERN");
//* }


//! 36) Write code to get 1st H1 element from a webpage using DOM
// Ans 
//* const element1 = document.getElementsByTagName("h1");
//* let h1Element = element1[0].innerText;
//* console.log(h1Element);


//! 37) Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// Ans 
//* function currentTime() {
//*   let date = new Date(); //Object
//*   let hh = date.getHours();
//*   let mm = date.getMinutes();
//*   let ss = date.getSeconds();
//*   let session = "AM";

// *  if (hh == 0) {
// *    hh = 12;
// *  }
// *  if (hh > 12) {
// *    hh = hh - 12;
// *    session = "PM";
// * }

//*   mm = mm < 10 ? "0" + mm : mm;
//*   ss = ss < 10 ? "0" + ss : ss;
//*   hh = hh < 10 ? "0" + hh : hh;

//*   let time = hh + ":" + mm + ":" + ss + " " + session;

// *   document.getElementById("clock").innerText = time;
// *   let t = setTimeout(function () {
// *     currentTime();
// *   }, 1000);
// * }
// * currentTime();


//! 38) Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
// Ans
//* function replace(){
//*       document.getElementById("text").innerText = "Welcome to Elevation academy";
//* }


//! 39) Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
// Ans 
//* $("#Hide").click(function() {
//*     $(".Text2").hide();
//* });


//! 40) Given an array of 0's and 1's find out number of 0's
// Ans
//* const numbers = [1, 1, 0, 1, 0, 0, 1, 0];
//* let zero = 0;
//* let one = 0;

//* numbers.filter(x => {
//*     if(x === 0){
//*         zero++;
//*     }else {
//*         one++
//*     }
//* });
//* console.log(`NO. of Zeroes is ${zero} & NO. of Ones is ${one}`);


//! 41) Given an array find out total no. of odd and even nos.
//Ans
//* const numbers = [11, 12, 25, 18, 32, 15, 7, 10];
//* let odd = 0;
//* let even = 0;

//* numbers.filter((x) => {
//*   if (x % 2 === 0) {
//*     even++;
//*   } else {
//*     odd++;
//*   }
//* });
//* console.log(`NO. of Evens is ${even} & NO. of Odds is ${odd}`);


//! 42) Given a string find out number of vowels 
// Ans 
//* const string = "abcdefghioghklmnopaei";
//* let vowels = 0;
//* string.split("").filter((x) => {
//*   if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
//*     vowels++;
//*   }
//* });
//* console.log(`No. of Vowels = ${vowels}`);


//! Explain passed by value and passed by reference
// Ans 
//* Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument. So any changes made inside the function does not affect the original value.
//* In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .
//* Ex .,
//* let a = 10;
//* let b = a;
//* console.log(a);
//* console.log(b);
//* console.log(a === b);
//* a = 15;
//* console.log(a);
//* console.log(b);
//* console.log(a === b);

//* Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
//* In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value. 
//* Ex .,
//* let arr1 = [1, 2, 3, 4, 5];
//* let arr2 = arr1;
//* console.log(arr1);
//* console.log(arr2);
//* console.log(arr1 === arr2);
//* arr1.push("tron");
//* console.log(arr1);
//* console.log(arr2);
//* console.log(arr1 === arr2);
