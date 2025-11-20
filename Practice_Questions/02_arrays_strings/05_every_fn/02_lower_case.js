// check if all string is in lowercase
let lowercase = () => {
    let arr = ['Hello', 'world']
    let ans = arr.every( (str) => {
        return str === str.toLowerCase()
    })
    return ans;
}
console.log(lowercase());
