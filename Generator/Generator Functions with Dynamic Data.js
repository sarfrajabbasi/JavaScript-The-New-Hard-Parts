// Once we start thinking of our data as flows(where we can pick of an element one-by-one)we can rethink how we produce those flows-JS now lets us produce the flows using a function.

function *createFlow(){
    yield 4
    yield 5
    yield 6
    // yield is a super powerful keyword just like a light return,that exits out of the function,but it's suspending the execution context(pause).not ending it.(essentially a return statment).

// grab the 4 and  yield it out as the output of our returnNextElement.next() call.which stimulated createFlow to call.it hit yield satatment inside that 4 is gonna be not our output of createFlow,createFlow's never gonna give output again directly.

// it's only that returnNextElement took.next,took to us here(in createFlow execution) and yield result is in outptut of that statement we just called returnNextElement.next().
// we can dynamically control what our flow of data comprises.
// take  a pause after return value,(hold execution context here).
}

const returnNextElement =createFlow();
const element1 =returnNextElement.next();//4

// retrunNextElement is assign to element1.
// and now we are gonna call the method on this return next element object,the next method.

// here what it's gonna do is it's going to execute(or begin execution), it's gonna  open the execution context of createFlow().

// this functon(next) on the object that got returned out of create flow has an intimate bond to where it was born at createFlow().

// that when we call(next) the next,it's gonna start initiate calling createFlow,the function from which it was born.it's gonna start calling it(createFlow).

// jab hum.next()call krte h toh ye createFlow ko execute krta ha/calling that function.

const element2 =returnNextElement.next();//5
/*---we come back out to our global execution context where we hit the declaration of element2 = the output of returnNextElement.next().but we have total output  the output of returnNextElement.next() is not gonna be the conventional sense ,it's gonna take us back createFLow whatever yield's next is gonna be outptu of returnNextEelement.next()
*/


// What do we hope returnNextElement.next() will return?but how?

// we hoping the output return element is an object with a method called next().

// that when i call that it's gonna give me my first element in my flow of data 4 and next time it's gonna be 5,then it's gonna be 6.

// how we gonna get that?

// createFlow does not go inside create flow's execution context.instead,it return out special generator object with a next function on it

// that when called,is gonna do somthing fascinating that's been stored and return next element.

// retrun next element has a next method on it.it's the output of running create flow.
  
// -----------------------------


/*--so we now produce our flow using function(generator function).that allows us to do dynamically set what data flows out to us when we return on the tap and give ouerselve next element.we can  dynamically set that with code even set it from outside(coz we can sort of return back and get the execution context with new data) to determine what the next result of our flow of data's gonna be the next element form our flows.
----get complete control over what the next element in our flow is gonna be unlike basline array,that was set,we can't control that
(can't determine what later element whould be).it's the return value of an invocation.
*/

// this allows us to dynamically set what data flows to us(when we run returnNextElement's function)---

function *createFLow2(){
    // what evere we pass in as input,that take us back in CreateFlow is going to be the ealuated result of this last-right-hand side work,gonna be our evalutaed result statement here.
    // gonna allow us to pass data back into out execution context.
    const num =10;
    const newNum = yield num;//throwout value and pause function.//and undefined after
    yield 5 + newNum
    yield 6
}

const returnNextElement1 = createFLow2();
const element3 = returnNextElement1.next();//10
const element4 = returnNextElement1.next(2);//7


