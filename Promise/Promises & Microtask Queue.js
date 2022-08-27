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
