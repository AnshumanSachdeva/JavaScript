// Use Promise.race() to simulate a timeout:
// One promise resolves in 2 seconds.

// Another rejects in 1 second.
// Return whichever finishes first.

function simulateRace() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("✅ Promise 1 resolved in 2 seconds")
        }, 2000);
    })

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("❌ Promise 2 rejected in 1 second");           
        }, 1000);
    })

    Promise.race([promise1, promise2])
        .then((result) => {
            console.log("Race result:",result);
            
        })
        .catch((error)=>{
            console.log("Race error:",error);
        })
}

simulateRace()