// check if an string array conatins 'a' or not
let check = () => {
    let arr = ['hello','world', 'how', 'are', 'you']
    let ans = arr.some((str)=> {
        return str.includes('a')
    })
    return ans
}
console.log(check());
