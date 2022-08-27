// Solution 3 - Using two-pronged 'facade' funcctions that both initiate background web browser work and return a placeHolder Object(promise) Immediately in JS.

function display(data){
    console.log(data);
}

const futureData = fetch("http://twitter.com/will/1");

futureData.then(display);//attaches diplay fuctionality 

console.log("Me first");