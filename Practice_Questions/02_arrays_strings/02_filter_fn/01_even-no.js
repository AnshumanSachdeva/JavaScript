// to return even no only
const even = () => {
    let arr = [1,2,3,4,5,6]
    const ans = arr.filter(num => num%2 == 0)
    return ans;
}
console.log(even());