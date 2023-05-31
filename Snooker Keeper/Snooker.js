//values for each snooker ball and FOUL button.
const scoreValues = { 
  red: 1,
  yellow: 2,
  green: 3,
  brown: 4,
  blue: 5,
  pink: 6,
  black: 7,
  foul: -7,
 };


 //What should this app do?
 //Click on the different colored snooker balls or FOUL button to add or subtract to their respective player's score. 
 //Click NEW GAME at the top to set both player's scores back to 0.

 //selecting each individual player's score.
 let player1Score = document.getElementById('player1Score');

let player2Score = document.getElementById('player2Score');
 

//loop through all the .ball class and attach an event listener to each of them. Note the "foul" button is considered a "ball" for simplicity's sake.
const ball = document.querySelectorAll(".ball");

function updateScore(playerScore, scoreChange) {
  let currentScore = parseInt(playerScore.innerText.split(' ')[2]);

  let newScore = currentScore + scoreChange;

  playerScore.innerText = `Player Score: ${newScore}`;
}

ball.forEach((element) => {
  element.addEventListener("click", function() {
    const ballClass = element.classList[1];
    console.log(ballClass);

    const scoreChange = scoreValues[ballClass];
    console.log(scoreChange);

    const playerSection = element.closest('section');

    const playerScore = playerSection.nextElementSibling.querySelector('h2');

    if(playerScore === player1Score) {
      updateScore(playerScore, scoreChange);
    } else if (playerScore === player2Score) {
      updateScore(playerScore, scoreChange);
    }

    updateScore(playerScore, scoreChange);

  });
});


