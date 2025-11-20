// const user = {
//     usrename: 'anshuman',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function () {
//         // console.log(`Username: ${username}`) // nhi chalega error aayega qki node ko kya pta kis username ki bat ho rhi hai isliye this keyword use krenge
//         console.log(`Username: ${this.username}`);
//         console.log(this)   // pura object print ho jayega
//     }
// }
// console.log(user.username)
// console.log(getUserDetails());
// console.log(this);  // empty paranthesis, but browser mein window object milta hai

// but agar mujhe user2 bnana hai toh pura steps repeat krne pdege, isliye constructor functins hote hai

// const promiseOne = new Promise()
// const date  = new Date()    // new keyword ek constructor function hai, yeh sirf allow krta hai ki ek hi object literal se multiple instances bna skte hai, yeh basically ek naya execution context bnane k kaam ata hai, and isiko constructor fn bolte hai

function User(username, loginCount, isLoggedIn){
    this.username = username;   //left side vala username variable hai and right wala hum pass krke de rhe hai
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;        // yeh likho nhi likho, farak nhi padta implicitely ho jayega
}

// const userOne = new User("abcd", 12, true)  // new use nhi kiya toh bahut sare cheeze aayegi
// console.log(userOne);

// const userTwo = new User("chai aur code", 11,false)
// console.log(userOne);   // values overwrite ho jayegi, isliye bar bar new keyword use krna hai
// console.log(userTwo);

/*
1. new object bnega
2. constructor fn call hoga new keyword ki vjh se
3. this keyword usmein inject ho jate hai
4. bs fir mil jata hai sab */

console.log(this.constructor);