let play1;
let play2;
let play1Score = 0;
let play2Score = 0;
let play2Cap;

function game(){

    // computer choses its weapon
function computerPlay() {


    let val = (Math.floor(Math.random() * 3));
    if (val === 0) {
        play1 = "Rock"
    } else if (val === 1) {
        play1 = "Paper"
    } else if (val === 2) {
        play1 = "Scissors"
    }
    console.log(play1);
    return play1;

}
computerPlay();



function player2Play() {
    play2 = prompt("Rock Paper, or Scissors");
    play2Cap = play2.charAt(0).toUpperCase() + play2.slice(1).toLowerCase();
    play2 = play2Cap
    console.log(play2);
    evaluate(play1, play2);
}

player2Play();

function evaluate(play1, play2) {

    if (play1 === "Rock" && play2 === "Scissors") {
        alert("Player 1 wins");
        play1Score ++;
    } else if (play1 === "Rock" && play2 === "Rock") {
        alert("Draw");
    } else if (play1 === "Paper" && play2 === "Scissors") {
        alert("Player 2 wins");
        play2Score ++;
    } else if (play1 === "Paper" && play2 === "Paper") {
        alert("Draw");
    } else if (play1 === "Scissors" && play2 === "Paper") {
        alert("Player 1 Wins!!");
        play1Score ++;
    } else if (play1 === "Scissors" && play2 === "Scissors") {
        alert("Draw");
    } else {
        alert("Player 2 Wins!!");
        play2Score ++;
    }
}

}

for(let i=0; i<=4; i++){
game();


if(i === 4){
    alert(`Player 1 score is ${play1Score}, Player 2 score is ${play2Score}`);

}}