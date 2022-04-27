const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const computerMove = () => {
  let prob = Math.floor(Math.random()* 3) + 1;
  if (prob === 1){
    return ROCK;
  }
  else if (prob === 2){
    return PAPER; 
  }
  else{
    return SCISSORS; 
  }
  

}

console.log(computerMove()); 
console.log(computerMove()); 
console.log(computerMove()); 

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});


