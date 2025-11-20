function reverseString(str) {
    let arr1 = str.split('');    
    let l,r;
    l = 0
    r = arr1.length - 1
    let arr2 = [...arr1]       // spread operator and used fo making a new copy but dono variables array hi hone chaiye
    // let arr2 = Array.from(arr1)  // array like things(NodeList, arguments, string) ko array bnane k liye yeh use krte hai
    // let arr2 = arr1.slice()  // slice 2 agruments leta hai, agr kisi value tak hi copy krni hai uske aage nhi krni toh uske liye slice use hota hai, 1st agrument vo hota hai ki kis index se copy krna start krna hai and 2nd argument mein last index pass krte hai ki kaha tak copy krna hai
    while(l < r){
        [arr1[l],arr1[r]] = [arr1[r],arr1[l]]   
        l++
        r--
    }
    // if(arr1 === arr2){      // yeh kabhi bhi nahi chalega , agr pallindrome ho toh b nhi chalega qki hum 2 arrays ko check kr rahe hai naki two strings ko and dono arrays ka reference alag hai, isliye pahle arrays ko string bnana pdega and uske bad if lagayenge
    //     return `The given string ${arr2.join('')} is pallindrome`;
    // } else {
    //     return `The given string ${arr2.join('')} is not pallindrome`
    // }


     if(arr1.join('') === arr2.join('')){     
        return `The given string ${arr2.join('')} is pallindrome`;
    } else {
        return `The given string ${arr2.join('')} is not pallindrome`
    }
   
}
const str = 'naman'
console.log(reverseString(str));