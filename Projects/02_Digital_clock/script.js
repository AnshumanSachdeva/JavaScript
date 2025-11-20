const time = document.querySelector("#time")

setInterval(() => {
    const date = new Date();
    console.log(date.toLocaleTimeString('en-US'));
    time.innerHTML = date.toLocaleTimeString('en-US');
}, 1000);