const user = {
    _email: 'anshuman@gmail.com',
    _password: "abcde",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(user);
console.log(tea.email);  // Output: ANSHUMAN@GMAIL.COM
