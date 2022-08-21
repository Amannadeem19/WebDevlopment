

// CRUD 
// add value at the end of an array
// push() returns new length

// const arr = [2,231,42231,41];

// // const length = arr.push(76);
// const length = arr.push(76, 86, 90); //multiple values


// console.log(arr);
// console.log(length);



// unshift method -  add element at the start of an array 
// same property as push

const arr = [2,231,42231,41];

// const length = arr.push(76);
const length = arr.unshift(76, 86, 90); //multiple values


console.log(arr);
console.log(length);



// agr niklna ha tw pop function
// arr.pop() remove element at the end 

// shift() method remove element from the beginning 



// splice method - update element , delete any element from an array, return value of splice
// returns the deleted element of an array 
const month = ['jan', 'feb', 'march', 'april'];

// add elements at the end using splice method 

// const newmonth = month.splice(month.length, 0, "may");
// console.log(month);


// update element-------------------------- 

// month.splice(1,1, 'Feb'); // (position, count, changevalue);

// console.log(month);

// const index = month.indexOf('april');
// if(index != -1)
// {
//     month.splice(index,1, 'May');
//     console.log(month);

// }
// else{
//     console.log("element not found");
// }
// delete any month -------------------

const index = month.indexOf('jan');
if(index != -1)
{
 const deletedmonth =    month.splice(index,1);
    console.log("after deleteing the new months are : " + month);
    console.log("the deleted month is: " + deletedmonth);

}
else{
    console.log("element not found");
}