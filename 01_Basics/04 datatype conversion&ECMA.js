//CONVERSION OF ONE DATATYPE TO ANOTHER
/* SYNTAX =>
    let new_variable = New_Datatype(Old_variable)   
    NOTE : New variable ka PAHLA WORD HAMESHA CAPITAL*/

// CONVERSION OF DATATYPES TO NUMBER

let str = "123"; // string datatype
let num = Number(str); // string ko number mein convert kiya
console.log(num,typeof num); // 123 number

//But agar string mein koi number k sath string b hai to vo NaN(NOT A NUMBER) return karega
let str2 = "123abc"; // string datatype
let num2 = Number(str2); // string ko number mein convert kiya
console.log(num2,typeof num2); // NaN number

//Agar string mein koi number nahi hai to bhi NaN return karega
let str3 = "abc"; // string datatype
let num3 = Number(str3); // string ko number mein convert kiya
console.log(num3,typeof num3); // NaN number

let str4 = "123.45"; // string datatype with decimal
let num4 = Number(str4); // string ko number mein convert kiya
console.log(num4,typeof num4); // 123.45 number

let bool = true; // boolean datatype
let num5 = Number(bool); // boolean ko number mein convert kiya
console.log(num5,typeof num5); // 1 number // true ko 1 mein convert kiya and false ko 0 mein convert kiya

let nullValue = null; // null datatype
let num6 = Number(nullValue); // null ko number mein convert kiya
console.log(num6,typeof num6); // 0 number 

let undefinedValue; // undefined datatype
let num7 = Number(undefinedValue); // undefined ko number mein convert kiya
console.log(num7,typeof num7); // NaN number // undefined ko NaN mein convert kiya


/* Conversion to boolean
    1 => true & 0=> false
    ""(empty string) => false
    "gkye"(string with any char) => true*/