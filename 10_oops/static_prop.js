class user {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){      // static keyword is method ya koi koi b property jispr static use kiya hai usko access hone se rokta hai, similar to cpp mein jo private/protected use krte hai
        return `123`
    }
}

const anshuman = new user('anshuman')
//console.log(anshuman.createId());   // error aayega bcz static use kiya hua hai

class teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const apple = new teacher('apple', 'apple@banana.com')
apple.logMe();
//console.log(apple.createId());
