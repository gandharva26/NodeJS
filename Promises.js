//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.
//
//async/await and promise.then/catch
//When we use async/await, we rarely need .then, because await handles the waiting for us.
// And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

//But at the top level of the code, when we’re outside any async function,
// we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.

// new promise(callback) creates a promise in pending state

// promise.all => input : array of promises, output: single promise object which resolves if all resolve else fails with first failure

// things inside .then() are async
// once the control reaches for loop -> compiler stores the 3 instances of arr[i].then.().catch() inside microtask Queue
// which is executed later on
// res[i] = promise.resolve() because you don't know which promise might get resolved first.
 
// for set time out - browser starts a timer and executes events respectively after the timer is over for each.
// resolve or reject returns the promise without further executing the async part of the code

// const  promise1 = new Promise((resolve, reject) => {
//     resolve("heloo the promise is resolved")
// })

// promise1.then((msg) => console.log(msg))

console.timeStamp()
setTimeout(
    () => {
     
        console.log('hello 6000')
         
    }, 6000)
 

setTimeout(
    () => {
        console.log('hello 4999');
      
        setTimeout(() => {
         
            console.log("hello 500")
        },500)


},
     4999.999999)


// const  promise2 = new Promise((resolve, reject) => {
//     reject("promise2 reject")
// })

// const  promise3 = new Promise((resolve, reject) => {
//     resolve("promise3 resolve")
// })

// function promiseAll(arr){
//     return new Promise((resolve, reject) => {
//         let res = []
//         let cnt = 0
//         for(let i = 0; i < arr.length; i ++){
//             arr[i].then((msg) => {
//                 res[i] = msg
//                 cnt += 1
//                 console.log(cnt)
//                 if(cnt == arr.length){
//                     resolve(res)
//                }
//             }).catch(msg => {
//                 reject(msg)
//             })
//         }
//         console.log('here sync')
//     })
// }

// console.log(promiseAll([promise1,promise2,promise3]).then((msg) => console.log(msg).catch(msg => console.log(msg))))

// console.log(Promise.resolve("hello"))   //already generates a resolved promise
// console.log(promise1.then(res =>console.log(res)))  //generates a promise in pending -> resolved


// make sure you add resolve only once : refer chatgpt
// const promises = [Promise.resolve(123),
//     Promise.reject({456:"abc"}),
//     Promise.reject({789:"abc"}),
//     Promise.resolve(456),]
//    function promiseAll(arr){
//        return new Promise((resolve, reject) => {
//        const result =[]
       
       
//           for(let i =0; i< arr.length;  i++){
//            arr[i].then(res => {result.push(res) 
//                console.log(result,'here')
//                 resolve(result)     
//            }).catch(res => 
//                {
//                    console.log(res,"fail")      
//                    reject(res)           
//                })
            
//             }
//        }) 
//    }
//    promiseAll(promises).then(
//        res => 
//        console.log(res,'hi')).catch(res =>
//             console.log(res,"failed here"))