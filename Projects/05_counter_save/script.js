const minusBtn = document.querySelector("#minus-btn")
const plusBtn = document.querySelector("#plus-btn")
const saveBtn = document.querySelector("#save-btn")
const resetBtn = document.querySelector("#reset-btn")
const savedCounts = document.querySelector("#saver")
let output = document.querySelector("#output")
let count = 0;

let updateOutput = () => {
    output.textContent = count;
    output.style.cssText = "color: black; font-size: 60px";
}

let reset = () => {
    count = 0;
    updateOutput();
    savedCounts.textContent = "Your saved counts will be displayed here"
    output.style.cssText = "color: black; font-size: 60px";
}

minusBtn.addEventListener("click",() => {
    if(count > 0 ){
        count--;
        updateOutput();
    } else {
        alert("Substracting from zero is not possible!😅")
        output.textContent = "Substracting from zero is not possible!😅 Please reset";
        output.style.cssText = "color: red; font-size: 30px";
    }
    
})

plusBtn.addEventListener("click",() => {
    count++;
    console.log(count);
    
    updateOutput();
})

saveBtn.addEventListener("click",() => {
    if (savedCounts.textContent === "Your saved counts will be displayed here") {
        savedCounts.textContent = `Saved Counts: ${count}`;
    } else {
        savedCounts.textContent += `, ${count}`; 
    }
});

resetBtn.addEventListener("click",() => {
    reset();
})