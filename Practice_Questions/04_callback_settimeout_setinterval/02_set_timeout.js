function printFirstMessage() {
    setTimeout(() => {
        console.log("First message");
    }, 1000); // after 1 second
}

function printSecondMessage() {
    setTimeout(() => {
        console.log("Second message");
    }, 2000); // after 2 seconds
}

function printThirdMessage() {
    setTimeout(() => {
        console.log("Third message");
    }, 3000); // after 3 seconds
}

// Call all functions
printFirstMessage();
printSecondMessage();
printThirdMessage();
