// Simulate this output:
// 1. "Starting task"
// 2. after 1 sec: "Loading data"
// 3. after 2 sec: "Processing data"
// 4. after 1 sec: "Done!"

// Use nested setTimeouts (callback hell)

console.log(`Starting Task`);

setTimeout(() => {
    console.log(`Loading Data`);
    setTimeout(() => {
        console.log(`Processing Data`);
        setTimeout(() => {
            console.log(`Done!`);
        }, 1000);
    }, 2000);
}, 1000);