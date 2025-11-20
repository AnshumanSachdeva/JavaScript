let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("✅ Task completed successfully");
    } else {
        reject("❌ Something went wrong");
    }
});

myPromise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
