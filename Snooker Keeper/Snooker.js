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

 const balls = document.querySelectorAll('.ball');
 balls.forEach(ball => { 
  ball.addEventListener('click', handleClick);
  })

 function handleClick(event) { 
  const element = event.target;
  const playerScoreElement = element.parentElement.querySelector('.playerScore h2');
  console.log(playerScoreElement);

  if (!playerScoreElement) {  
    return;
  }

  let playerScore = Number(playerScoreElement.textContent.split(' ')[2]);

  if(element.classList.contains('ball')) { 
    const ballColor = element.classList.item(1);
    const ballScore = getBallScore(ballColor);
    playerScore += ballScore;
   } else if (element.classList.contains('foul')) { 
    playerScore += handleFoul(playerScore);
    }

    updatePlayerScore(playerScoreElement, playerScore)
  }

  function getBallScore(ballColor) {
    return scoreValues[ballColor];
  }

  function handleFoul(playerScore) { 
    const foulScore = scoreValues.foul;
    playerScore -= foulScore;
    if (playerScore < 0) { 
      playerScore = 0;
     }
     return playerScore;
  }

   function updatePlayerScore(playerScoreElement, playerScore) {
    playerScoreElement.textContent = `Player 1 Score: ${playerScore}`;
   }

   console.log(scoreValues);



