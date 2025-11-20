// Create a Promise-based function that simulates file upload:
// 30% chance: Reject with "Upload Failed"

// 70% chance: Resolve with "Upload Successful"

// Use Math.random() to simulate success/failure.


function uploading(){
    return new Promise((resolve, reject) => {
        const percentage = parseInt(Math.random()*100)
        if(percentage >= 70) {
            reject(`File Uploading failed! Try Again.`)
        } else {
            resolve("File Uploaded Sucessfully")
        }
    })
}
uploading()
    .then((message)=> {
    console.log(`Congrats ${message}`);
    })
    .catch((err)=>{
        console.log(`OOPS! ${err}`);
    })