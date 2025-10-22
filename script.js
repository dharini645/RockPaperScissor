let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultDiv = document.getElementById("matchMessage");
const historyList = document.getElementById("historyList");

function play(userChoice) {
    const choices = ["Rock", "Paper", "Scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if(userChoice === computerChoice){
        result = "Draw";
    } else if(
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ){
        result = "You Win";
        userScore++;
    } else {
        result = "Computer Wins";
        computerScore++;
    }

    // Update scores
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;

    // Display result
    resultDiv.textContent = `You chose ${userChoice}, Computer chose ${computerChoice} → ${result}`;

    // Add to history
    const li = document.createElement("li");
    li.textContent = `You: ${userChoice}, Computer: ${computerChoice} → ${result}`;
    historyList.prepend(li);

    // Check overall winner
    checkOverallWinner();
}

function checkOverallWinner() {
    if(userScore === 10){
        resultDiv.textContent = "🎉 You won the match!";
        resetGame();
    } else if(computerScore === 10){
        resultDiv.textContent = "💻 Computer won the match!";
        resetGame();
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScoreSpan.innerHTML = 0;
    computerScoreSpan.innerHTML = 0;
    historyList.innerHTML = "";
}
