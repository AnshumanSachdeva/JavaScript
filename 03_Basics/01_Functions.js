/*  Functions are reusable blocks of code that perform a specific task.
    They can take inputs, called parameters, and can return outputs.
    Functions help in organizing code, making it more modular and easier to maintain.

    Syntax => 
    function functionName(parameter1, parameter2) {
        // code to be executed
    }
    functionName(argument1, argument2); // calling the function
    functionName // function reference
*/

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2); // 15 // This will print the sum of number1 and number2 to the console
//     // return number1 + number2; // Uncommenting this line will return the sum of number1 and number2
//     // If the return statement is not used, the function will return undefined by default
// }

// const result = addTwoNumbers(5, 10); // 15 // calling the function with arguments 5 and 10
// console.log("Result: ", result); // undefined // The function does not return a value, so result is undefined

// Function with return statement
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result; // This will return the sum of number1 and number2

    return number1 + number2; // This will return the sum of number1 and number2
}

result = addTwoNumbers(5, 10); // 15 // calling the function with arguments 5 and 10

function loginUserMessage(username){
    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Anshuman")); // "Anshuman just logged in" // calling the function with argument "Anshuman"
console.log(loginUserMessage()); // "undefined just logged in" // calling the function without argument, username will be undefined

// Imagine ecommerce shopping acrt situation jismein user sammaan add krte jata hai and humko price add krke total price dikhani hoti hai.Isemein humko nhi pta
// ki kitne parameters aayenge toh uske  liye humarte pass rest operator hai(rest operator => ...) (... ko rest operator bhi bolte hai and spread bhi , depending upon use)

function calculateCartPrice(...num1) {
    return num1;

}
console.log(calculateCartPrice(200, 400 ,500, 2000))    // [200, 400, 500, 2000] // array bnega

// ********************************************Passing Object in function****************************************************

const user = {
    username: "Anshuman",
    price: 2000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)
}
handleObject(user) // we can also pass object directly as shown below
handleObject({
    username: "Sam",
    price: 1500
})

//*************************************************Passing Arrays to Functions**************************************************

const myNewArray = [200, 300, 100, 600]

function returnSecValue(getArray){
    return getArray[2]
}
console.log(returnSecValue(myNewArray)) // we can also pass array directly as shown below
console.log(returnSecValue([200, 500, 1000, 800]))