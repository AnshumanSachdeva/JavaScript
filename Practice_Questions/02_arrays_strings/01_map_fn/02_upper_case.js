const upperCase = () => {
    let arr = ['hello', 'world']
    let ans = arr.map( (str) => {
        return str.toUpperCase()
    })
    return ans
}
console.log(upperCase())

// or

// const upperCase = () => {
//     let arr = ['hello', 'world']
//     let ans = ( (str) => str.toUpperCase())
//     return ans
// console.log(upperCase())

// or

// const upperCase = () => {
//     let arr = ['hello', 'world']
//     let ans = ( str => str.toUpperCase())
//     return ans
// console.log(upperCase())
