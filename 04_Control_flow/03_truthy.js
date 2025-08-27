/* truthy and falsy values 
    truthy: vo values jo humne mann liya ki vo true hi hogi
    falsy: vo values jo humne khud se mann liya ki vo false hi hogi
*/

const userEmail ="abcd@gmail.com"

if(userEmail ) {                // bina comparison k if chal gya khud hi mann liya userEmail true hoga , but agar empty hota toh khud hi false
    console.log("Got email")            // mann leta
}
else {
    console.log("Don't got email")
}

/* falsy values
    1. false
    2. 0
    3. -0
    4. BigInt 0n
    5. ""
    6. null
    7. undefined
    8. NaN (Not a Number )    
    
   truthy values
    1. "0"
    2. "false"
    3. "  "
    4. []
    5. {}
    6. function() {}            // called empty functions
*/

// ***************************************Checking empty arrays and objects*************************************************
const emptyArr = []

if(emptyArr.lenth === 0){
    console.log("array is empty")
}

 const emptyObj = {}

if (Object.keys(emptyObj).lenth === 0 ) {               // Object.keys(emptyObj) gives an array
    console.log("object is enpty ");
}

