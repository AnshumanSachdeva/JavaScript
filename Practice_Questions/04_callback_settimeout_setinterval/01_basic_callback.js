// Create a function `greet(name, callback)`
// It should print: "Hello Anshuman"
// Then run the callback which prints: "Have a nice day!"

// Expected Output:
// Hello Anshuman
// Have a nice day!

//Callback ek function hota hai jo kisi aur function ke andar argument ke roop mein pass kiya jaata hai, aur later us function ke andar call kiya jaata hai.

//A callback is a function passed as an argument to another function, which is then invoked ("called back") inside the outer function to complete some kind of action.

// Callback kyun use karte hain?
    //2. Async kaam ke liye — jab koi kaam turant complete nahi hota (jaise file read, API call), toh callback se bata sakte ho ki kaam ho gaya.

    //1. Modular code — ek function ke baad kya hona chahiye, wo hum callback se decide kar sakte hain.

// Real Life Example:
//     Tu Swiggy se order karta hai.

//         Tu ek function hai: placeOrder()

//         Tera callback hai: deliverFood()

//         Jab order complete ho jaata hai, tabhi callback chalta hai → khaana deliver hota hai.

function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}
function sayNiceDay(){
    console.log(`Have a nice day`);
}
greet('Anshuman',sayNiceDay)