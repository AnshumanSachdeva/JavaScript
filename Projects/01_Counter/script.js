let output = document.querySelector("#output")
const plusBtn = document.querySelector("#plus-btn")
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");
let count = 0;

function updateOutput() {
    output.textContent = count;
}


plusBtn.addEventListener("click", () => {
    count++;
    
    updateOutput();
    
});

minusBtn.addEventListener("click", () => {
    count--;
    
    if (count < 0) {
        alert(`Can't do 0 - 1 , -ve numers are not allowed`)
        count++;

    } else {
        updateOutput();
        
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    
    updateOutput();
});