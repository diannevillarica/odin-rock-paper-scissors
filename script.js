// 1 Create computerPlay function which randomizes the pick for computerPlay

function computerPlay() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
// computerPlay();

// 2 Ask user input to take their pick and return that also
// const promptPlayerSelection = prompt("Choose one: Rock, Paper or Scissors");

// 3 Create playRound function which takes two params
let playerPoint = "";
let computerPoint = "";

function playRound(playerSelection, computerSelection) {
  // playerSelection.toLowerCase();

  // console.log(playerSelection);
  // console.log(computerSelection);

  if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You Lose! Paper beats Rock");
    return (computerPoint += 1);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You Lose! Scissors beats Paper");
    return (computerPoint += 1);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You Lose! Rock beats Scissors");
    return (computerPoint += 1);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You Win! Paper beats Rock");
    return (playerPoint += 1);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You Win! Scissors beats Paper");
    return (playerPoint += 1);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You Win! Rock beats Scissors");
    return (playerPoint += 1);
  } else {
    console.log("It's a draw! Try again.");
    return 0;
  }
}

const playerSelection = "scissors"; // manually for testing
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

const point = playRound();
// console.log(playerPoint);
// console.log(computerPoint);
// console.log(point);

for (let i = 1; i <= 5; i++) {
  function game(point) {
    // tally the points as they come in for computer and player
    // end the function after 5 rounds
    // print who wins the 5 rounds
    // console.log(point);
  }

  game(point);
}
