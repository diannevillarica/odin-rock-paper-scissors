// 1 Create computerPlay function which randomizes the pick for computerPlay

function computerPlay() {
  const computerSelection = ["Rock", "Paper", "Scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
computerPlay();

// 2 Ask user input to take their pick and return that also
// const promptPlayerSelection = prompt("Choose one: Rock, Paper or Scissors");

// 3 Create playRound function which takes two params

function playRound(playerSelection, computerSelection) {
  playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You Lose! Paper beats Rock");
  }
}

const playerSelection = "rock"; // manually for testing
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
