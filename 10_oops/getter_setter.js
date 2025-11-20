// class user  {
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }
// }

// const anshuman = new user("anshuman@ai", "123")
// console.log(anshuman.password);
// ab mai chahta hu ki kush cheeze main sbko na du, static b kr skte hai but mai usko koi msg dena chahta hu ki password nhi milega,  ya kush b aisa hi isliye getter setter use krte hai.

// agr getter use kiya toh setter b use krna hi pdega

// 

// aise nhi chalega stack overflow wala error aayega qki set passowrd (), and constructor , dono hi password set krne ki koshish kr rhe hai, isliye hum getter and setter wale this variable ko thoda sa change krna pdega, usse constructor password ko set nhi krega qki humne usko overwrite kr diya

class user  {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const anshuman = new user("anshuman@ai", "abcd")
console.log(anshuman.password);

// agar setter mein toUpperCase() hata diya toh ouput mein change nh aayega but jaha prb values store ho rahi hai vo jaise input diya hai vaise hi hogi but jab koi usko acess krega tab change ho jayegi