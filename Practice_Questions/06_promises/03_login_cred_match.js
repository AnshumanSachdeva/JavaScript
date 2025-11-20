//Create a login function using Promises:
//login(username, password)
// If username and password match predefined values → resolve
// Else → reject
function login(username,password) {
    return new Promise((resolve, reject) => {
        const correctUsername = "Anshuman"
        const correctPassword = "Sachdeva"
        if(username === correctUsername && password === correctPassword){
            resolve("Login Successful")
        } else {
            reject("Login failed! Incorrect username or password")
        }
    })
}
login("Anshuman","Sachdeva")
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err);
    })

login("admin", "1234")
    .then((message) => console.log(message))
    .catch((error) => console.log(error));