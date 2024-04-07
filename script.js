function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    document.getElementById('player-choice').textContent = `Your Choice: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;
  
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('game-result').textContent = result;
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice ==='paper'))

        

    
    {
    return 'You Win!';
}
return 'Computer Wins!';}
