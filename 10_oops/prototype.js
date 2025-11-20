let myName = 'anshuman     '
console.log(myName.length); // yr mai chahta hu ki ek true length wala fn ho, trim().lenth se b kr skte hai but nhi yr mujhe toh truelenth wala hi fn chaiye

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.anshuman = function() {
    console.log(`anshuman is present in all objects`);
    
}
heroPower.anshuman()

myHeros.anshuman()
// yr abhi question aayega ki anshuman fn toh maine object mein bnaya tha toh fir array mein accessible kaise ho gaya , 🤔, vo isliye hua qki array toh object ka hi child hai, object sabka parent hai, object mein koi b change hoga toh sabhi child mein change hoga.... but agar array mein kush new fn bnaya toh vo object mein change nhi krega 



// ************************************inheritance**********************************
// purane zamaane ka code jab classes nhi hoti thi, toh objects bante the but unko link kaise krte the? __proto__ use krte the
// const user = {
//     name: 'chai',
//     email:'chai@google.com'
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport  // iska access bahar b le skte hai
// }

// Teacher.__proto__ = User    // this is called prototypal inheritance

// modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)  // 2nd wale ki property 1st wale mein jayegi(1st wala 2nd ki properties access kr skta hai)



// abh aate hai main kaam pr, true lenth wala fn krte hai usko toh bhul hi gaye

let anotherUserName = 'anshu     '
String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True lenth is: ${this.trim().length}`);
}
anotherUserName.trueLength()

'chai'.trueLength()