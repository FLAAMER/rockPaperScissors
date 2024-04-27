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
        return "You Lose! Paper covers Rock"
    } else if (playerSelection.toLowerCase () === "rock" && computerSelection === "scissors") { 
        return "You Win! Rock breaks Scissors"
    } else if (playerSelection.toLowerCase () === "paper" && computerSelection === "rock") { 
        return "You Win! Paper covers Rock"
    } else if (playerSelection.toLowerCase () === "paper" && computerSelection === "scissors") { 
        return "You Lose! Scissors cut Paper"
    } else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "rock") { 
        return "You Lose! Rock breaks Scissors"
    } else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "paper") { 
        return "You Win! Scissors cut Paper"
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

// Declare variable to keep track of final score of the player
let playerScore = 0;
// Declare variable to keep track of final score of computer
let computerScore = 0;

// Create function that plays one round and keeps tracks of scores
function scoreDetermine() {
    // Declare variable to compare outcomes for determining score
    let outcome = playRound(playerSelect(), getComputerChoice());
    // Use if else statements to determine scores
    if (outcome === "You tie!") {
        console.log(`${outcome}`)
        console.log("No points awarded to any party")
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    } else if (outcome === "You Lose! Paper covers Rock") {
        console.log(`${outcome}`)
        // If the computer wins increment computerScore
        computerScore = ++computerScore
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    } else if (outcome === "You Win! Rock breaks Scissors") {
        console.log(`${outcome}`)
        // If the player wins increment playerScore
        playerScore = ++playerScore
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    } else if (outcome === "You Win! Paper covers Rock") {
        console.log(`${outcome}`)
        playerScore = ++playerScore
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    } else if (outcome === "You Lose! Scissors cut Paper") {
        console.log(`${outcome}`)
        computerScore = ++computerScore
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    } else if (outcome === "You Lose! Rock breaks Scissors") {
        console.log(`${outcome}`)
        computerScore = ++computerScore
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    } else if (outcome === "You Win! Scissors cut Paper") {
        console.log(`${outcome}`)
        playerScore = ++playerScore
        console.log(`You : ${playerScore} || Computer : ${computerScore}`)
    }
}

function numberOfRounds(number) {
    for (let i = 0; i < number; i++) {
        scoreDetermine();
        
    }
}

// Create function that plays five rounds
function playGame() {
    // Invoke the function to determine the score five times
    // numberOfRounds(5)
    // Create an if else statement to display the final result
    if ((playerScore - computerScore) > 1) {
        console.log(`FINAL RESULT : YOU WIN! by ${playerScore - computerScore} points`)
    } else if ((computerScore - playerScore > 1)) {
        console.log(`FINAL RESULT : YOU LOSE! by ${computerScore - playerScore} points`)
    } else if (playerScore === computerScore) {
        console.log("FINAL RESULT : YOU TIE!")
    } else if (playerScore > computerScore) {
        console.log(`FINAL RESULT : YOU WIN! by ${playerScore - computerScore} point`)
    } else if (playerScore < computerScore) {
        console.log(`FINAL RESULT : YOU LOSE! by ${computerScore - playerScore} point`)
    }
}

// Invoke the function that plays five rounds
playGame()