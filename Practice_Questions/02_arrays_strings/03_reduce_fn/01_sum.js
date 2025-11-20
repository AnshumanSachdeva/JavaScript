const totalSum = () => {
    let arr = [1,2,3,4,5]
    let ans = arr.reduce( (acc,curr) => acc+curr,0) // acc = starting value = 0
    return ans;
}
console.log(totalSum());