// let const -> block Scope same working but const will behave like a constant
// var -> function scope 

// for var --->


// function get()
// {
//     var firstName = "aman";
//     console.log("outer " + firstName);

//     if(true)
//     {
//         var lastName = "nadeem";
//         console.log("inner " + lastName);
//         console.log("inner " + firstName);

//     }
//     console.log("outer " + lastName);

// }
// get();

// for let and const 
function get()
{ 
    // firstname scope will be from 
    let firstName = "aman";
    console.log("outer " + firstName);

    if(true)
    { 
        let lastName = "nadeem"; // scope will be only in this block
        console.log("inner " + lastName);
        console.log("inner " + firstName);

    }
    console.log("outer " + lastName); // not accessible lastName , is not defined
// ends here 
} 
get();