
// to run a file node filename

// Install node.js - Javascript Engine for server side scripting
// npm init --y : y - yes // creats package.json to install dependencies to the project
// npm --i save-dev jest // saves as development dependency, installs jest
// npm install --force  newman-reporter-htmlextra  //for forcefully installing npm packages
// brew install packages // for installing using brew on Macos
// newman run postman_collection.json // to run an end-to-end automated collection
// npm test -- runs all tests in JEST framework

// Variables:
// let, const and var : keywords
// vars - are assigned memory in the memory allocaiton phase and attached to the global object (window object)
// let and const => 
// Temporal deadzone - time between let and const were hoisted until they are initialized. They are stored in diff mem(script). space and not attached to global space.
// let doesn't allow redeclaration using let or var, However var allows the same
// let can be declared and initialized later on 
// const needs to be initialized with declaration and can't be redeclared
// variables declared without these  : global variables
// use f9 for a break point
// Global variables (No keywords)
a = {1:'a', 2:'b'};
console.log(a)
function msg(){
    a = "Hello!";
    console.log(a);
}
msg(); // if function is called only then it gets defined because msg is allocated a memory space and not executed until it is called
console.log(a); // after msg() is called, a gets a global scope and overrides the previous definition of a

//Blocks - Compound statements used to combine multiple statements where JS expects single statement. They follow lexical chain pattern
// Let and const are block scoped - Can't access them outside the block, however Var can be accessed
// vars are subjected to shadowing 
// let and const are not subjected to shadowing
let b = 23
{
    var a = 10; // shadows the previous a
    let b = 20;
    console.log(b)
    const c = 30;
}
console.log(a) // a is shadowed
console.log(b) // b is not shadowed
// console.log(c) - Reference Error


{
    let k = 10
    var m = 10
    {
        let k =11
        {
           // var k = 12 // since var is global scoped, it gives an error
            let m = 15  // this doesn't throw an error because there is no scope conflict
            console.log(m) // 15
        } 
        console.log(m) //10
    }
}




// --------------------------------------

// Execution context

// JS works in 2 phases. 1. mem allocation 2. execution
//  Hoisting  : vars and functions can be accessed before initializing
// variables are allocated :undefined and functions are assigned : funciton body in phase 1 (memory allocaiton)
console.log(n);  // undefined
square(3);  //  9
var n = 2;
console.log(c) // IF YOU call C() -- c is not a function 
function square(num){
    console.log(num*num)
}
console.log(n); // 2
console.log(square) // function body

var c = (num) => {  // Arrow functions are treated as variables
    return num*num*num;
}

// ---------------------------------------------------
//FUNCTIONS AND SCOPE OF VARIABLES IN A FUNCTION
// 1. you can assign functions to a variable
// 2. You can return a function
// 3. you can pass a function as a parameter

function fx(fy){
    fy() // prints hi
}

fx(function fy(){
    console.log('hi');
})


var x = 0; // Scope is Global execution context
f1()
f2()
f3();

console.log(x) // 0
function f1(){
    console.log(x)  // undefined
var x = 1;
console.log(x) // 1 local variable x, local to f1
}

function f2(){
var x= 2;
console.log(x) // 2 local to f2
}

function f3(){
    var y = 1;
    console.log(x) // 0
    function f4(){
        var x = 5;
        console.log(y)   // has access to parent's lexical scope
    }
    console.log(x) // parent doesn't have access to child's lexical scope
    f4();
}
 // console.log(y)  -- Error


// Scope Chain
// lexical environment - local memory + lexical environment of its parent (lexical - heirarchy)  
// the whole chain - scope chain

function fn(){
    var b = 10;
    c()
    function c(){
        console.log(b) // prints 10
    }
}


// Closures : Function along with its lexical scope

function fn1(){
    var b = 11;
    c();
    function c(){
        console.log(b) // prints 11
    }
    return c

}

console.log(fn1())

// closures in action 

function x1(){
    var a = 7;
    return function y(){
        console.log(a)
    }
                         // same as return var y = function { ... }; return y;
}
 var t = x1() // t will store the return value of function x i. e the function y
 t() // prints a because x is still the lexical parent of y and has access to it.


 // Callback functions : functions that are passed as argument and can be later called along with its lexical scope
 setTimeout(function p(){ // p is a callback function for setTimeout and is executed.
    console.log('Timer')
 }, 50)

setTimeout(() => console.log('Async'),20)  //anonymous fn is a call back function passed to web API that tracks the async callbacks, Javascript continues to execute
                                            // after 200ms it passes it back on to the call stack : Web apis - fetch, setTimeout, Setinterval, Event listners all use callbacks


 function fx(fy){ // function fy is callback for fx
    console.log('y')
    fy() // prints hi
}

fx(function fy(){
    console.log('x');
})

// passing functions as arguments
function action(x, y, callback) {
    return callback(x, y);
}

function multiplication(x, y) {
    return x * y;
}

function addition(x, y) {
    return x + y;
}
console.log(action(10, 10, multiplication)); // output: 100
console.log(action(10, 10, addition)); // output: 20

// Callbacks are not always async
let array = [1, 2, 3, 4, 5]
array.forEach(item => console.log(item))  // for each recieves a call back which is not Async

// Using Async JS using callbacks
// Problem : Line 205 has value undefined because "JS waits for none" and loginUSer returns value after 5 seconds.
console.log('start')
function loginUser1(email, password){
    
    setTimeout(() => {console.log('we have the data now');return {userEmail : email}}, 5000)
}
var user= loginUser1('gkd@abc.com', '123')
console.log(user)
console.log('end')

// Solution pass a callackfunction to LoginUSer

console.log('start')
function loginUser(email, password, callback){
    
    setTimeout(() => {console.log('we have the data now');
    callback({userEmail: email});
}, 300)
}


var user = loginUser('gkd@abc.com', '123', user => console.log(user))
console.log(user)
console.log('end')



// Promises : they were created because you may not necessarily fetch correct data after the timeout (API/ Database calls)
// they solve the problem of passing multiple callbacks 
let p = new Promise((resolve, reject) => {
    if (1 + 3 == 2){
        resolve("Success");
    }
    else{
        reject('Failure');
    }
})

p.then((message) => console.log("if true", message)).catch((message) => console.log('if false', message)) //p.then() and .catch() take arrow functions as callbacks


userLeft = false
function WatchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft){
            resolve("user left")
        }
        else{
            reject("user is active")
        }

    })
}

// function returns a Promise object, promise takes a callback with 2 parameters resolve and reject. Promise objects can call 2 methods then and catch which in turn
// take callbacks to display the parameters passed from the Promise body inside resolve and reject

WatchTutorialPromise().then((message) => console.log(message)).catch((message) => console.log(message))

// Promise.race - returns the first promise result as soon as one of the promise resolves/rejects
// Promise.all - waits for all promises to be resolved.

let v1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("video 1 recorded")
    }, 1000)
})
let v2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("video 2 recorded")
    }, 2000)
})
let v3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("video 3 recorded")
    }, 3000)
  
})

Promise.race([v1, v2, v3]).then((messages) => console.log(messages)) //accepts an array of promise objects as a parameter, returns a single msg
Promise.all([v1, v2, v3]).then(messages => console.log(messages)) // returns all msgs as it waits for all to be resolved/rejected