// 5. Delay using setTimeout with await
// Q: Write an async function wait(ms) that resolves after ms milliseconds. Use await wait(2000) to delay by 2 seconds.

async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

async function run() {
    console.log("Fetching data");
    await wait(2000)
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    await wait(2000)
    console.log("Converting to readable format");
    const data = await res.json()
    await wait (2000)
    console.log(data);
}

run()