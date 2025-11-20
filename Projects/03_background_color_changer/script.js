const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
let intervalId; // interval start aur clear karne k liye

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const startBtn = () => {
    start.addEventListener('click', () => {
        if(!intervalId){
            intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
            }, 1000);
        }
        
    })
}

const stopBtn = () => {
    stop.addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = null; // reset krne k liye
        document.body.style.backgroundColor = 'white'
    })
}
startBtn();
stopBtn();