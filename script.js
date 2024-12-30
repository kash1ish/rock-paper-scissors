function getComputerChoice(){
    const randomNum =Math.floor(Math.random()*3);
    console.log(randomNum)
    if(randomNum === 1){
        return "Rock";
    }
    else if(randomNum === 0){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Choose between the three");
    return choice;
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("It is a tie!");
        return 0;
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'paper' || 
        humanChoice == 'paper' && computerChoice == 'rock'
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice} `);
        return 1;
    }
    else{
        console.log("You Lose!");
        return 2;
    }
}

    function playGame(){
        let humanScore =0 ;
        let computerScore = 0;

        for(let i=1;i<=5;i++){
            console.log(`Round ${i}:`);
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();

            let result = playRound(humanSelection,computerSelection);
                if(result === 1){
                    humanScore += 1;
                }
                else if(result === 2) {
                    computerScore +=1;
                }
            console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
        }

    if(humanScore > computerScore){
        console.log(`Congrats you win. Your score: ${humanScore}`);
    }
    else if(computerScore>humanScore){
        console.log(`You lose! Computer score: ${computerScore} and Your score: ${humanScore}`)
    }
    else{
        console.log(`It is a tie. Computer score: ${computerScore} and Your score: ${humanScore}`);
    }
}
playGame();