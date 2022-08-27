// Once we  start  thinking of our data as flows(where we can oick of an element one -by-one)we can rethink how we produce those flows-Js now lets us produce the flows using a function(to set what individual element will be returned next.).

// we 're gonna do it by yielding intermediate returns,(thorw out each of our next elements),here it's gonna directly analogous,
// we're gonna discover it gives us lot of control over what those next values can be.

function *createFlow(){
    yield 4
    yield 5
    yield 6
}

const returnNextElement = createFlow();
const element1 =returnNextElement.next()
const element2 =returnNextElement.next()


// --------------
// JS's built in iterators are actually objects with a next method that when called returns the next element from the 'stream'/flow-so let's restructure slightly.

// we 're gonna create a flow where we call a function each time,get the next element.here we 're doing it with a static,pre-built collection of data,

// JS's build in return next element(iterators they're callled,are actually objects with a next method that when called return our next element from the stream or flow)so we don't call return its element,instead we call the method on it.(so returnNextElements now an object,not a function)

// [[scope]]-->build in JS under the hood feature scope property that's a bond to that surrounding memory.
// next method and that function has backpack of data,when the object got put out with the function on it,it blew with it,all that surrounding data array = [4,5,6],i=0.it put out all,even it's no longer just a function ,it's a functional object,it still gets all that same thing happening.Objects don't,it's only functions,coz when the function gets called its gonna have access to that backpack of data.it's the o nly way it gets access to data.



function createFlow2(array){
    let i=0;
    const inner= {
        next:function(){
            const element = array[i];
            i++
            return element;
        }
    }
    return inner;
}

const returnNextElement2 = createFlow([4,5,6]);
const element3 = returnNextElement2.next();
const element4 = returnNextElement2.next();
// by the way,built in iterators actually produce the element that get returned out,not as number ,but instead produce out an object with a value which is the number we care about,abd another property called done.which is false until we've called returnNextElement.next. 

// and the built in iterators actually produce the next element in the format:{value:4}