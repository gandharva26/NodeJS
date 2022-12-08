const subtract = require('./subtract')

// A variable that is declared inside a function using the var keyword, will have a local scope.
// A variable that is declared inside a function without var keyword, will have a global scope means acts like a global variable.
arr = [1,3,5,4,6]
var a =3; // now it has global scope
setTimeout(() => {
    a =7;
    console.log(a)
    console.log(arr.length);
}, 100)
function temp(){
    var a = 5;
}
temp();
console.log(a);