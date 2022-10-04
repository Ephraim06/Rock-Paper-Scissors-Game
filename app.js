const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}
