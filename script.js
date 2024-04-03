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
    console.log(`The computer chose ${compChoice}`)
    return compChoice;
}

// Create function that plays a single round of rockPaperScissors
// Must have two parameters playerSelection and computerSelection
// Must return a string that declares win, lose or tie
// Parameters should be case insensitive
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase () === "rock" && computerSelection === "paper") { 
        return "You Lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase () === "rock" && computerSelection === "scissors") { 
        return "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase () === "paper" && computerSelection === "rock") { 
        return "You Win! Paper beats Rock"
    } else if (playerSelection.toLowerCase () === "paper" && computerSelection === "scissors") { 
        return "You Lose! Scissors beat Paper"
    } else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "rock") { 
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "paper") { 
        return "You Win! Scissors beat Paper"
    } else if (playerSelection.toLowerCase () === computerSelection) {
        return "You tie!"
    }
}

// Create function that asks player for choice with prompt
// Return player's choice
function playerSelect() {
    let playerSelection = prompt("Type in your choice")
    return playerSelection;
}

// Create function that plays five rounds
function playGame() {
    console.log(playRound(playerSelect(), getComputerChoice()))
    console.log(playRound(playerSelect(), getComputerChoice()))
    console.log(playRound(playerSelect(), getComputerChoice()))
    console.log(playRound(playerSelect(), getComputerChoice()))
    console.log(playRound(playerSelect(), getComputerChoice()))
}

// Invoke the function to play five rounds
playGame()
