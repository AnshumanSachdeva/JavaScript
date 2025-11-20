// to print names with equal or more than 5 characters
const names = () => {
    let arr = ["Ansh", "Rahul", "Rohan", "Sam"]
    let ans = arr.filter((str) => {
        
        return str.length>=5;
    })
    return ans;
}
console.log(names());
