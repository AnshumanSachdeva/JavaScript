/* two type se object bna skte hai , ek hai constructor ki tarah , ek hai literal ki tarah . 
     constructor se jo bnta hai usko singleton bolte hai . singleton ka matlab hai ki ek hi object bna skte hai us class ka
    . literal se jo bnta hai usko object literal bolte hai . object literal se multiple objects bna skte hai .*/
//Object.create; // This is a built-in method to create objects in JavaScript

const mySym = Symbol("mySymbol"); // Creating a symbol
console.log(mySym); // Symbol(mySymbol) // Symbols are unique and immutable data types in JavaScript
const jsUser = {
    name:"Anshuman",           // background mein name as a key and "Anshuman" as a value store ho raha hai and name as a string kam krega 
    age: 25,
    mySym: "key1", // This is a key-value pair where mySym is the key and "key1" is the value but yeh symbol ki trh use nhi ho rha
    [mySym]: "key1", // This is how you use a symbol as a key       
    "email": "anshuman@example.com",
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}
// Accessing object properties
console.log(jsUser); // { name: 'Anshuman', age: 25, email: 'anshuman@example.com', location: 'India', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Tuesday', 'Wednesday' ] }
console.log(jsUser.name); // Anshuman // Accessing the name property
console.log(jsUser["email"]); //
console.log(jsUser.mySym); // key1 // Accessing the mySym property using bracket notation
console.log(typeof jsUser.mySym); // string

console.log(jsUser[mySym]);             // correct syntax for object
console.log(typeof jsUser[mySym]);  

// overwriting and freezing object
jsUser.name = "Anshuman Kumar"; // Overwriting the name property
// Object.freeze(jsUser); // Freezing the object to prevent further modifications
jsUser.name = "Anshuman Kumar Singh"; // This will not change the name property because the object is frozen
console.log(jsUser.name); // Anshuman Kumar // The name property remains unchanged

jsUser.greetings = function() { 
    console.log("Hello, ");
}

console.log(jsUser.greetings()); // [Function: greetings] // Accessing the greetings function

jsUser.greetings = function() { 
    console.log(`Hello , ${this.name}`);
}