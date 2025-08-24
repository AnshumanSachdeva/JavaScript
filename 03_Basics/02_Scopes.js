var c = 300;

if(true){
    let a = 10
    const b = 20
    c = 30
}


// console.log(a)  //error // a if wale scope mein hai
// console.log(b)  //error // b bhi if wale scope mein hai
// console.log(c)  //no error // 30 // var ek type se global scope k sath aata hai // islye agar var dusri file mein likha hoga toh bhi vo new file mein aayega
// so jaidatar log var ko ignor hi krte hai

// NOTE => global scope from browesr inspect and global scope from node environment , both are different

//********************************************************Nested Scope*****************************************************************
function one() {
    const username = "Anshuman"

    function two() {
        const website = "youtube"
        console.log(username)   // no error bcz username one k scope mein declared hai and console.log k time pr bhi username scope mein hi hai
    } 
    //console.log(website)  // error aayega qki website variable function two k scope k bahar use ho rha hai

    two()
}

//one()


if (true) {
    const username = "Anshuman"
    if (username === "Anshuman") {
        const website = " youtube"
        console.log(username + website);    //Anshuman youtube // no error
    }
    //console.log(website)    // error
}
//console.log(username)   //error

//**************************************************Function in a variable****************************************************************

function addone(){
    return num + 1
}
console.log(addone(5))      // yeh statement agar addone wale function ki definition k upar likh diya toh run ho jayega



const addtwo = function(num){   // yeh b functions hi hai but inko kabhi kabhi expression bhi bolte hai
    return num + 2
}
console.log(addtwo(5))      // yeh statement agar addtwo wale function ki definition k upar likh diya toh run nhi hoga 