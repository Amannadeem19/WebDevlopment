// map() method 
// return new array 
// going through every value and get the results 

// like: 
// let array = [1,345,131,4,43];

// let newarray = array.map((curEle, index, arr)=>{
//     return curEle > 40;
// });
// console.log("old array "  + array);
// console.log("Get new array " + newarray); // results in true false format //


// // one more example 

// let  array2 = [43,432,113,41];
// let newarray2 = array2.map((element, Index, arr1)=>{
//     return `the index no ${Index} and the value is : ${element} and array  is : ${arr1}`;
// });
// console.log("Get new array " + newarray2);


// the forEach vs map 
// map returns a new array while forEach dont 
// map is chainable --> let array2 = array1.map(()=>{
// }).reduce().sort(); you can use these more properties to new array 

// but forEach is not a chainable 

// example:
// Q: mulitply each value with 2 and get the new array having value greater than 10
let array = [2,4,6,8,10];

let newarray = array.map((element)=> element*2 ).filter((element)=> element > 10).reduce((accumulator, element, index, arr)=> accumulator += element);
console.log(newarray);


// reduce method 
// flatten 2d or 3d array into a single array 
// or used inorder to get a single output from an array like sum of value which are greater than 10

// four arguments :
// accumulator
// currElement
// index
// source array

let array3  = [4,5,6];
let sum = array3.reduce((accumulator, element, index, arr)=>{
    return accumulator += element;

}, 7); //initial_value = ;

console.log(sum);


// flattend the array 

let list = [
        ['aman', 'nadeem'],
        ['ahmed', 'ali'],
        ['shahmir' ,['ali', 'khan']]

            ];

let newlist = list.reduce((accum, ele) =>
{
    return accum.concat(ele);
});
console.log(newlist);