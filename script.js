// Create function to get the choice of the computer
function getComputerChoice() {
    // Declare variable with all 3 possible choices
    let choices = ["rock", "paper", "scissors"];
    // Declare variable with random choice from all 3 choices
    // Get a random number from 0-1 using Math.random
    // Multiply it by the amount of choices
    // Round it down to nearest interger usig Math.floor
    // Convert into a string using []
    // Multiply with choices variable
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    const compChoiceDisplay = document.createElement("div")
    compChoiceDisplay.textContent = `The computer chose ${compChoice}`
    scoreDisplay.appendChild(compChoiceDisplay)
    return compChoice;
}

// Create function that plays a single round of rockPaperScissors
// Must have two parameters playerSelection and computerSelection
// Must return a string that declares win, lose or tie
// Parameters should be case insensitive
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") { 
        return "You Lose! Paper covers Rock"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") { 
        return "You Win! Rock breaks Scissors"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") { 
        return "You Win! Paper covers Rock"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") { 
        return "You Lose! Scissors cut Paper"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") { 
        return "You Lose! Rock breaks Scissors"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") { 
        return "You Win! Scissors cut Paper"
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "You tie!"
    }
}

// Create function that asks player for choice with prompt
// Return player's choice
function playerSelect() {
    let playerSelection = prompt("Type in your choice")
    return playerSelection;
}

// Declare variable to keep track of final score of the player
let playerScore = 0;
// Declare variable to keep track of final score of computer
let computerScore = 0;

// Create function that plays one round and keeps tracks of scores
function scoreDetermine(playerChoice) {
    // Declare variable to compare outcomes for determining score
    let outcome = playRound(playerChoice, getComputerChoice());
    // Use if else statements to determine scores
    if (outcome === "You tie!") {
        outcomeDisplay(outcome)
        const tieResultDisplay = document.createElement("div")
        tieResultDisplay.textContent = "No points awarded to any party"
        scoreDisplay.appendChild(tieResultDisplay)
        currentScoreDisplay()
    } else if (outcome === "You Lose! Paper covers Rock") {
        outcomeDisplay(outcome)
        // If the computer wins increment computerScore
        computerScore = ++computerScore
        currentScoreDisplay()
    } else if (outcome === "You Win! Rock breaks Scissors") {
        outcomeDisplay(outcome)
        // If the player wins increment playerScore
        playerScore = ++playerScore
        currentScoreDisplay()
    } else if (outcome === "You Win! Paper covers Rock") {
        outcomeDisplay(outcome)
        playerScore = ++playerScore
        currentScoreDisplay()
    } else if (outcome === "You Lose! Scissors cut Paper") {
        outcomeDisplay(outcome)
        computerScore = ++computerScore
        currentScoreDisplay()
    } else if (outcome === "You Lose! Rock breaks Scissors") {
        outcomeDisplay(outcome)
        computerScore = ++computerScore
        currentScoreDisplay()
    } else if (outcome === "You Win! Scissors cut Paper") {
        outcomeDisplay(outcome)
        playerScore = ++playerScore
        currentScoreDisplay()
    }
}

// function numberOfRounds(number) {
//     for (let i = 0; i < number; i++) {
//         scoreDetermine(); 
//     }
// }

// // Create function that plays five rounds
// function playGame() {
//     // Invoke the function to determine the score five times
//     // numberOfRounds(5)
//     // Create an if else statement to display the final result
//     if ((playerScore - computerScore) > 1) {
//         console.log(`FINAL RESULT : YOU WIN! by ${playerScore - computerScore} points`)
//     } else if ((computerScore - playerScore > 1)) {
//         console.log(`FINAL RESULT : YOU LOSE! by ${computerScore - playerScore} points`)
//     } else if (playerScore === computerScore) {
//         console.log("FINAL RESULT : YOU TIE!")
//     } else if (playerScore > computerScore) {
//         console.log(`FINAL RESULT : YOU WIN! by ${playerScore - computerScore} point`)
//     } else if (playerScore < computerScore) {
//         console.log(`FINAL RESULT : YOU LOSE! by ${computerScore - playerScore} point`)
//     }
// }

// Invoke the function that plays five rounds
// playGame()

const scoreDisplay = document.querySelector("div")

// Store the three buttons in variables
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", () => playerChoiceRockDisplay())
rockButton.addEventListener("click", () => scoreDetermine("rock"))

paperButton.addEventListener("click", () => playerChoicePaperDisplay())
paperButton.addEventListener("click", () => scoreDetermine("paper"))

scissorsButton.addEventListener("click", () => playerChoiceScissorsDisplay())
scissorsButton.addEventListener("click", () => scoreDetermine("scissors"))

function playerChoiceRockDisplay() {
    const playerChoiceDisplay = document.createElement("div")
    playerChoiceDisplay.textContent = "You chose rock"
    scoreDisplay.appendChild(playerChoiceDisplay)
}
function playerChoicePaperDisplay() {
    const playerChoiceDisplay = document.createElement("div")
    playerChoiceDisplay.textContent = "You chose paper"
    scoreDisplay.appendChild(playerChoiceDisplay)
}
function playerChoiceScissorsDisplay() {
    const playerChoiceDisplay = document.createElement("div")
    playerChoiceDisplay.textContent = "You chose scissors"
    scoreDisplay.appendChild(playerChoiceDisplay)
}

function outcomeDisplay(outcome) {
    const outcomeDisplay = document.createElement("div")
    outcomeDisplay.textContent = `${outcome}`
    scoreDisplay.appendChild(outcomeDisplay)
}

function currentScoreDisplay() {
    const currentScoreDisplay = document.createElement("div")
    currentScoreDisplay.textContent = `You : ${playerScore} || Computer : ${computerScore}`
    scoreDisplay.appendChild(currentScoreDisplay)

    const spacer = document.createElement("br")
    scoreDisplay.appendChild(spacer)
}