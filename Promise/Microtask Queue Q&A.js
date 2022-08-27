// But we need to khnow how our promise-defferred functionality gets back into JS to be run.


function display(data){
    console.log(data);
};
function PrintHello(){
    console.log("Hello");
};

function blockFor300ms(){
    /* blocks Js thread for 300ms with long for loop */
}

setTimeout(PrintHello,0);

const futureData = fetch('http://twitter.com/will/tweets/1');
futureData.then(display);

blockFor300ms()

// Which will run first?

console.log("Me first");


// we need a way of queuing up all this deferred functionality.

// ----------------

// Problems:-------------

// — 99% of developers have no idea how
// they’re working under the hood
// — Debugging becomes super-hard


// Benefits:---------------

// — Cleaner readable style with pseudo-
// synchronous style code
// — Nice error handling process

// -----------------------
// Promises, Web APIs, the Callback &
// Microtask Queues and Event loop allow us to
// defer our actions until the ‘work’ (an API
// request, timer etc) is completed and
// continue running our code line by line in the
// meantime
// Asynchronous JavaScript
// is the backbone of the
// modern web - letting us
// build fast ‘non-blocking’