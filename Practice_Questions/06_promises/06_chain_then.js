// Use .then() chaining to:
// Square a number.

// Then add 10.

// Then divide by 2.
// (All steps in separate .then() blocks)

function number(num){
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject("Input must be a number")
        } else {
            resolve(num)
        }
    })
}
number(12)
    .then((val1) => {
        let square = val1 * val1
        console.log(square);
        return square
    })
    .then((val2) => {
        let add = val2 + 10
        console.log(add);
        return add
    })
    .then((val3) => {
        let ans = val3/2;
        console.log(ans);
        
    })
    .catch((error) => {
        console.log(error);
        
    })  