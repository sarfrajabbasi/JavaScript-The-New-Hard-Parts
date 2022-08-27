// why not declare it golbaly?
// ANS:- it's gonna turn out when we return a function from another function we get so much more then just a function,when we call them give us our next element from our flow of data,


// we want to create a function that holds both our array,the position we are currently at in our 'stream' of elements and has the ability to return the next element.

// How the hell is gonna do that?
// cuz functions when they call do not remember their prior invitation,they do not remember data created that was created in their prior running.there 's no memory of previous running. 

// so  can we have a function that when run,somehow remembers its previous running?run before and had a previous element given out?

// it turns  out that as soon as i define my inner function,inside of createFunction,i got a bond to all surrounding live memory(V.E).

//when i return out i brought with it on the back of the function as the function got returned out.(it came all that surrounding live data) and  it get stored in new label globally returnNextElement.attached with surrounding data and store in the memory.it's attached to the back of my function.

// if i don't find array in local memory,then don't go in global immediately,instead i go look at my definition of my function,l see is there a backpack of data.
// backpack have presisting data(not deleted or removed).


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

// how can we access the first element of our list?