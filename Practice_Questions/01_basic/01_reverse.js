function reverseString(str) {
    let arr = str.split('');    // split se string array mein convert hoga but dhyan rakhna ki quotation empty hai space b nhi deni hai usmein
    let l,r;
    l = 0
    r = arr.length - 1

    while(l < r){
        [arr[l],arr[r]] = [arr[r],arr[l]]   // aise bhi swap kr skte hai
        // let temp = arr[l]
        // arr[l] = arr[r]
        // arr[r] = temp
        l++
        r--
    }
    return arr.join('');    // join se array string mein covert hoga and ismein bhi quotation empty rahenge
}
const str = 'hello'
console.log(reverseString(str));