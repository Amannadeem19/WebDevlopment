// extracting part of strings 

// three methods 
// slice(start, end); // returns the extracted part
// substring(start,end) ;
// subtstr(start, length);

// let str = "muhammad aman nadeem";

// // let get = str.slice(0, 7); // muhamma
// let get = str.slice(9, -3); // aman nad


// console.log(get);


// challenge time 

// displayy only 280 Characters 

// let tweet = "aoidjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjbdkdd cdahdk khdwk,adkdhadk,kk  odhohd hdkab hello abk  aman d a fmbdj  nadeeem aoidjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjbdkdd cdahdk khdwk,adkdhadk,kk  odhohd hdkab hello abk  aman d a fmbdj heheheh nadeeem  aoidjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjbdkdd cdahdk khdwk,adkdhadk,kk  odhohd hdkab hello abk  aman d a fmbdj  nadeeem aoidjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjbdkdd cdahdk khdwk,adkdhadk,kk  odhohd hdkab hello abk  aman d a fmbdj  nadeeem ";

// let getspecificRange = tweet.slice(0,280);

// console.log(getspecificRange);
// console.log(getspecificRange.length);


// substring method 
// cannot accept negative indexes if give negative it will start from 0th position

let str = "hello aaman";
let get = str.substring(6, -2); // hello
console.log(get);


// substr(start, length) 
// negative index will not give you anything
// all things will same as slice
