function waitTwoSeconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Message after 2 seconds");
        }, 2000);
    })
}
waitTwoSeconds()
    .then((message)=> {
        console.log(message);
        
    })