let computerSelection;
let playerSelection;
let ComputerScore = 0;
let player1Score = 0;


function game() {

    for (let i = 0; i < 5; i++) {

        // player 1 choses weapon
        playerSelection = prompt('pick');


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
            console.log(computerSelection);
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


        playRound(playerSelection, computerSelection);

    }
    console.log('game over');
    console.log(player1Score, ComputerScore);

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
}
game();