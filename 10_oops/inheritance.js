class user {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password){
        super(username)     // super fn ek bahut acha fn hai, usmein jo b pass krenge vo dusri class se le aayega(obviously pahle inheritence krni pdegi), ismein this pass krne ki b zarurat nhi hai samajdar fn hai meri taraf , sab kaam khud hi kr leta hai
        this.email = email;
        this.password = password;
    }
    addCourses (){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher('chai', 'chai@gmail.com', '123');
chai.addCourses()
chai.logMe()

const tea = new user('tea')
tea.logMe();

console.log(chai === tea)
console.log(chai === teacher)

console.log(chai instanceof user);
console.log(chai instanceof teacher);

