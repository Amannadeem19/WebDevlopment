var arr = ['aman', 'ahmed', 'ali'];

// for(let elements in arr)
// {
//     console.log(arr[elements]);
// }

// for(let elements in arr)
// {
//     console.log(elements); // index print
// }

// for(let elements of arr)
// {
//     console.log(elements); // values
// }

// forEach method 
arr.forEach(function(element, index, array){
    console.log(element + "index : " + index + array);
}); 
// break use nh karskte

// fatarrow function 
arr.forEach((element, index, array) => {

    console.log(element + "index : " + index + array);
    

});