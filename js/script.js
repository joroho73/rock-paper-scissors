//declare variables to record the score
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection){
    //get player choice
    let playerSel = playerSelection.toLowerCase();
    // enable shorthand of r,p or c.
    if (playerSel[0] === "r"){
        playerSel = "rock";
    }else if(playerSel[0] === "p"){
        playerSel = "paper";
    }else if (playerSel[0] === "s"){
        playerSel = "scissors";
    }

    // get computer choice
    let computerSel = computerSelection.toLowerCase();
    console.log(`p: ${playerSel}, c: ${computerSel} `);

    // create if statement for each result (draw, win, loose):

    //draw
    if(    (playerSel === 'rock' && computerSel === 'rock') 
        || (playerSel === 'paper' && computerSel === 'paper') 
        || (playerSel === 'scissors' && computerSel === 'scissors')){
        return `Draw! p: ${playerSel} | c: ${computerSel}`;
    }
    //win
    else if(
           (playerSel === 'rock' && computerSel === 'scissors')
        || (playerSel === 'paper' && computerSel === 'rock')
        || (playerSel === 'scissors' && computerSel === 'paper')){
        playerScore++;
        return `You win! ${playerSel} beats ${computerSel}`;
    }
    //loose
    else if(
            (playerSel === 'rock' && computerSel === 'paper')
            || (playerSel === 'paper' && computerSel === 'scissors')
            || (playerSel === 'scissors' && computerSel === 'rock')){
        computerScore++;
        return `You loose! ${computerSel} beats ${playerSel}`;
    }
    // default return - caused by incorrect player input
    else {
        return `error: player selected: ${playerSel}, computer selected: ${computerSel}`;
    }
}

function game(){

    // get choice from user
    let userChoice = prompt("Lets play! Enter 'rock', 'paper' or 'scissors':");

    //get choice from computer
    let computerChoice = getComputerChoice();
    //console.log(computerChoice);


    //send both to playRound()
    console.log(playRound(userChoice,computerChoice));
    console.log(`Current scores are: player: ${playerScore}, computer: ${computerScore}`)

    //repeat until either the player or computer score = 5
    if (playerScore < 5 && computerScore < 5 ){
        game();
    }
    //declare winner and clear results
    else {
        if (playerScore == 5) {
            alert(`You win ${playerScore} to ${computerScore}!`);
        }else{
            alert(`You loose ${computerScore} to ${playerScore}!`);
        }
        
    }

}

game();