// Iterators:---------

// We regularly have list or collections or data where we want to go through each item and do somthing to each element.

const numbers = [4,5,6];

for(let i = 0;i,numbers.length;i++){
    console.log(numbers[i]);
}

// We're going to discover there's a new beautiful way of thinking about using each element one-by-one.


// Summary:-

// Programs store data and apply functionality to it. But there are two parts to applying functions to collections of data:--

// 1. The process of accessing each element
// 2. What we want to do to each element

// iterators,this new way of thinking about accessing data from collections of data. 

// Iterators automate the accessing of each element - so we can focus on what to do to each element - and make it available to us in a smooth way.

// Imagine if we could create a function that stored numbers and each time we ran the function it would return out an element (the next one) from numbers. NOTE: It’d have to remember which element was next up somehow.

// But this would let us think of our array/list as a ‘stream’/flow of data with our function returning the next element from our ‘stream’ - this makes our code more readable and more functional.

// But it starts with us returning a function from another function.coz all the most beautiful, and elegant things in JS begin with us returning a function for another function.that give a function that's returned out backpack(closure,C.O.V.E)



// Functions can be returned from other functions in JS.

function createNewfunction(){
    function add2(num){
        return num+2;
    }
    return add2;
}
const newFunction = createNewfunction();

const result = newFunction(3);

// How can we run/call add2 now? Outside of createNewFunction?
