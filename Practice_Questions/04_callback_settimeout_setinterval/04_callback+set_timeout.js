// Create a function called "downloadFile" which accepts filename and a callback.
// Use setTimeout to simulate 3s delay, then run the callback.
// Output: "Downloading file: notes.pdf"
// After 3 seconds: "Download complete!"

function downloadFile(fileName, callback) {
    console.log(`Downloading File: ${fileName}`);
    setTimeout(() => {
        console.log(`Download Complete`);
        callback();
    }, 3000);
}


function afterDownload() {
    console.log("Callback executed: You can now open the file.");
}


downloadFile('notes.pdf', afterDownload);
