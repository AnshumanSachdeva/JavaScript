function calcVowels(str){
    let arr = str.split('')
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U'){
            count ++;
        }
    }
    return `The given string contains ${count} vowels`
}
const str = 'namAn'
console.log(calcVowels(str))