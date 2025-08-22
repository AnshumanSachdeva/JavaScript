/* Basically stack and heap memory allocation type hai jo primitive datatypes
    hoti(number, string, null, defined, etc.) hai unko stack milta hai and jo non-priitive datatypes 
    (array, function, object)hoti hai unko Heap milta hai.
    
    Simply agar bola jaye toh
    Stack means => Call by Value .ie. new variable mein old variable ki copy aayegi and new variable ko 
        change krne se purane mein koi change nhi aayega.
        
    Heap means => Call by Reference .ie. mew variable mein old variable ka reference jayega and new variable 
        mein jo bhi changes honge vo old wale mein bhi ho jayenge.*/


let myName = "Anshuman Sachdeva"; // primitive datatype, stack memory
let anotherName = myName; // anotherName mein myName ki copy aayi, stack memory
anotherName = "Anshuman"; // anotherName ko change kiya, myName mein koi change nahi aaya
console.log(myName); // Anshuman Sachdeva
console.log(anotherName); // Anshuman


let userOne = {
    name: "Anshuman Sachdeva",
    age: 25,
    city: "Delhi"
}                           // non-primitive datatype, heap memory

let userTwo = userOne; // userTwo mein userOne ka reference aaya, heap memory
userTwo.name = "Anshuman"; // userTwo ko change kiya, userOne mein bhi change aaya
console.log(userTwo.name); // Anshuman
console.log(userOne.name); // Anshuman 