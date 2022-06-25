const playerArr = [];
const computerArr = [];

let playerFinalScore = 0;
let computerFinalScore = 0;

function game() {
  function playerPlay(e) {
    if (e === undefined) return;
    return e.target.textContent.toLowerCase();
  }
  const el = document.querySelectorAll("button");
  el.forEach((el) => {
    console.log(el);
    el?.addEventListener("click", playerPlay);
  });
  const playerSelection = playerPlay();
  console.log(playerSelection);

  function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[
      Math.floor(Math.random() * computerSelection.length)
    ];
  }
  const computerSelection = computerPlay();
  // const playerSelection = p();

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

  playerArr.push(playerPoint);
  computerArr.push(computerPoint);

  const playerScore = playerArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );
  const computerSCore = computerArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );

  // necessary console logs
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerSCore}`);
  console.log("");

  playerFinalScore = playerScore;
  computerFinalScore = computerSCore;
}

game();

if (playerFinalScore > computerFinalScore) {
  console.log("Congrats! You won the game! 🙂");
} else if (playerFinalScore < computerFinalScore) {
  console.log("Sorry, but you lost to a computer! 😞");
}

// when player click, game starts
// const el = document.querySelectorAll("button");
// el.forEach((el) => {
//   el?.addEventListener("click", game);
// });
