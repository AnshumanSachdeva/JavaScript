// Write a checkEven(num) function that returns a Promise:
// Resolve with "Even number" if the number is even.
// Reject with "Odd number" otherwise.

function checkEven(num){
    return new Promise((resolve, reject) => {
        if (num%2!=0) {
            reject("Odd number")
        } else {
            resolve("Even number")
        }
    })
}
checkEven(21)
    .then((ans) =>{
        console.log(ans);
    })
    .catch((err) =>{
        console.log(err);
        
    })