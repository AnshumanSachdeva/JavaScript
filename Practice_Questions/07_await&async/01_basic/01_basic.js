//Basics of async / await with API Calls

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();

// | Term          | Meaning                                      |
// | ------------- | -------------------------------------------- |
// | `async`       | Function asynchronous banata hai             |
// | `await`       | Promise ke settle hone tak ruk jaata hai     |
// | `fetch()`     | API call karne ke liye                       |
// | `.json()`     | Response ko JS object mein convert karta hai |
// | `try...catch` | Error handling ke liye                       |

//**********************************Await ki kya zarurat hai***************************

/*wihtout await agr code likhe toh aisa hota
function getData() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log("Response:", response);
}

getData();

 and iska output yeh hota
Response: Promise {<pending>}

PROBLEM: fetch() ek promise return karta hai, toh bina await ke wo settle hone se pehle hi aage ka code chal jaata hai — aur tujhe actual data nahi milta, sirf ek pending promise milti hai.

And jab humne await use kiya toh uska kya kya faida mila

1.await fetch() → rukta hai jab tak API ka response nahi aata

2.await response.json() → rukta hai jab tak JSON convert nahi hota

3.Tab jaake console.log() chalta hai actual data ke saath


Maan le tu Zomato pe khana order karta hai.

Bina await ke: Tu order karta hai, aur bina delivery ka wait kiye table pe plate rakh deta hai — khaali plate 😅

await ke saath: Tu order karta hai, delivery ka wait karta hai, aur jab food aa jaata hai, tabhi plate mein daal ke khata hai 😋

📌 Kab zarurat padti hai await ki?
Jab tu kisi Promise-returning function ko call kar raha ho (jaise: fetch(), response.json(), setTimeout, DB call, file read, etc.)

// Aur tujhe uska result chahiye before aage ka code chale
*/