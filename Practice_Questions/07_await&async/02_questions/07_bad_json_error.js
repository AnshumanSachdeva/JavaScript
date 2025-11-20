// 7. Error on Bad JSON
// Q: Call fetch() on a valid URL, but intentionally call res.brokenJson() to simulate an error in .json() parsing.

// 💡 Hint: Show how try...catch also catches .json() errors.

async function badJSON() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await res.brokenJSON();
        console.log(data);
    } catch (error) {
        console.log("Error Occurred", error);
    }
}

badJSON()