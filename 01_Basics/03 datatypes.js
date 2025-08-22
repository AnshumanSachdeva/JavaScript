/*JavaScript mein vo sabhi dataypes hoti hai j baki languages mein hoti hai and ismein humein cpp ki tarah variables ki datatype DEFINE NHI karni padhti
    vo automatically detect ho jati hai PYTHON lki tarah
    
    JS mein INT FLOAT nhi bolte simply NUMBER dataype bolte hai and aur bhi kush datatypes hoti hai jaise ki NULL and UNDEFINED
    
    NULL => jab humne variable declare kiya and equals mein null likh diya , generally tabh use krte hai jab humko variable chaiye (khali) badme use krne k liye but usme jo value hai vo confuse kr skti hai
        eg => ek program jo temperature return krta hai and uski value error ki vjh se 0 agayi but humko pta hai ki temo 0 bhi ho skta hai and actually mein temp 0 nhi hai. ye confuse kar dega.
        
    UNDEFINED => Variable declare karke chod diya usko koi value asign nhi ki.*/

    //Ek function hota hai typeof() jo variable ki datatype return karta hai
    //isliye isko use karte hai variable ki datatype check karne ke liye
    let name = "Anshuman Sachdeva"; 
    let age = 25;
    let isStudent = true;
    console.log(typeof name); // string
    console.log(typeof age); // number
    console.log(typeof isStudent); // boolean

    // Jab NULL ki datatype check karte hai to vo object return karta hai
    let temp = null;
    console.log(typeof temp); // object

    // Jab UNDEFINED ki datatype check karte hai to vo undefined return karta hai
    let temp2;
    console.log(typeof temp2); // undefined

    // Ek aur datatype hota hai Symbol jo unique and immutable hota hai
    let sym = Symbol("description"); // Symbol ki datatype check karte hai to vo symbol return karta hai
    console.log(typeof sym); // symbol

    // Ek aur datatype hota hai BigInt jo bade numbers ko represent karta hai
    let bigIntNum = BigInt(123456789012345678901234567890); // BigInt ki datatype check karte hai to vo bigint return karta hai
    console.log(typeof bigIntNum); // bigint

    /*************************************NON PRIMITIVE(Reference)**********************************/

    // Non-primitive datatypes vo hote hai jo reference ke through access kiye jaate hai
    // Non-primitive datatypes hoti hai Object, Array, Function, etc.
    // Inki datatype check karne ke liye bhi typeof() ka use karte hai

    let user = {                        // this is an object
        name: "Anshuman Sachdeva",
        age: 25,
        isStudent: true
    }; // Object ki datatype check karte hai to vo object return karta hai
    console.log(typeof user); // object

    let arr = [1, 2, 3, 4, 5];          // this is an array
    console.log(typeof arr); // object
    // Arrays bhi objects hote hai isliye inki datatype bhi object hoti hai

    function greet() {                  // this is a function
        console.log("Hello World");
    } // Function ki datatype check karte hai to vo function return karta hai
    console.log(typeof greet); // function