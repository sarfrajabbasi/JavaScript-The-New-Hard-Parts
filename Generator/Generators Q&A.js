/*returnNextElement is a special object (a generator object) that when its next method is run starts (or continues) running createFlow
until it hits yield and returns out the value being ‘yielded’*/

function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next; //10
const element2 = returnNextElement.next(2); //7

// we end up with a 'stream;/flow fo values that we can get one-by-one by running returnNextElement.next()

/*And most importantly, for the first time we get to pause (‘suspend’) a function being run and
then return to it by calling returnNextElement.next().----

In asynchronous javascript we want to --->

1. Initiate a task that takes a long time (e.g. requesting data from
the server).

2. Move on to more synchronous regular code in the meantime.

3. Run some functionality once the requested data has come back
What if we were to yield out of the function at the moment of
sending off the long-time task and return to the function only
when the task is complete. */