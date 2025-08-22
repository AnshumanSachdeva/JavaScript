/*javascript mein ek variable ko declare karne ke liye var, let, ya const ka istemal kiya jata hai
const ka istemal tab hota hai jab aap variable ki value ko badalna nahi chahte
let ka istemal tab hota hai jab aap variable ki value ko badalna chahte hain
var ka istemal tab hota hai jab aapko purani tarike se variable declare karna ho
let aur const block scope mein kaam karte hain, jabki var function scope mein kaam karta hai
let aur const ka istemal karna behtar hota hai kyunki ye block scope mein kaam karte hain
var ka istemal karna avoid karna chahiye kyunki ye function scope mein kaam karta hai

DONOT USE var, use let or const instead*/

let name = "Anshuman Sachdeva"; // let ka istemal variable ko declare karne ke liye
var city = "Delhi"; // var ka istemal variable ko declare karne ke liye, lekin ye purani tarike se hai
const age = 25; // const ka istemal variable ko declare karne ke liye
mail = "anshuman.google"// mail variable ko declare kiya gaya hai, lekin ye var ya let ya const se nahi kiya gaya hai ye variable global scope mein hai, lekin ye behtar nahi hai kyunki ye accidentally overwrite ho sakta hai

/* ab inko change karne ka try karte hai

 yr ab change krne k bahut tarike hai ek toh bar bar console.log() likh kar , ya fir table ki form mein( ek tarike se jaise array banate hai cpp mein bs yaha pr table banta hai ) console.table() use krke*/

 console.table([name, city, age, mail]); // console.table() ka istemal table ki tarah output dikhane ke liye

 // ab inko change karte hai
name = "Anshuman"; // let ka istemal variable ki value ko change karne ke liye
city = "Mumbai"; // var ka istemal variable ki value ko change karne ke liye
//age = 30; // ye error dega kyunki const ka istemal variable ki value ko change nahi karne ke liye kiya gaya hai ISLIYE ISKO COMENTS MEIN RAKHA HAI
mail = "abc.google.com"; // ye change kr dega and koi error nhi dega but yeh bad tarika hai

console.log("After changing values:");
console.log("Name:", name);
console.log("City:", city); 
console.log("Mail:", mail); // ye change kr dega and koi error nhi dega but yeh bad tarika hai
//console.log("Age:", age); // ye error dega kyunki const ka istemal variable ki value ko change nahi karne ke liye kiya gaya hai ISLIYE ISKO COMENTS MEIN RAKHA HAI
