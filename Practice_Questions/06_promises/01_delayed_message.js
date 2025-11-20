//Create a function delayedMessage() that returns a Promise which resolves after 3 seconds with the message
function delayedMessage(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3 seconds are up!");
        }, 3000);
    })
}
delayedMessage().then((message) => {
    console.log(message);
})