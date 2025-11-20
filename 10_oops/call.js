// function setUserName (username) {
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUserName(username)
//     this.email = email
//     this.password = password  
// }

// const chai = new createUser('chai', 'chai@fb.com', '123')

// console.log(chai);

// username toh aa hi nhi rha, setUserName call ho hi nhi rha hai, iska sirf reference gya hai, isko xall krne k liye kush mehtods hote hai jisse hum explicitely jakr kr skte hai , like .call

// function setUserName (username) {
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUserName.call(username)
//     this.email = email
//     this.password = password  
// }

// const chai = new createUser('chai', 'chai@fb.com', '123')

// console.log(chai);

// abhi b nhi aaya but call ho gya hai, is situation mein call ho rha hai and vo call stack se nikal gya, and uske andar k variables delete ho jayenge , toh humko reference ko hold krke rakhna pdega, isliye call mein ek aur parameter pass krna pdega jo ki hoga this keyword

function setUserName (username) {
    this.username = username;
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password  
}

const chai = new createUser('chai', 'chai@fb.com', '123')

console.log(chai);
// ab chal gya , ismein kya hua ki jo humne this parameter mein bheja tha vo use ho raha hai naki setUserName wale ka this , jiski vjh se agr setUserName k variables delete b ho jaye, toh  kush nhi hoga qki parameter wale this mein sab ho jayega