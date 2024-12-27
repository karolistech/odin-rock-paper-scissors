"use strict";

function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum < 1 / 3) {
        return "rock";
    } else if (randomNum < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanInput = prompt("Enter your choice (rock, paper, scissors):");

    if (
        (humanInput === "rock") ||
        (humanInput === "paper") ||
        (humanInput === "scissors")
    ) {
        return humanInput;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Check for a draw
        if (humanChoice === computerChoice) {
            console.log(`It's a draw! You both chose ${humanChoice}.`);
            return;
        }
    
        // Check for win conditions
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins! Better luck next time!");
    } else {
        console.log("It's a tie! Well played!");
    }
}

playGame();