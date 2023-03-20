// Asynchronicity: Something that happens outside of a standard linear time.
    // On webpage, may have the images load "asynchronously" to avoid delays in page loading.

    // Javascript is "single threaded" (runs one after another), until we tell it not to with async code.
    // Code is asynchronous if the execution order is not dependent upon the command order.
        // Ex: Doesnt mean rest of website cant go ahead to load while waiting on img to load.

    // setTimeout: Function to be executed after the time expires.
        // In what order will the below fire?
    // console.log('Some callbacks'); // 1st To Fire
    // setTimeout(function() { 
    //     console.log('you'); // 3rd To Fire: after 3 seconds
    // }, 3000);
    // console.log('love'); // 2nd To Fire
        // Some callbacks
        // love
            // 3 seconds
        // you

    // A function that executes asynchronously...
        // 1. Kicks off some external process
        // 2. Registers an event handler for when that process finishes (callback)

// How do we know if a function is asynchronous?
    // Most async operations will have the following callback pattern...:
        // asyncThing(function(err, data) {...})

// Summary:
    // JS is single-threaded but its runtime environment is not
    // A callback executes when its async event finishes
    // Anything you wish to do after the async event completes, MUST happen in the callback.

//**Demo Coding:*/

// console.log('hello');

// setTimeout(function notAnon() {
//     console.log('from setTimeout')
// }, 2000);

// function multiply(a, b) {
//     return a * b;
// }

// let thing = multiply(7, 9);

//**PROMISE CHAINING:*/
// const myResolvedPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Hello');
//     }, 1000);
// });

// const myRejectedPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('Rejected!');
//     }, 1000);
// });

// myResolvedPromise // THIS IS PROMISE CHAINING...
// .then((res) => console.log(res))
// .catch((err) => console.log('myResolved Error', err));
// myRejectedPromise
// .then((res) => console.log(res))
// .catch((err) => console.log('error', err));

// console.log(myResolvedPromise); // is running first before function has had time to complete, so outputs a "Promise"

// Instead of doing above "Promise Chaining", we now do the below "async await" instead...
// or can put as async function getDog () {...} below
const getDog = async () => { // can only use await with async functions...
    try { // 'try' means to make an attempt to complete this code...
        const res = await fetch("https://dog.ceo/api/breeds/image/random"); // before can make 'res' a variable, need to 'await' the fetch call. Is first a "request", and then becomes a "response" after is waited on.
        const data = await res.json(); // now this needs to wait because the parent variable res was waiting. Once is done, can then assign to "data" variable.json is a method that prints out returns nicer.
        console.log(data);
    } catch (error) { // if there are any errors, catch them & console.log them
        console.log(error); // or can use console.error(error) - will print out more details in console regarding the error
    }
};

getDog();

// The above example in "Promise Chaining" below
function getDog2() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}





