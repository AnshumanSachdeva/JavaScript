//***************************************************If statement *******************************************************************

/* Syntax =>
    if (condition ) {
        statement
}   
        
comparison operators =>  <, >, <=, >=, ==, !=, ===, !==

baki toh smj aajayenge but == and === almost same hi hai , dono check hi krte hai , bs === ek extra kaam krta hai vo type b check krta hai.

eg: 2 == "2"        // true     // aise condition mein chal jayega
    2 === "2"       // false    // aise condition mein nhi chalega  // === is called strict equal

Similar difference is in between != and !==  

ab if hai toh else bhi hoga , else b hota hai but if bina else k bhi likh skte hai . else ka syntax same hai cpp wale else k.

Implicit scope bhi hota hai if else ka jismein { } use nhi hote , similar toh cpp wala implicit scope. But fir usmein sirf ek hi statement aati hai agar
    zaida dalni hai toh fir (,) se separate krke , last statement mein semicolon lagana pdga. But aise readability kharab ho jati hai.
    

Agar multiple conditions check krni hai toh else if statement use kr skte hai again it's syntax is also same as that of cpp.*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){          // && matlab dono true hone chaiye
    console.log("Allow for shopping");
}

if ( loggedInFromGoogle || loggedInFromEmail) {     // || matlab ek true ho toh b chalega
    console.log("User loggedin")
}

// Nullish Coalescing Operator (??): pura kaam null and undefined

let val1;
val1 = 5 ?? 10      // 5
val1 = null ?? 10       // 10      // yeh isliye banaya qki agr database ne value k sath null bhi de diya toh program ka flow kharab ho skta hai
val1 = undefined ?? 10  // 10      // yeh isliye banaya qki agr database ne value k sath undefined bhi de diya toh program ka flow kharab ho skta hai

console.log (val1)

// Terniary Operator

// condition ? true : false            // similar to cpp wala ternary , working b same hi hai

