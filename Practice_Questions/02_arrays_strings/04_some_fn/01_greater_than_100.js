// check if a no is greater or equal to 100 or not
const greaterThanHundred = () => {
    let arr = [10,44,198,20]
    let ans = arr.some(num => num>=100)
    return ans
}
console.log(greaterThanHundred());
