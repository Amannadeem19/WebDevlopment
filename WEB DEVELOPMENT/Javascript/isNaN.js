

var myPhoneNumber = 930283023;
var myName = "aman";

console.log(isNaN(myPhoneNumber)); // not a number // false means its a number

console.log(isNaN(myName)); // returns true bcz its not a number

console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(Number.isNaN(NaN));  // true

