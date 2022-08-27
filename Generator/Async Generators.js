function doWhenDataReceived (value){
    returnNextElement.next(value)//going backto createFlow
    }
    function* createFlow(){
    const data = yield fetch('http://twitter.com/will/tweets/1')
    console.log(data)
    }
    const returnNextElement = createFlow()
    const futureData = returnNextElement.next()
    futureData.value.then(doWhenDataReceived)


    // now we are auto trigger not function here(onfulfilment) instead the next block of code here(in execution context)/straight in execution context,continuing our code inside the function,using a new way of defining our generated functions,called async await.