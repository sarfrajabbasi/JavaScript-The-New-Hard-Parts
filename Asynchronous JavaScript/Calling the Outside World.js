// we're interacting with a world outside of JS now - so we need rules.

// callBack queue is JS engine feature.(first in,first out)queue structures.

// the callback Queue get  processed at the end of event loop iteration(  once you've finsihed all synchronous task.)

// In callBack queue you 're storing this function here, you referencing its position in JS memories,

function printHello(){
    console.log("Hello");
}

function blockFor1Sec(){
    // blocks in the JS thread for 1 second.
}

setTimeout(printHello,0);

blockFor1Sec();

console.log("Me first");



// Problems:-----------

// ---> No problems!

// ---> Our response data is only available in the callBack function-Callback hell.

// ---> Maybe it feels a little odd to think of passing a function into another funtion only for it to run much later.

// Benefits:-----------

// ---> Super expicit once you understand how it works under-the-hood.