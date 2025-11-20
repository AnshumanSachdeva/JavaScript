// 5. Chain Promises to simulate these steps:
// connectToDB()

// fetchUser()

// sendEmail()

// Each function returns a Promise which resolves in 1 second.

function connectToDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Connecting to DataBase")
            resolve("DataBase connected")
        }, 1000);
    })
}
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Anshuman', age: 19, branch: 'CSE' }

            console.log("Fetching with user")
            resolve(`User Fetched, data entered: ${JSON.stringify(data)}`)
            
        }, 1000);
    })
}
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending Email")
            resolve("Email sent")
        }, 1000);
    })
}
connectToDB()
    .then((result1) => {
        console.log(result1);
        return fetchUser()
    })
    .then((result2) => {
        console.log(result2);
        return sendEmail()
    })
    .then((result3) => {
        console.log(result3);
        console.log("All steps Completed, kindly Check you Email");
    })
    .catch((error) => {
        console.log("Error Occurred");
    })