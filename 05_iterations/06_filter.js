const coding = ['js', 'cpp', 'java', 'rb', 'py'];

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } )

// console.log(values);    // aise nhi chalega humko manually bolna pdega return krne k liye as shown


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } )

// console.log(values);            // abhi bhi nhi chala qki return krta hi nhi hai forEach


const myNums = [1, 2, 3,4 ,5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )   // similar to forEach bs ek difference yeh h ki forEach values return mji krta but ye kr deta hai
// console.log(newNums);

// agar curly braces lagayi toh return khud likhna pdega implicitily nhi hoga

// const newNums = myNums.filter( (num) => {
//     return num > 4;                     // agr return nhi lagaya toh empty rray aayega 
// } )   


//++++++++++++++++++++++++++++++++++++but agar forEach hi lagana hai toh if use krna pdega++++++++++++++++++++++++++++++++++++++++

// const newNums = []
// myNums.forEach( (nums) => {
//     if (nums > 4) {
//         newNums.push(nums)
//     }
// })
// console.log(newNums);



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
        price: 1900
    },
    {
        languageName: "java",
        languageFileName: "java",
        price: 2000
    },
    {
        languageName: "python",
        languageFileName: "py",
        price: 1500
    },
    {
        languageName: "c++",
        languageFileName: "cpp",
        price: 2000
    },
    {
        languageName: "C",
        languageFileName: "c",
        price: 1500
    },
    {
        languageName: "Ruby",
        languageFileName: "rb",
        price: 2000
    }
]

let userLanguage = myCoding.filter( (lang) => lang.languageName === "c++");
console.log(userLanguage);

userLanguage = myCoding.filter( (lang) => {return lang.price === 1500});
console.log(userLanguage)