// 1 Create computerPlay function which randomizes the pick for computerPlay

function computerPlay() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

// 2 Ask user input to take their pick and return that also
// const promptPlayerSelection = prompt("Choose one: Rock, Paper or Scissors");

// 3 Create playRound function which takes two params
let playerPoint = 0;
let computerPoint = 0;

const playerSelection = "scissors"; // manually for testing
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
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
  } else if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "scissors")
  ) {
    console.log("Draw! Have another go!");
    return 0;
  }
}
// console.log(playRound(playerSelection, computerSelection));

//  tally the points as they come in for computer and player
// end the function after 5 rounds
// print who wins the 5 rounds
// function game(point) {
//   const playerArr = [];
//   const computerArr = [];
//   const initialValue = 1;

//   // for loop
//   for (let i = 1; i <= 5; i++) {
//     playerArr.push(playerPoint);
//     computerArr.push(computerPoint);
//   }

//   console.log(playerArr);
// }
// game(playRound(playerSelection, computerSelection));

function game(point) {
  const playerArr = [];
  const computerArr = [];

  playerArr.push(playerPoint);
  computerArr.push(computerPoint);

  const playerTotal = playerArr.reduce(
    (prevValue, currentValue) => prevValue + current
  );
  const computerTotal = computerArr.reduce(
    (prevValue, currentValue) => prevValue + current
  );

  console.log(`player total score ${playerTotal}`);
  console.log(`computer total score ${computerTotal}`);
}

game(playRound(playerSelection, computerSelection));
