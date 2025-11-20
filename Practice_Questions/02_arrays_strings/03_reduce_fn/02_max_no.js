const maximumNumber = () => {
    let arr = [1,2,3,4,6,5,8,7,0]
    let ans = arr.reduce((acc,curr) => {
        if(acc>curr) return acc
        else return curr
    },0)
    return ans;
}
console.log(maximumNumber());
