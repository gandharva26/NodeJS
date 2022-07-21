function divide(a, b){
    if( b!=0){
    return a/b;
    }
    else{
    throw "Divide by zero"
    }
}
res = divide(1/1)
console.log(res)

module.exports = divide
