// sum of square of only even numbers, using mao,filter and some
let evenSquareSum = () => {
    let arr = [1,2,3,4,5]
    let ans = arr.filter(num => num%2 == 0).map(num => num * num).reduce((acc,curr) =>acc+curr,0)
    return ans;
}
console.log(evenSquareSum());
