console.log("Hello, welcome~");

function getComputerChoice(){
    let compChoice;
    compChoice = Math.floor(Math.random()*3);

    if(compChoice === 0){
        return "rock";
    }
    else if(compChoice === 1){
        return "paper";
    }
    else if(compChoice === 2){
        return "scissors";
    }
}


function getHumanChoice(){
    // let choice = prompt("Choose rock paper scissors: ", 0);
    // return choice;

    return prompt("Choose rock paper scissors: ", "rock");
}

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase(); //make any input into lowercase

    if(humanChoice === computerChoice){
        console.log("It's a DRAW!\n");
    }
    else if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}\n`);
        humanScore+=1;
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}\n`);
        humanScore+=1;
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}\n`);
        humanScore+=1;
    }
    else{
        console.log(`You lose... ${computerChoice} beats ${humanChoice}\n`);
        computerScore+=1;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    let humanSelection = getHumanChoice();
    let compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);

    humanSelection = getHumanChoice();
    compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);

    humanSelection = getHumanChoice();
    compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);

    humanSelection = getHumanChoice();
    compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);

    humanSelection = getHumanChoice();
    compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);

    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if(humanScore>computerScore){
        alert("You WIN!")
    }
    else{
        alert("Oh man... Computer win.")
    }
}

playGame();