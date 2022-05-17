
let computerSelection;
let playerSelection;
let computerScore = 0;
let player1Score = 0;
const buttons = document.querySelectorAll('.btn');
const gameDisplay = document.querySelector('.display h1');
console.log(gameDisplay);
const play1Display =document.querySelector('.score1');
const compScoreDisplay =document.querySelector('.score2');


function  round(){

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',(e)=>{
     check(e);
    })
}





function check(e){
    computerPlay();
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

 function playRound(playerSelection, computerSelection) {
            if (playerSelection === 'Rock' && computerSelection === 'Rock') {
                gameDisplay.innerText = 'Draw Son!!';
                console.log('Draw');
            } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
                gameDisplay.innerText = 'Paper beats Rock. Computer wins round!!';
                console.log('Paper beats Rock. Computer wins round!');
                computerScore++;
            } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
                gameDisplay.innerText = 'Rock beats Scissors. Player 1 wins!!';
                console.log('Rock beats Scissors. Player 1 wins!!');
                player1Score++;
            } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
                gameDisplay.innerText = 'Draw, Son!!';
                console.log('Draw');
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                gameDisplay.innerText = 'Paper beats Rock. Player 1 wins!';
                console.log('Paper beats Rock. Player 1 wins!');
                player1Score++;
            } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
                gameDisplay.innerText = 'Scissors beats Paper. Computer wins!';
                console.log('Scissors beats Paper. Computer wins!');
                computerScore++;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
                gameDisplay.innerText = 'Draw, Son!!!';
                console.log('Draw');
            } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
                gameDisplay.innerText = 'Rock beats Scissors. Computer wins!';
                console.log('Rock beats Scissors. Computer wins!');
                computerScore++;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                gameDisplay.innerText = 'Scissors beats Paper. Player 1! wins!'
                player1Score++
                console.log('Scissors beats Paper. Player 1! wins!');
            } else {
                console.log('error');
            }
            console.log(player1Score,computerScore);

            updateScoreBoard(player1Score,computerScore);


            if(player1Score == 5 || computerScore == 5){
                    score(player1Score,computerScore);
            }
        }
       
    }

   
round();


function updateScoreBoard(player1Score,computerScore){
    play1Display.innerText = player1Score;
    console.log(play1Display);
    compScoreDisplay.innerText = computerScore;
}

function score(player1Score,computerScore){
            if(player1Score > computerScore){
                console.log('Player 1 wins Game!!!!!!');
            } else if(player1Score<computerScore){
                console.log('computer Wins Game!!!!!!!');
            } else {
                console.log('draw');
            }
        }
