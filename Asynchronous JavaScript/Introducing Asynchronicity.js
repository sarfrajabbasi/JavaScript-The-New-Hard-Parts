// Solution-1:-----------(not good solution)

// this solution is untenable,but it is neverthless going to be fairly intutive.but completely untenable.

function display(data){
    console.log(data);
}

const dataFromAPI = fetchAndWait("http://twitter.com/will/1");
// parent's tell-->decode function(it's command)unfinised work.
// So be really clear with yourself is no way are we assigned.dataFromAPI has zero interest in fetchAndWait.only interest is in whatever gets returned from fetchAndWait.
// ...user can do nothing here.
// ...could be 300ms could be hold a second.
// they're just clicking and getting nothing.

display(dataFromAPI);
// in that time we don't allowed  to move on and run any further JS code.absolutely not,not allowed.(coz JS is synchronous).
console.log("me later"); 