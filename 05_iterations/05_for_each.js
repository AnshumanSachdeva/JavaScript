// for each loop

const programming = ['js', 'cpp', 'java', 'rb', 'py'];

// programming.forEach( function (val) {            // for each k () mein call back function likhna hai and callback functions ka name nhi hota
//     console.log(val);
    
// } )    

// for each using arrow function

// programming.forEach( (val) => {          // name idher b nhi aayega
//     console.log(val);
    
// })       


// function printMe (val) {
//     console.log(val);
    
// }

// programming.forEach(printMe)


// programming.forEach( (val, index, arr)=> {
//     console.log(val , index , arr);
    
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})