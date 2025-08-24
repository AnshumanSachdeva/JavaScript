const user = {
    username: "Anshuman",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    } 

}   // iss scope mein jitne b variable hai unko access krne k liye this keyword use kiya

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// yaha pr sam us scope mein nhi hai but fir b print hoga kyu? => qki humne this keyword uss scpe mein use kiya hai
// jo kehta hai ki uss scope mein jo bhi current context hai , us scurrent context k andar jo b user ki value hai usko print karo
// this humesha current context ki baat krta hai

console.log(this)   // node environment mein yeh empty paranthesis {} aayega and browser mein aayega window 
// qki node mein koi global object nhi hai isliye {} ata hai and browser mein window ek global object hai


// function one(){
//     let username = "Anshuman"
//     console.log(this)   // bahut sari values aayegi
//     console.log(this.username)  //undefined 
// }
// one();


// const one = function() {
//     let username = "Anshuman"
//      console.log(this)   // bahut sari values aayegi
//      console.log(this.username)  //undefined 
// }
// one();


// +++++++++++++++++++++++++++++++++++++++++++++++++++Arrow function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const one = () => {
//     let username = "Anshuman"
//     console.log(this)   // empty paranthesis {}
//     console.log(this.username)  //undefined 
// }

// one()


/* basic syntax for arrow function =>

    (parameters) => {   // we can save it to variables as well
        
        statements
    } */

// const addTwo = (num1, num2) => {

//     return num1 + num2                       // explicit return
// } 
// console.log(addTwo(3, 4))

// ****************************************************Implicit return****************************************************************

// implicit return mein return keyword use nhi krte , iske liye b alag syntax hai , ismein {} use nhi krte


// const addTwo = (num1, num2) => (num1 + num2)                // implicit return

// console.log(addTwo(3, 4))



// for passing object to arrow function implicitly , curly braces should be wrapped in paranthesis

// const addTwo = (num1, num2) => {username: "Anshuman"}
// console.log(addTwo(3.4))            // aise nhi chalega // undefined aeyga

const addTwo = (num1, num2) => ({username: "Anshuman"})

console.log(addTwo(3.4))        // aise chalega // acha ab ek question aa skta hai ki function name se toh 2 no. add hone chaiye but output mein toh
                // name aa rha hai ???? Toh nam isliye aa rha hai qki humne return hi name ko kiya hai 😂