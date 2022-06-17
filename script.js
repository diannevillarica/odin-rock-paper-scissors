const playerArr = [];
const computerArr = [];

let playerTotal1 = 0;
let computerTotal1 = 0;

for (let i = 1; i <= 5; i++) {
  // Creates random selection for the computer
  function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[
      Math.floor(Math.random() * computerSelection.length)
    ];
  }

  // 2 Create playRound function which takes two params
  let playerPoint = 0;
  let computerPoint = 0;

  // prompts the user for an input
  const playerSelection = prompt(
    "Choose one: Rock, Paper or Scissors"
  ).toLowerCase();
  const computerSelection = computerPlay();

  //function will return the message and return a point which will be stored in playerArr and computerArr
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

  // runs the playRound() and adds up the points in the arrays
  function game() {
    playRound(playerSelection, computerSelection);

    playerArr.push(playerPoint);
    computerArr.push(computerPoint);

    const playerTotal = playerArr.reduce(
      (prevValue, currValue) => prevValue + currValue
    );
    const computerTotal = computerArr.reduce(
      (prevValue, currValue) => prevValue + currValue
    );

    console.log(`Player score: ${playerTotal}`);
    console.log(`Computer score: ${computerTotal}`);
    console.log("");

    playerTotal1 = playerTotal;
    computerTotal1 = computerTotal;
  }

  game();
}

if (playerTotal1 > computerTotal1) {
  console.log("Congrats! You won the game! 🙂");
} else if (playerTotal1 < computerTotal1) {
  console.log("Sorry you lost to a computer! 😞");
} else {
  console.log("It's a draw! Do you want to try again? 😬");
}
