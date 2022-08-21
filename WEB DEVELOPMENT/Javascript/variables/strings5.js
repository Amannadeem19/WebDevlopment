// extracting string characters 

// charAt()
// charCodeAt()
// property access [ ]

// charAt()

let val = "aman nadeeem";
console.log(val.charAt(0));

// charCodeAt return unicode
console.log(val.charCodeAt(0));

// property access 

console.log(val[3]); // n

// more methods 
console.log(val.toUpperCase());
console.log(val.toLowerCase());

// concat

console.log(val.concat(" ", "Ilyas"));


// trim method removes whotespaces from bothside of a stirng 

let val2 = "               muhammad aman                     ";
console.log(val2.trim());

// convert string to array 

// split method 

let val3 = "muhammad aman";
console.log(val3.split(" "));

let val4 = "a,b,c,d";
console.log(val4.split(","));