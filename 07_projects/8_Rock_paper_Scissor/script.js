let  userScore = 0;
let  compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "#081b31"

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor = "Red"

    }
}

const genCompChoice = () =>{
    let options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            if (compChoice === 'paper') {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if(userChoice === 'paper') {
            if (compChoice === 'scissors') {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            if (compChoice === 'rock') {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    })
})
