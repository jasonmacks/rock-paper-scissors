let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function playRound(humanChoice) {
  if (gameOver) return;

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";
  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `You lose ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  let results = document.querySelector("#results");

  if (!results) {
    results = document.createElement("div");
    results.id = "results";
    document.body.appendChild(results);
  }

  results.textContent = result;

  let scoreDisplay = document.querySelector("#score");

  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    let winner = humanScore === 5 ? "Human wins!!!" : "Computer wins!";
    let wins = document.querySelector("#wins");

    wins.textContent = winner;

    gameOver = true;
  }
}

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
