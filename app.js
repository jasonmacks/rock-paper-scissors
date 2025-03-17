const rps = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  const computerChoice = Math.floor(Math.random() * rps.length);
  return rps[computerChoice];
};

const getHumanChoice = function () {
  let humanChoice = prompt("Rock, Paper, Scissors").toLowerCase();
  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;
let ties = 0;

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    ties++;
    console.log("Tie: Try again!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("Human scores a point!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("Human scores a point!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("Human scores a point!");
  } else {
    computerScore++;
    console.log("Computer scores a point!");
  }
};

const playGame = function () {
  for (i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round ${i}:`);
    playRound(humanSelection, computerSelection);
  }
};

playGame();

console.log(`Human: ${humanScore}, Computer: ${computerScore}, Ties: ${ties}`);
