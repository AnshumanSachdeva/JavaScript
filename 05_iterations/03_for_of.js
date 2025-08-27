// for of loop => yeh ek array specific loop hai


// for (const element of object) {          element refers to iterators and object means jispr loop lagani hai
// statements
// }



// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);           // no need of writing console.log(arr[num])
// }


// const greetings = "Hello World";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


/* ***********************************Maps*****************************************************/

const map = new Map()       // similar to object & array but difference is inmein koi duplicate value nhi hoti , sabhi unique values hi hoti hai
map.set('IN' , "India")
map.set('USA' , "United States of Anerica")
map.set('Fr' , "France")
map.set('IN' , "India")

// console.log(map);

for (const key of map) {
    console.log(key)         // aise pura print ho jayega jaise normal print kiya tha upar , separate k liye =>
}

for (const [key , value] of map) {
    console.log(key, ':-', value);
}

const myObj = {         
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }                                                // error dega nhi chalega


