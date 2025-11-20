const generateBtn = document.querySelector("#generate-btn");
const displayPassword = document.querySelector("#output");
const copyBtn = document.querySelector("#copy-btn");

const lengthSlider = document.querySelector("#length");
const lengthValue = document.querySelector("#lengthValue");

const upperCheck = document.querySelector("#uppercase");
const lowerCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+=-{}[]|:;<>,.?/";


lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

const generatePassword = () => {
    let passwordEle = "";
    if (upperCheck.checked) passwordEle += upperChars;
    if (lowerCheck.checked) passwordEle += lowerChars;
    if (numberCheck.checked) passwordEle += numberChars;
    if (symbolCheck.checked) passwordEle += symbolChars;
    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        password += passwordEle[Math.floor(Math.random() * passwordEle.length)]
    }
    displayPassword.textContent = password
    console.log(password);
    document.querySelector(".output-copy").style.display = "flex";
}

const copyPassword = () => {
    navigator.clipboard.writeText(displayPassword.textContent)
        .then(() => {
            alert(`Copied ✅`)
        })
        .catch(err => {
            alert("Error copying: ", err)
        })
}


generateBtn.addEventListener("click", () => {
    generatePassword();

})

copyBtn.addEventListener("click", () => {
    copyPassword();
})