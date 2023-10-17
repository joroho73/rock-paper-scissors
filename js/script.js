//declare variables to record the score
let playerScore = 0;
let computerScore = 0;

//choose rock, paper or scissors randomly for the computer
function getComputerChoice(){
    const choiceArray = ['rock','paper','scissors'];
    let choice = getRandomNumber();
    return choiceArray[choice];

}

function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection){
    // declare variables for player  selection
    let playerSel = playerSelection.toLowerCase();
    // enable shorthand of r,p or c.
    if (playerSel[0] === "r"){
        playerSel = "rock";
    }else if(playerSel[0] === "p"){
        playerSel = "paper";
    }
    else if (playerSel[0] === "s"){
        playerSel = "scissors";
    }
    // declare variable for computer selection
    let computerSel = computerSelection.toLowerCase();
    console.log(`p: ${playerSel}, c: ${computerSel} `);

    // create if statement for each option:
    //rock - rock
    if(playerSel === 'rock' && computerSel === 'rock'){
        return `Draw! p: ${playerSel} | c: ${computerSel}`;
    }
    //rock - paper
    else if(playerSel === 'rock' && computerSel === 'paper'){
        computerScore++;
        return `You loose! ${computerSel} beats ${playerSel}`;
    }
    //rock - scissors
    else if(playerSel === 'rock' && computerSel === 'scissors'){
        playerScore++;
        return `You win! ${playerSel} beats ${computerSel}`;
    }
    //paper - rock
    else if(playerSel === 'paper' && computerSel === 'rock'){
        playerScore++;
        return `You win! ${playerSel} beats ${computerSel}`;
    }
    //paper - paper
    else if(playerSel === 'paper' && computerSel === 'paper'){
        return `Draw! p: ${playerSel} | c: ${computerSel}`;
    }
    //paper - scissors
    else if(playerSel === 'paper' && computerSel === 'scissors'){
        computerScore++;
        return `You loose! ${computerSel} beats ${playerSel}`;
    }
    //scissors - rock
    else if(playerSel === 'scissors' && computerSel === 'rock'){
        computerScore++;
        return `You loose! ${computerSel} beats ${playerSel}`;
    }
    //scissors - paper
    else if(playerSel === 'scissors' && computerSel === 'paper'){
        playerScore++;
        return `You win! ${playerSel} beats ${computerSel}`;
    }
    //scissors - scissors
    else if(playerSel === 'scissors' && computerSel === 'scissors'){
        return `Draw! p: ${playerSel} | c: ${computerSel}`;
    }
    // default return
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

    //save result to score

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