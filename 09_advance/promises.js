const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // Db calls, cryptography, network 
    setTimeout(function(){
        console.log("async task is complete")
        resolve()   // iske bina promise consume nhi hoga
    },1000)
})

promiseOne.then(function (){
    console.log("promise consumed")
})   // then ka dirtect connection ha resolve k sath, ismein hume callback milta hai and upr se jo b kam hua hai vo ismein return ho jata hai

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two")
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout( function (){
        resolve({username:'chai', email:"chai@example.com"})
    }, 1000)
    
})
promiseThree.then(function(user) {
    console.log(user)

})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'anshuman', password:'1234'});
        } else {
            reject('ERROR Something went wrong')
        }
    }, 1000)
})

// const username = promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
    
// })
// console.log(username)   // yeh toh nhi chalega qki aise toh nhi hota hai isliye chaining kr skte hai

promiseFour.then((user) =>{
    console.log(user);
    return user.username
    
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("Finally , the promise is either resolve or rejected"))

// finally humesha run hoga hi hoga

// acha yeh zaruri nhi hai ki humesha .then(), .catch() se hi hoga , async await se b ho jata hai

const promiseFive = new Promise( function(resolve, reject) {

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'javascript', password:'1234'});
        } else {
            reject('ERROR js went wrong')
        }
    }, 1000)

})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
    
// }
// consumePromiseFive()

// async error ko handle nhi kr skta , iske liye humko trycatch block krna pdega

async function consumePromiseFive(){
            
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()


// async function getAllUsers () {
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = response.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log("E: ", error)
//    }
// }
// getAllUsers()   // chal nhi raha yr yeh . rsponse.json k liye b time lagta hai isliye ispr b await krna pdega 

// async function getAllUsers () {
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log("E: ", error)
//    }
// }
// getAllUsers() 
// same ko .then() , .catch() mein krte hai

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>  {
    return response
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))



// fetch() wala kaam pahle ho raha hai and baki pahle jo promise banaye hai vo badmein ho rhe hai jabk vo sabse pahle likha tha now the question is why?. Because fetch ki ek special queue banti hai jiska name hai micro task queue, yeh ek priority queue hai(fast queue hai), iska kam sabse pahle hota hai vip jaise