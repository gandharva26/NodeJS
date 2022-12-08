// computers understand - machine level -> assemnbly language -> higher progrmaming C++ -> 
// Javascript?
// Browser - Javascript runs through a v8 Engine - written in C++
// on Computer/ Server - Node JS wraps v8 Engine written in C++ 
// Javascript --- Node --- Machine code 
//In practice, this means that you can use both require() and import in Node.js, while you are limited to import in the browser.


//Global object
// set interval - runs every second, setTimeout - runs once after those many seconds
// dirname : directory name, filename - abs path+ filename
// In Node.Js, can't access document() methods, presentonly in browser DOM methods
//import * as Path from 'path';
const path = require('path');

const team = require('./people')        // require loads the required page and RUNS it, to access variables and functions use "export"
const {people} = require('./people')       // stores in multiple variables directly 

console.log("absolute path",path.resolve('node.js'))    //path package
console.log("people",people)
console.log(team,"tam")
const greet = (name) => {
    console.log(`Hello ${name}`)   // using variables in a template string
}
//greet("Mario")
//console.log(global)

setTimeout(()=>{
    console.log('hey')
}, 2000)

// setInterval(() =>{
//     console.log("helo")
// },1000)    //runs

console.log(__dirname)
console.log(__filename)

//import core models in node

const os = require('os')
console.log(os.platform(), os.homedir())

//Yargs = makes parsing CLInputs easier compared to argv
