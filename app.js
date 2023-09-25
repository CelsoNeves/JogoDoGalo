const wrapper = document.getElementById("wrapper");
const headerTurn = document.getElementById('head-title');

let playerTurn = "x";
let turn = 0;

let boardStatus = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
];
function changeColor(a,b,c) {
  const x = document.getElementById(a);
  const y = document.getElementById(b);
  const z = document.getElementById(c);
  x.style.backgroundColor = 'green';
  y.style.backgroundColor = 'green';
  z.style.backgroundColor = 'green';
}
function checkWinner() {
  let winner = " ";

  //horizontal
  if (boardStatus[0] === boardStatus[1] && boardStatus[1] === boardStatus[2] && boardStatus[0] != 0) {
    winner = `Player ${boardStatus[0]}`;
    changeColor('0','1','2');
  }
  if (boardStatus[3] === boardStatus[4] && boardStatus[4] === boardStatus[5] && boardStatus[3] != 0) {
    winner = `Player ${boardStatus[3]}`;
    changeColor('3','4','25');
  }
  if (boardStatus[6] === boardStatus[7] && boardStatus[7] === boardStatus[8] && boardStatus[6] != 0) {
    winner = `Player ${boardStatus[6]}`;
    changeColor('6','7','8');
  }

  //Vertical
  if (boardStatus[0] === boardStatus[3] && boardStatus[3] === boardStatus[6] && boardStatus[0] != 0) {
    winner = `Player ${boardStatus[0]}`;
    changeColor('0','3','6');
  }
  if (boardStatus[1] === boardStatus[4] && boardStatus[4] === boardStatus[7] && boardStatus[1] != 0) {
    winner = `Player ${boardStatus[1]}`;
    changeColor('1','4','7');
  }
  if (boardStatus[2] === boardStatus[5] && boardStatus[5] === boardStatus[8] && boardStatus[2] != 0) {
    winner = `Player ${boardStatus[2]}`;
    changeColor('2','5','8');
  }

  //Diagonal
  if (boardStatus[0] === boardStatus[4] && boardStatus[4] === boardStatus[8] && boardStatus[0] != 0) {
    winner = `Player ${boardStatus[0]}`;
    console.log(winner);
    changeColor('0','4','8');
  }
  if (boardStatus[2] === boardStatus[4] && boardStatus[4] === boardStatus[6] && boardStatus[2] != 0) {
    winner = `Player ${boardStatus[2]}`;
    changeColor('2','4','6');
  }

  if (winner !== " ") {
    const playerW = winner == 1 ? '0' : 'x'
    headerTurn.innerHTML = `Winner Player ${playerW}`;
    setInterval(() => {
      location.reload();
    },2000);
  }
  
  if(turn >= 9) {
    headerTurn.innerHTML = 'Draw!';
    setInterval(() => {
      location.reload();
    },2000);
  }
}

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  
  //console.dir(event.target.id);
  if (boardStatus[event.target.id] == 0) {
    event.target.innerHTML = playerTurn;
    turn++;

    if (playerTurn == "x") {
      boardStatus[event.target.id] = 1;
      playerTurn = "0";
      headerTurn.innerHTML = 'Player 0 Turn';
      event.target.style = "cursor: not-allowed;";
    } else {
      boardStatus[event.target.id] = 2;
      playerTurn = "x";
      headerTurn.innerHTML = 'Player X Turn';
      event.target.style = "cursor: not-allowed;";
    }
    checkWinner();
  }
});
