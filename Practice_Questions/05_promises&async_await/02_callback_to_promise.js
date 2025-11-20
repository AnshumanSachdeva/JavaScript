function wait(ms){
    return new Promise((resolve,reject) => {
        if(ms<0){
            reject("Time cannot be negative")
        } else {
            setTimeout(resolve, ms)
        }
    })
}
wait(1000)
    .then(() => {
        console.log(`Starting Task`);
        return wait(1000);
    })
    .then(() => {
        console.log(`Loading Task`);
        return wait(2000);
    })
    .then(() => {
        console.log(`Processing Task`);
        return wait(1000);
    })
    .then(() => {
        console.log(`Done`);
    })
    .catch((error) => {
        console.log(`Error Occurred! ${error}`);
    })