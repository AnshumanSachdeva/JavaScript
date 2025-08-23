// Singleton(Declaraing object using constructor)

// const tinderUser = new Object(); // Creating an empty object using the Object constructor
const tinderUser = { }// Creating an empty object using object literal syntax

tinderUser.id = "123abc"; // Adding a property to the object
tinderUser.name = "BCD"; // Adding another property
tinderUser.isLoggedIn = false; // Adding a boolean property

console.log(tinderUser); // { id: '123abc', name: 'BCD', isLoggedIn: false }

const regularUser = {                   // Object inside an object
    email: "user@example.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName); // John

const obj1 = {1: "one", 2: "two"}; // Object with numeric keys
const obj2 = {3: "three", 4: "four"}; // Object with numeric keys
//combining these two objects into a new object

// const obj3 = { obj1, obj2 } // Nested object containing obj1 and obj2
// console.log(obj3); // { obj1: { '1': 'one', '2': 'two' }, obj2: { '3': 'three', '4': 'four' } }

const obj3 = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into a new object /* Curly braces {} isko neglect 
                // bhi kar skte hai {} they act as target(jismein merge hota hai) and baki k objects are source objects */
// Object.assign(target, source1, source2, ...);

console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

//Spread operator se bhi kar skte hai
const obj4 = {...obj1, ...obj2}; // Merging obj1 and obj2 into a new object
console.log(obj4); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

// objject insde array
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
// Accessing objects inside an array
console.log(users[0].id); // 1
console.log(users[1].name); // Bob

console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn'] // Getting keys of the tinderUser object
console.log(Object.values(tinderUser)); // ['123abc', 'BCD', false] // Getting values of the tinderUser object
console.log(Object.entries(tinderUser)); // [['id', '123abc'], ['name', 'BCD'], ['isLoggedIn', false]] // Getting key-value pairs of the tinderUser object

console.log(tinderUser.hasOwnProperty("id")); // true // Checking if the tinderUser object has the property "id"
console.log(tinderUser.hasOwnProperty("age")); // false // Checking if the tinderUser object has the property "age"

//***********************************************destructuring************************************************
// Destructuring is a way to extract values from an object or array into distinct variables
// It allows you to unpack values from arrays or properties from objects into distinct variables
const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "ABCD"
}

// course.courseInstructor;

const {courseInstructor} = course; 
console.log(courseInstructor); // ABCD // Destructuring to get the courseInstructor property from the course object

const {courseInstructor: instructor} = course;
console.log(instructor); // ABCD // Destructuring with renaming to get the courseInstructor property from the course object

// **********************************************************API's*******************************************************************
/* API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications
    APIs allow different software systems to communicate with each other.
    Jaidatar API's ka response JSON format mein hota hai. (JSON is noting but a kind of object without name) but kabhi kabhi arrays mein bhi aata hai*/