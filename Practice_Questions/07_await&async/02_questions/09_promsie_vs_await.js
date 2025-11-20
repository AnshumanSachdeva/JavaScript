// 9. Compare Promise.then() vs await
// Q: Write two versions:

// One using .then() chain

// One using async/await

// Both should fetch post 1 and print title. Compare readability.

// 💡 Hint: Show side-by-side in comments

function usingThen() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data.title);
    })
    .catch((err)=>{
        console.log(err);
    })
}

usingThen();

async function Async() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json()
    console.log(data.title);
}
Async()