/*We can use the ability to pause createFlow’s
running and then restart it only when our data
returns*/

function doWhenDataReceived(value){
    returnNextElement.next(value)
}

function* createFlow(){
    const data =yield fetch('http://twitter.com/will/twets/1');
    console.log(data)
};

const returnNextElement = createFlow();
const futureData = returnNextElement.next()
futureData.value.then(doWhenDataReceived);

/*We get to control when we return back to createFlow and continue
executing - by setting up the trigger to do so
(returnNextElement.next()) to be run by our function that
was triggered by the promise resolution (when the value returned
from twitter)*/