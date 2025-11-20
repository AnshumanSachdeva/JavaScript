const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
console.log(descriptor); /* {
                value: 3.141592653589793,
                writable: false,
                enumerable: false,
                configurable: false
            } */

const chai = {
    name: 'masala',
    price: '250',
    isAvailable: true,
    orderChai: function() {
        console.log('chai nhi bani');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai))  // undefined , bcz property nhi batayi
console.log(Object.getOwnPropertyDescriptor(chai,'name'))  

// hum apni properties ko define kr skte hai // changing writable, enumerable,etc

Object.defineProperty(chai, 'name', {
    // writable: false,        // value change 
    enumerable: false       // loop nhi lga skte
})

// console.log(Object.getOwnPropertyDescriptor(chai,'name'))  

// for (let [key, value] of chai) {        // not iterable,entries lekar aani padti hai
//     console.log(`${key}:${value}`);
    
// }


for (let [key, value] of Object.entries(chai)) {        
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);     // enumerable false hai isliye name iterate nhi hoga
    }
} 