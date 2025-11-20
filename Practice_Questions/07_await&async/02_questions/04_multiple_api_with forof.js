// 4. Use for...of with await
// Q: Fetch 3 posts sequentially, using for...of loop and await. Print the title of each post.

// 💡 Hint: for (let url of urls) { const res = await fetch(url) ... }

async function getPosts() {
    const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
   ];
   try {
    for (const url of urls) {
        const res = await fetch(url);
        const data = await res.json()
        console.log(data.title);
    }
   } catch(error) {
    console.log("Error Occurred", error);
    
   }
}
getPosts()