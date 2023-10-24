//record initial score
let playerScore = 0;
let computerScore = 0;
let scorePara = document.querySelector('.currentScore');
let resultPara = document.querySelector('.currentResult');
let playerScoreDisplay = document.querySelector('.playerScoreDisplay');
let computerScoreDisplay = document.querySelector('.computerScoreDisplay');
let finalResult = document.querySelector('.finalResult');


//choose rock, paper or scissors randomly for the computer
//using getRandomNumber()
function getComputerChoice(){
    const choiceArray = ['rock','paper','scissors'];
    let choice = getRandomNumber();
    return choiceArray[choice];
}

function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}
function updateScore(score, result){
    scorePara.innerText = score;
    resultPara.innerText = result;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
}

function playRound(playerSel){
    finalResult.innerText = '';

    // get computer choice
    const computerSel = getComputerChoice();
    const result = `${playerSel} -vs- ${computerSel}:`;
 
    //if statement for each result (draw, win, loose):
    //draw
    if(    (playerSel === 'rock' && computerSel === 'rock') 
        || (playerSel === 'paper' && computerSel === 'paper') 
        || (playerSel === 'scissors' && computerSel === 'scissors')){
        updateScore(result,`draw!`);
    }
    //win
    else if(
           (playerSel === 'rock' && computerSel === 'scissors')
        || (playerSel === 'paper' && computerSel === 'rock')
        || (playerSel === 'scissors' && computerSel === 'paper')){
        playerScore++;
        updateScore(result,`you win! ${playerSel} beats ${computerSel}`);
    }
    //loose
    else if(
               (playerSel === 'rock' && computerSel === 'paper')
            || (playerSel === 'paper' && computerSel === 'scissors')
            || (playerSel === 'scissors' && computerSel === 'rock')){
        computerScore++;
        updateScore(result,`you loose! ${computerSel} beats ${playerSel}`);
    }

    if (playerScore == 5){
        finalResult.innerText = `Game Over. You win! ${playerScore} to ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        finalResult.innerText = `Game Over. You loose ${computerScore} to ${playerScore}`;
        playerScore = 0;
        computerScore = 0;
    } 
}

let btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => playRound('rock'));

let btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => playRound('paper'));

let btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => playRound('scissors'));