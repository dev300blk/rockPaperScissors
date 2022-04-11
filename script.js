let computerSelection;
let playerSelection;
let ComputerScore = 0;
let player1Score = 0;
const buttons = document.querySelectorAll('.btn');


function game() {

   


        // player 1 choses weapon
function check(e){
    if(e.target.classList.contains('rock')){
        console.log(computerSelection);
            console.log('rock');
            playerSelection = 'Rock';
            playRound(playerSelection, computerSelection);
    } else if (e.target.classList.contains('paper')){
        console.log(computerSelection);
            console.log('Paper')
            playerSelection = 'Paper';
            playRound(playerSelection, computerSelection);
    } else if(e.target.classList.contains('scissors')){
        console.log(computerSelection);
            console.log('Scissors');
            playerSelection = 'Scissors';
            playRound(playerSelection, computerSelection);
    }
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',(e)=>{
     check(e);
    })
}


// computer choses weapon
        function computerPlay() {
            // create random num between 0-2
            let randomNum = Math.floor(Math.random() * 3);
            //    convert randomNum to weapon
            if (randomNum === 0) {
                computerSelection = 'Rock';
            } else if (randomNum === 1) {
                computerSelection = 'Paper';
            } else if (randomNum === 2) {
                computerSelection = 'Scissors'
            }
        }
        computerPlay();

        // evaluation of players weapons returning a winner
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === 'Rock' && computerSelection === 'Rock') {
                console.log('Draw');
            } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
                console.log('Paper beats Rock. Computer wins round!');
                ComputerScore++;
            } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
                console.log('Rock beats Scissors. Player 1 wins!!');
                player1Score++;
            } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
                console.log('Draw');
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                console.log('Paper beats Rock. Player 1 wins!');
                player1Score++;
            } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
                console.log('Scissors beats Paper. Computer wins!');
                ComputerScore++;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
                console.log('Draw');
            } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
                console.log('Rock beats Scissors. Computer wins!');
                ComputerScore++;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                console.log('Scissors beats Paper. Player 1! wins!');
                player1Score++
            } else {
                console.log('error');
            }

        }

        function score(player1Score,ComputerScore){
            if(player1Score > ComputerScore){
                console.log('Player 1 wins Game!!!!!!');
            } else if(player1Score<ComputerScore){
                console.log('computer Wins!!!!!!!');
            } else {
                console.log('draw');
            }
    }

    

    score(player1Score,ComputerScore);


    console.log('game over');
    console.log(player1Score, ComputerScore);

    

   
     
}


game();