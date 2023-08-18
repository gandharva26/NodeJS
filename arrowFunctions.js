function add(x, y){
    return x + y
}

// function displayHello(){
//    console.log('Hello')
// }





// const displayHello = () => {


//     return console.log('hello')
// }
console.log(add(3, 2))
displayHello('hello')


function displayHello(){
    console.log("Hello")
}










const arr=[
    { name: 'Los Angeles', population: 3792621, university: {names: ["UCR", "UCLA"]} },
    { name: 'New York', population: 8175133, university: {names: ["NYU", "Columbia"]} }
  ]
  
  console.log(arr.reduce((acc, curr) => acc + curr.population, 0))
  console.log(arr.filter(elem => elem.name === "Los Angeles").flatMap(elem => elem.university.names))




function setObj(object){
     object = {x:2}
     return object
}
const object = {x:1}
res = setObj(object)
console.log(res)