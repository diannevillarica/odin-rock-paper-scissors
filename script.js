function game() {
  let playerScore = 0;
  let computerScore = 0;

  const els = document.querySelectorAll("button");

  els.forEach((el) => {
    el.addEventListener("click", function () {
      const computerOptions = ["rock", "paper", "scissors"];
      const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
      playRound(this.textContent, computerSelection);
    });
  });

  function updateScore() {
    console.log(`Current player score: ${playerScore}`);
    console.log(`Current computer score: ${computerScore}`);
    console.log("");
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
      updateScore();
      return;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
      updateScore();
      return;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;
      updateScore();
      return;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      console.log("You Win! Paper beats Rock");
      playerScore++;
      updateScore();
      return;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      console.log("You Win! Scissors beats Paper");
      playerScore++;
      updateScore();
      return;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      console.log("You Win! Rock beats Scissors");
      playerScore++;
      updateScore();
      return;
    } else if (
      (playerSelection == "rock" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "scissors")
    ) {
      console.log("Draw! Have another go!");
      updateScore();
      return;
    }
  }
}

game();
