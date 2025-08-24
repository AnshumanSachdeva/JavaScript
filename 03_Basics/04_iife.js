// Immediately Invoked Function Expressions (IIFE)

/* What is the need of IIFE

    1. 🔒 Global Scope Pollution se Bachav
        JavaScript mein agar tum variables var, let, const se global scope mein declare karte ho, toh wo sab jagah accessible ho jate hain, jo 
        future mein bugs ka reason ban sakta hai.IIFE ek alag local scope banata hai, jisme variables andar hi confined rehte hain.
        
    2. 🧼 Data Encapsulation / Privacy
        Kabhi-kabhi tum chahte ho ki kuch variables ya logic public na ho, sirf internal kaam ke liye ho — IIFE se private variables banaye ja sakte hain.
        
    3. ⚙️ Immediately Execute Karna Hai Function Ko
        Kabhi tumhara goal hota hai ki ek function turant run ho jaye, bina usse manually call kiye.
        
        
        
Syntax for IIFE
()();    1st pranthesis mein function ki definition and 2nd wale mein uski call .*/


// function one() {                             this is also called named iffe
//     console.log(`DB CONNECTED`);
// }
// one()                   // classic way

(function one() {
    console.log(`DB CONNECTED`);
}) ();                               // classic function in iffe // iffe function start toh kr deta hai but usko nhi pta ki end kaha pr krna hai isliye
                                                // end mein semicolon ; lagana zaruri hai varna aage wala iffe nhi chalega.

( () => {                                   // this is also called un named iffe
    console.log(`hello`);           // iffe with arrow function
} )();

// if we have parameters also then

( (name) => {
    console.log(`hello ${name}`);
} )("Anshuman");