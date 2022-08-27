// what happen when JS executes(runs)my code?

// This is  not  the same as defining a function.

const num = 3;

function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}
// const name = "Will";
const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

// As soon as we start running out code,we create a global execution context.

// ---> Thread of execution(parsing and executing the code line after line)

// ---> Live memory of varaibles with data(known as a global variable environment)


// Running/calling/invoking a function:---->

// When you execute a function you create a new execution context comprising:-

// 1.) The thread of execution (we go through the code in the function line by line).

// 2.) A local memory (variable environment)where anything defined in the function is stored.

