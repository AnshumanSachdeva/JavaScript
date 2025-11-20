function multiplyBY5(num) {
    return num * 5;
}
multiplyBY5.power = 2;

console.log(multiplyBY5(5));
console.log(multiplyBY5.power);
console.log((multiplyBY5.prototype));   //yeh sirf methods hi nhi, kush properties b deta hai and multiplyBy5 wale fn ki bhi toh kush property hogi, agar hum iss fn mein b this use krte toh bhi toh hum uska reference lete, toh us case k liye uski value hoti hai ,and unka reference {} mein store hota hai

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
    
}

// const chai = createUser('chai', 25)
// const tea = createUser('tea', 250)
// ab create user ko kaise pta chalega ki 25 ko incri krna hai ya 250 ko, bcz uske ps koi context nhi hai, ki kisne bulaya hai, toh yeh context samjhane k liye this use krte hai. this matlab jisne b bulaya hai uska value bda do.
//this matlab jis😁

// chai.printMe()
// abhi bhi nhi chalega ,  but jab hum memory mein jakr check krenge toh dikhega ki sabhi values usmein aai hai but fir b nhi chala🤔, vo isliye nhi chala qki humne jab createUser wale fn ko chai or tea mein dala toh humne usko btaya hi nhi ki uske aur b functions hai(incriment & printMe). Yeh b btana padta hai isliye new keyword use krte hai

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/