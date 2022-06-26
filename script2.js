// for (let i = 0; i < 6; i++) {
const playerArr = [];
const computerArr = [];

let playerScore = 0;
let computerScore = 0;

const game = () => {
  const options = document.querySelectorAll("button");
  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach((option) => {
    option.addEventListener("click", function () {
      console.log("clicked");
      const computerNum = Math.floor(Math.random() * 3);
      const computerSelection = computerOptions[computerNum];
      playRound(this.textContent, computerSelection);
    });
  });

  let playerPoint = 0;
  let computerPoint = 0;

  const playRound = (playerSelection, computerSelection) => {
    console.log("inside playRound");
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
  };

  playerArr.push(playerPoint);
  computerArr.push(computerPoint);

  playerScore = playerArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );
  computerScore = computerArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );

  // necessary console logs
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  console.log("");
};

game();

if (playerScore > computerScore) {
  console.log("Congrats! You won the game! 🙂");
} else if (playerScore < computerScore) {
  console.log("Sorry, but you lost to a computer! 😞");
}
// }
