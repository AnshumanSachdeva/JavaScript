/* BackTicks(` `) are used with${} as a new method for string interpolation(ek hi string mein place holders bnate hai.)*/

const name = "Anshuman Sachdeva";
const age = 19;
console.log(`My name is ${name} and I am ${age} years old.`); // My name is Anshuman Sachdeva and I am 19 years old.
// Backticks allow for multi-line strings as well

console.log("My name is " + name + " and I am " + age + " years old."); // My name is Anshuman Sachdeva and I am 19 years old.
// This is the old way of string interpolation, but backticks are more readable and easier to use, especially for complex strings.


/*Strings ko declare karne ka ek aur tarika hai jismein hum *new* keyword ka istmal karte hai and ismein string object create hota hai*/

const str = new String("Hello World"); // This creates a string object
console.log(str); // [String: 'Hello World'] // ismein string key and value dono hote hai and iski datatype bhi object hoti hai
console.log(str[0]); // H // ismein string ke first character ko access karte hai

/*Ismein string object ki properties and methods bhi hote hai jaise length, toUpperCase(), toLowerCase(), etc. jinko hum dot(.) se access kar sakte hai*/
console.log(str.length); // 11 // ismein string ki length ko access karte hai
console.log(str.toUpperCase()); // HELLO WORLD // ismein string ko uppercase mein convert karte hai
console.log(str.toLowerCase()); // hello world // ismein string ko lowercase mein convert karte hai

/*toUpperCase() and toLowerCase() methods ko use karne se string ki original value change nahi hoti(reason => string stack memory use krti hai), ye methods new string return karte hai*/

console.log(str.charAt(0)); // H // charAt() method se string ke kisi specific index ka character access karte hai
console.log(str.indexOf("World")); // 6 // indexOf() method se string mein koi character ya substring ki position find karte hai
console.log(str.lastIndexOf("o")); // 7 // lastIndexOf() method se string mein koi character ya substring ki last position find karte hai
console.log(str.includes("Hello")); // true // includes() method se string mein koi character ya substring hai ya nahi check karte hai
console.log(str.startsWith("Hello")); // true // startsWith() method se string ki starting mein koi character ya substring hai ya nahi check karte hai
console.log(str.endsWith("World")); // true // endsWith() method se string ki ending mein koi character ya substring hai ya nahi check karte hai
console.log(str.split(" ")); // [ 'Hello', 'World' ] // split() method se string ko kisi character ya substring ke basis par split karte hai and array return karte hai humne empty space ko split kiya hai. ye method string ko array mein convert kar deta hai.Yeh limit bhi accept karta hai jismein hum specify kar sakte hai ki kitne parts mein split karna hai
console.log(str.split(" ", 1)); // [ 'Hello' ] // split() method with limit, it splits the string into 1 part only
console.log(str.concat("!")); // Hello World! // concat() method se string ko kisi aur string ke sath concatenate karte hai
console.log(str.repeat(2)); // Hello WorldHello World // repeat() method se string ko kisi specific number of times repeat karte hai
console.log(str.replace("World", "JavaScript")); // Hello JavaScript // replace() method se string mein kisi character ya substring ko replace karte hai
console.log(str.trim()); // Hello World // trim() method se string ke starting and ending mein spaces ko remove karte hai
console.log(str.slice(0, 5)); // Hello // slice() method se string ke kisi specific range ka substring access karte hai . Ye negative index ko support karta hai
console.log(str.substring(0, 5)); // Hello // substring() method se string ke kisi specific range ka substring access karte hai, lekin ye negative index ko support nahi karta
