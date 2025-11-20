const merging = () => {
    let arr1 = [1,2,3]
    let arr2 = [4,5,6]
    //let arr3 = (arr1+arr2);     // yeh string bna dega, islye noo
    //let arr3 = Array.from(arr1+arr2);   // yeh string ko array banayega isliye comma b as a element count hoga
    let arr3 = [...arr1, ...arr2];      // yes it will work
    //let arr3 = arr1.concat(arr2);       // yeh b work krega but thoda old method hai
    return arr3;
}
console.log(merging());
