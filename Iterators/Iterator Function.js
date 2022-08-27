
// -------The bond---------

// — When the function inner is defined, it gets a bond to the
// surrounding Local Memory in which it has been defined.

// — When we return out inner, that surrounding live data is returned out too - attached on the ‘back’ of the function definition itself (which we now give a new global label returnNextElement).

// — When we call returnNextElement and don’t find  array or i in the immediate execution context, we lookinto the function definition’s ‘backpack’ of persistent live data.

// — The ‘backpack’ is officially known as the C.O.V.E.(closed over varibale enviroment) or ‘closure’.

//how is this bond to the backpack actually stored on the function?
// ANS:---It's stored in a hidden property.we can't access it meaningfully [[scopes]].and that will have stored in it,so it's on this hidden property scope.

//  it's rules about what data is available to you is about where the function is born,where it was defined,is known as a lexically-scoped language.

// That means a language that says,where you defined me is what determines, the positioning of my definition inside another function,is what determines what data i have available to me when i'm eventually run,eventually called wherever you end up calling me.

// coz i attached the data from around me when i was born,to me that's the first place i look,besides the function execution context itself,that is known as a lexically scoped language,as opposed to a dynamically.it's called a statically scoped language,lexically or statically language.

// so we can call this backpack of data,we can call it a persistent lexical scope([[scope]])bond or reference data.
// P.L.S.R.D:--persistent lexical scope([[scope]])reference data.another ward is put those value in closure.

// by the way,the only way you can get a backpack in a meaningful way is to return the function from where it was born.is to return the function and bring with it the data,that's how you get that persistent data.

// returnNextElement has everything we need all bundled up in it:---

// 1. Our underlying array itself(in the backpack).
// 2. The position we are currently at in our ‘stream’(flow) of elements.(coming out to us in the backpack)
// 3. The ability to return the next element.(when it run)
// This relies completely on the special property of functions in javascript that when they are born inside  other functions and returned - they get a backpack (closure).

// What is the posh name for returnNextElement?

// it's known as iterators.any function that when called gives me out the next element from my flow of data.(my callection of data gives me the next element).when i run it.returning the next element again and again when function called again and agin.that's is known as an iterator function.it gives me one by one.

// in backpack our data is preset,we can't go back and change it.


// So iterators turn our data into ‘streams’ of actual values we can access one after another:---

// Now we have functions that hold our underlying array, the position we’re currently at in the array, and return out the next item in the ‘stream’ of elements from our array when run.

// This lets us have for loops that show us the element itself in the body on each loop(no accessing some from some array the position rather instead actually give us out into the body of our for loop the actual element,couz behind the scenes it's running returnNextElement and returning that individual element and giving it the label.) and more deeply allows us to rethink (our collections,our static lists of data)our arrays as flows of elements (couz most of the time we store a list of data, we don't care about it so much as a static thing,we want to be able to get the elements one by one that's actually what we want to do with it most fo the time)themselves which we can interact with by calling a function that switches that flow on to give us our next element.

// We have truly separated ‘decoupled’ the process of accessing each element from what we want to do to each element.form what we end up wanting to do to our individual elemnts.


function createFunction(array){
    let i =0;
    function inner(){
        const element = array[i];
        i++;
        return element;
    }

    return inner;
}

const returnNextElement = createFunction([4,5,6]);
const element1 = returnNextElement();
const element2 = returnNextElement();