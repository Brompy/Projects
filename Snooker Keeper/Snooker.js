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
 let player1Score = document.getElementById('player1Score').innerText.split(' ')[3];

let player2Score = document.getElementById('player2Score').innerText.split(' ')[3];
 
    function updateScore(event) {
      const ball = event.target;
 const color = ball.classList.item(1);
//   console.log(color);
//   // const playerId = ball.closest('section').id;
//   const playerScoreElement = ball.closest('.playerScore').querySelector('h2');
//   console.log(playerScoreElement);
//   const playerScoreText = playerScoreElement.textContent;
//   const playerScore = Number(playerScoreText.match(/\d+/)[0]);
//   console.log(playerScore);
//   const ballScore = scoreValues[color];
//   playerScoreElement.textContent += `Player Score: ${playerScore + ballScore}` 
// }
//^ This function is pretty bloated and is doing too much. It is better to divvy up the responsibilities of DOM traversal to a separate function.


