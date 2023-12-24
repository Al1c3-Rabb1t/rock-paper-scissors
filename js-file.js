let gameCounter = 0;
let playerWins = 0;
let computerWins = 0;
let drawNumb = 0;
let playerChoice = '';
let computerChoice = '';

gameStart()

function gameStart() {
    
    playerChoice = prompt("Make your choice! Rock, paper, or scissors?");
    inputCheck(playerChoice);

}

function inputCheck(playerChoice) {
    
    if(playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
        inputCorrection(playerChoice)
    } else {
        computerSelection()
    }

}

function inputCorrection(playerChoice) {
    
    playerChoice = prompt('There was an error, please choose rock, paper, or scissors? (make sure your spelling is correct)')
    
    return inputCheck(playerChoice);

}

function computerSelection() {
    
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        computerChoice = 'rock';
    } else if (computerChoice == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    game()

}

function game() {
    
    let winner = ''
    
    if (playerChoice == computerChoice) {
        winner = 'draw'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        winner = 'computer'
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        winner = 'computer'
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        winner = 'computer'
    } else {
        winner = 'player'
    }
    
    gameResults(winner)
}

function gameResults(winner) {
    
    gameCounter += 1;

    if(winner == 'player') {
            playerWins += 1;
            
            alert(`
                Game ${gameCounter}/5 complete!
                You won! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}
            `)
        
        } else if (winner == 'computer') {
            computerWins += 1;
            
            alert(`
                Game ${gameCounter}/5 complete!
                You lost! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}
            `)
        
        } else {
            drawNumb += 1;

            alert(`
                Game ${gameCounter}/5 complete
                It was a draw! No one wins this round.
            `)
            
        }

    if(gameCounter == 5) {
        alert(`
            All games complete!
            Your score: ${playerWins}
            Computer score: ${computerWins}
            Draws: ${drawNumb}
        
            Thank you for playing!`)
        
        let newGame = confirm('play a new set of games?')
        
        if(newGame == true) {
            gameReset()
        } else {
            return;
        }

    } else {
        gameStart()
    }
}

function gameReset() {
    gameCounter = 0;
    playerWins = 0;
    computerWins = 0;
    drawNumb = 0;

    gameStart();
}