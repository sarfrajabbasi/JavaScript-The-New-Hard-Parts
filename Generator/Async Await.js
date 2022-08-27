/*Async/await simplifies all this and finally fixes the inversion of control problem of callbacks-----*/

async function createFlow(){
    console.log("Me first");
    const data =await fetch('https://twitter.com/will.tweets/1')
    console.log(data);
}

createFlow();

console.log("Me second");

/*No need for a triggered function on the promise resolution, instead we auto trigger the resumption of the createFlow execution (this functionality is still added to the microtask queue though)*/