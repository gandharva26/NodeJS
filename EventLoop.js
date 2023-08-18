// If you are using another asynchronous function
// which is depending on the first asynchronous function, you should use
// await to wait first one to finish instead of promise chaining.
// If there are multiple asynchronous functions that can be run in parallel, you can use promise

//The Promise.resolve() static method "resolves" a given value to a Promise and returns a promise object in resolved state.

// let p = new Promise((resolve, reject) => console.log('hi'))

//promise.all returns a promise

//Promise.all(promises).then(res => console.log(res)).catch(err => console.log(err))
//resolve- what happens with .then, reject- what happens in .catch

//This is only true if the Promise that is returned resolves immediately - for example, with Promise.resolve. If the Promise returned by fetch resolved immediately, you'd be right, and the Promise 3 would log before the setTimeout's.

//But fetch does not resolve immediately
// - it requires the endpoint to respond first, and that takes some time, so you see the setTimeout log first.
//
//A .then callback only goes into the microtask queue when the Promise resolves/rejects.
// Since the Promise hasn't resolved yet, it hasn't entered any queue;
//the setTimeout callback runs first. Then, some few millisecond later when the request completes,
// the fetch Promise resolves, and then it goes into the microtask queue
// timers are executed in browser, the callback inside .then goes into microtask queue only when promise is resolved.

//  https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

console.log("start");
fetch("http://ccdb.hemiola.com/characters/radicals/")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://openlibrary.org/people/mekBot/books/already-read.json")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log("hello");
}, 200);

setTimeout(() => {
  console.log("after 5000 hello");
}, 5000);

console.log("end");
