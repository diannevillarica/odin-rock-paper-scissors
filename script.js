const playerArr = [];
const computerArr = [];

let playerScore;
let computerScore;

function game(e) {
  // console.log(typeof e);
  e.stopPropagation();
  const playerSelection = e.target.textContent.toLowerCase();

  function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[
      Math.floor(Math.random() * computerSelection.length)
    ];
  }
  const computerSelection = computerPlay();

  let playerPoint = 0;
  let computerPoint = 0;

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

  playRound(playerSelection, computerSelection);

  //add the scores as they come in
  playerArr.push(playerPoint);
  computerArr.push(computerPoint);

  playerScore = playerArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );
  computerScore = computerArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );

  // necessary console logs
  console.log(`Current player score: ${playerScore}`);
  console.log(`Current computer score: ${computerScore}`);
  console.log("");

  return { playerScore, computerScore };
}

console.log(playerScore);
console.log(computerScore);

const el = document.querySelectorAll("button");
let i = 1;
while (i <= 5) {
  // when player clicks, game starts
  el.forEach((el) => {
    el?.addEventListener("click", game);
  });

  // end game
  if (playerScore > computerScore) {
    console.log("Congrats! You won the game! 🙂");
    el.forEach((el) => {
      el?.removeEventListener("click", game);
    });
  } else if (playerScore < computerScore) {
    console.log("Sorry, but you lost to a computer! 😞");
    el.forEach((el) => {
      el?.removeEventListener("click", game);
    });
  }
  i++;
}
