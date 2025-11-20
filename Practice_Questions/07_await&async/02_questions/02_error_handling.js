// 2. Handle Errors using try...catch
// Q: Fetch from a wrong URL like https://fakeapi.com/data, and handle the error gracefully using try...catch.

// 💡 Hint: Show a message like "Something went wrong" instead of breaking the code.

async function handleError() {
    try {
        const res = await fetch("https://fakeapi.com/data")
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        data = await res.json()
        console.log(data);
    } catch(err)  {
        console.log("Something went wrong,", err);
        
    }
    
}

handleError()