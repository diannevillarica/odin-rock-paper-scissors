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
    document.querySelector(".score-player h4").textContent = playerScore;
    document.querySelector(".score-computer h4").textContent = computerScore;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
      document.querySelector(".message").textContent =
        "You Lose! Paper beats Rock";
      computerScore++;
      updateScore();
      return;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      document.querySelector(".message").textContent =
        "You Lose! Scissors beats Paper";
      computerScore++;
      updateScore();
      return;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      document.querySelector(".message").textContent =
        "You Lose! Rock beats Scissors";
      computerScore++;
      updateScore();
      return;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      document.querySelector(".message").textContent =
        "You Win! Paper beats Rock";
      playerScore++;
      updateScore();
      return;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      document.querySelector(".message").textContent =
        "You Win! Scissors beats Paper";
      playerScore++;
      updateScore();
      return;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      document.querySelector(".message").textContent =
        "You Win! Rock beats Scissors";
      playerScore++;
      updateScore();
      return;
    } else if (
      (playerSelection == "rock" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "scissors")
    ) {
      document.querySelector(".message").textContent = "Draw! Have another go!";
      updateScore();
      return;
    }
  }
}

game();
