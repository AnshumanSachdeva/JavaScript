/* Create a loginUser function with Promise:
Input: username, password

If both are non-empty, resolve in 2 seconds with “Login success!”

Else, reject with “Login failed!” */

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (!username || !password) {
            reject("Username & Password cannot be empty");
        } else {
            setTimeout(() => {
                resolve("Login success!");
            }, 2000);
        }
    });
}

loginUser('Anshuman', 'Sachdeva')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(`Error Occurred! ${error}`);
    });
