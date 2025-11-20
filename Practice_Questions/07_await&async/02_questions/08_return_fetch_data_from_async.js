// 8. Return Fetched Data from Async Function
// Q: Create a function async function getUser() which fetches a user and returns the name. Then use getUser().then(...) to print it.

// 💡 Hint: Combine async/await inside, but call it like a regular promise.

async function getUser() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await res.json()
        return data.name
}
getUser()
    .then((name)=> {
        console.log("Name is: ", name);        
    })