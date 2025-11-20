function wait(ms){
    return new Promise((resolve,reject) => {
        if(ms<0){
            reject("Time cannot be negative")
        } else {
            setTimeout(resolve, ms)
        }
    })
}
async function runTask() {
    try {
        console.log('Starting Task');
        await wait(1000);
        console.log('Loading Task');
        await wait(2000);
        console.log('Processing...');
        await wait(1000);
        console.log('Done');
    } catch (reject) {
        console.log(`Error Occurred!. ${reject}`);   
    }
    
}
runTask()