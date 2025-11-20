// 6. Show Loading + Fetched Data
// Q: Print "Loading...", then fetch post 1, wait 2 seconds, then print "Loaded" and show title.

// 💡 Hint: Use wait() + fetch() + console.log() in correct sequence.

async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

async function loadingData() {
    console.log("Loading Data");
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    await wait(2000)

    console.log("Loaded");

    const data = await res.json()
    console.log(data.title);
}

loadingData()