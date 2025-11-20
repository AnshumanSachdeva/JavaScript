// check if all nums are positive or not
let positiveCheck = () => {
    let arr = [1,2,3,4,7,6,9]
    let ans = arr.every(num => num>=0)
    return ans;
}
console.log(positiveCheck());
