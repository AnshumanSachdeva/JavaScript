// Write a function multiRequest() that takes an array of Promises and uses Promise.all() to return the results once all are done.

function multiRequest(promiseArray) {
    return Promise.all(promiseArray)
}
const request1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const request2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
const request3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

let promiseArray = [request1,request2,request3] 

multiRequest(promiseArray)
    .then((response) =>{
        return Promise.all(response.map((result) =>{
           return result.json()
        }))
    })
    .then((data)=> {
        console.log("All data:", data);
        
    })
    .catch((err) => {
        console.log("Error Occurred", err);
        
    })