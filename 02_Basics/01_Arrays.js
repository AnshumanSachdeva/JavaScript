/* Js mein arrays resizeable hote hai and yeh necessary nhi hai ki ek hi datatype k values ek array mein aa skti hai .ie. ek hi array mein different values dal ske hai(numbers , boolean , object , string , etc.)
    js mein arrays pr jab copy operation perform kiya jaata hai toh vo humesha shallow copies(new arrays mein jo bhi changes hogi vo old wale mein automatically ho jayegi .ie. Heap Memory) banata hai naki deep 
    copies(new var mein change hone pr old mein koi change nhi aayega .ie. Stack Memroy)*/



const myArr = [0,1,2,3,4,5,6,7,8,9]; // Array of numbers
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(myArr[0]); // 0 // Accessing the first element of the array
console.log(myArr[myArr.length - 1]); // 9 // Accessing the last element of the array
console.log(myArr[myArr.length]); // undefined // Accessing an index that is out of bounds returns undefined
console.log(myArr[10]); // undefined // Accessing an index that is out of bounds

const myArr2 = new Array(1,2,3,4,5,6,7,8,9); // Array of numbers using the Array constructor
console.log(myArr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(myArr2[0]); // 1 // Accessing the first element of the

/*********************************Array Methods******************************************/
myArr.push(10); // Adding an element to the end of the array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

myArr.pop(); // Removing the last element of the array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

myArr.unshift(-1); // Adding an element to the beginning of the array
console.log(myArr); // [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

myArr.shift(); // Removing the first element of the array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const newArr = myArr.join() // new array ki type string hai
console.log(myArr)
console.log(newArr); // "0,1,2,3,4,5,6,7,8,9" // Joining the array elements into a string

myArr2 = myArr.slice(0, 5); // Creating a new array with the first 5 elements of myArr
console.log(myArr2); // [ 0, 1, 2, 3, 4 ] // Slicing the array from index 0 to 5 (exclusive)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] // Original array remains unchanged

myArr2 = myArr.splice(0, 5); // Removing the first 5 elements from myArr and storing them in myArr2
console.log(myArr2); // [ 0, 1, 2, 3, 4 ] // Splicing the array from index 0 to 5 (exclusive)
console.log(myArr); // [ 5, 6, 7, 8, 9 ] // Original array is modified


const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["batman", "superman", "flash"]

marvel_heros.push(dc_heros); // Adding all elements of dc_heros to marvel_heros using spread operator
console.log(marvel_heros); // [ 'thor', 'ironman', 'hulk', [ 'batman', 'superman', 'flash' ] ] // Note: This will create a nested array

// Another way to add elements of dc_heros to marvel_heros
const all_heros = marvel_heros.concat(dc_heros); // This will create a new array with elements of both arrays
console.log(all_heros); // [ 'thor', 'ironman', 'hulk', 'batman', 'superman', 'flash' ] // Note: This will also create a nested array

// Using spread operator to flatten the array
const all_heros_flat = [...marvel_heros, ...dc_heros]; // This will create a new array with elements of both arrays
console.log(all_heros_flat); // [ 'thor', 'ironman', 'hulk', 'batman', 'superman', 'flash' ] // Note: This will create a flat array


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ] ]
const flattened_array = another_array.flat(Infinity); // Flattening the array to a depth of infinity(automatic dekh lega ki kitne levels tak flatten karna hai)
console.log(flattened_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ] // Flattened array
// Note: flat() method creates a new array and does not modify the original array

console.log(Array.from("Anshuman")); // [ 'A' , 'n','s', 'h', 'u', 'm', 'a', 'n' ] // Converting a string to an array using Array.from()

 