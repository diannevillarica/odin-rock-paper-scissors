// 1 Create computerPlay function which randomizes the pick for computerPlay

function computerPlay() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
computerPlay();

// 2 Ask user input to take their pick and return that also
// const promptPlayerSelection = prompt("Choose one: Rock, Paper or Scissors");

// 3 Create playRound function which takes two params

function playRound(playerSelection, computerSelection) {
  const playerSelectionCaseInsensitive = playerSelection.toLowerCase();

  if (
    playerSelectionCaseInsensitive == "rock" &&
    computerSelection == "paper"
  ) {
    console.log("You Lose! Paper beats Rock");
  }
}

const playerSelection = "rock"; // manually for testing
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
