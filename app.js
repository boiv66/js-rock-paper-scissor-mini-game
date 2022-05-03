const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
let startGame = true; 

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  console.log(selection);
  if (selection === 'QUIT' || selection === 'Q'){
    startGame = false; 
    return; 
  }
  else if (
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

function determineWinner(player, computer){
  const playerWin = 'Congratulation!!! You win'; 
  const computerWin = 'Sorry, computer won try again!!'
  const draw = 'Draw. Better luck next time'
  if ((player === 'PAPER' && computer === 'ROCK') || (player==='ROCK'&& computer ==='SCISSOR')|| (player==='SCISSORS'&&computer==='PAPER')){
    return playerWin;
  }
  else if (player === computer){
    return draw; 
  }
  
  return computerWin; 
}


console.log(computerMove()); 
console.log(computerMove()); 
console.log(computerMove()); 

startGameBtn.addEventListener('click', function() {
  
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  while (startGame){
  //console.log(playerSelection);
  const computerChoice = computerMove();
  const result = determineWinner(playerSelection, computerChoice); 
  alert(`you played ${playerSelection}, the computer choice is ${computerChoice}. ${result}` ); 
  }
});


