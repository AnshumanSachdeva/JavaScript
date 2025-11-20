// 3. Fetch Multiple APIs in Parallel
// Q: Write a function getPosts() that fetches post 1, 2, and 3 in parallel and logs all data.

// const urls = [
//   'https://jsonplaceholder.typicode.com/posts/1',
//   'https://jsonplaceholder.typicode.com/posts/2',
//   'https://jsonplaceholder.typicode.com/posts/3'
// ];
// 💡 Hint: Use Promise.all([...]) with await.


async function getPosts() {
    const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
   ];
   
   try {
        const response = await Promise.all(urls.map((url)=>{    // fetching all urls
            return fetch(url)
        }))
        const data = await Promise.all(response.map((res)=>{    // converting to json
            return res.json();
        }))
        console.log(data);                                      // printind data
   } catch (error) {
        console.log("Error Occurred", error.message);
   }
 
}

getPosts()