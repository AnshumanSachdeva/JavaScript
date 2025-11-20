// Simulate an API request with fetchData():
// Return a Promise that resolves with:

// js
// Copy
// Edit
// { id: 1, name: 'Anshuman', course: 'CSE' }
// after 2 seconds.

function fetchData() {
    return new Promise((resolve, reject) => {
        console.log('Fetching data from API');
        
        setTimeout(() => {
            const data = {
                name:"Anshuman",
                age:19,
                branch:"CSE"
            }

            resolve(data)

        }, 2000);
        
    })
}
fetchData()
    .then((response) => {
        console.log("Data received:", response);
    })
    .catch((error) => {
        console.log("Error:", error);
    });