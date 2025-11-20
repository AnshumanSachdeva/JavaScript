// 1. Basic Fetch with async/await
// Q: Write an async function that fetches data from
// https://jsonplaceholder.typicode.com/users/1 and logs the name of the user.

// 💡 Hint: Use await fetch(...), then await res.json() and console.log(data.name).

// async function fetchData() {
//     const response =  await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json();
//     console.log(data.name);
    
// }
// fetchData()

async function fetchData() {
    try{
        const response =  await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json();
    console.log(data.name);
    } catch (err){
        console.log("Error Occurred", err.message);
        
    }
    
    
}
fetchData()