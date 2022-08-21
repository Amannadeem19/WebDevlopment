

// filter method 

const array = [10, 20, 30, 13, 18];

const filtered = array.filter((value, index, arr)=>
{
    return value >= 18;


});

console.log(filtered);

// find method 

// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.

let val = 40;
const find1 = [21, 32, 39, 45, 53, 34];
const getvalue = find1.find((value , index, newaryy) =>{

    return value > val;

});
console.log(getvalue);
