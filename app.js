//funkcije
//create table
//restart table
//racunaj pobednika
//funkcija koja updejtuje skore
//dve varijable koje prate score
//callback on clikc

// Pamti score
// restartuje score
// pobednik je ko dodje do 5

const game = document.getElementById("container");
const footerDiv = document.getElementById("footer");
const headerDiv = document.getElementById("header");

const playerX = document.querySelector("#player1");
const playerO = document.querySelector("#player2");

const gameMatrix = createTable();
let nextMove = 0;
let gameOver = false;
let winSimbol = "";
let player1 = 0;
let player2 = 0;

const player1Div = document.querySelector(".playX");
const player2Div = document.querySelector(".playO");
const newGameBtn = document.querySelector("#newgame");

newGameBtn.addEventListener("click", newgame);
player1Div.id = "playersTurn";

function createTable() {
  return new Array(3).fill(Array(3).fill(null)).map((arr) =>
    arr.map(() => {
      const gameDiv = document.createElement("div");
      gameDiv.innerHTML = "";
      gameDiv.className = "game-div";
      gameDiv.addEventListener("click", handleGameDiv);
      game.appendChild(gameDiv);
      return gameDiv;
    })
  );
}

function handleGameDiv(e) {
  if (e.target.innerText !== "") {
    return;
  }

  if (gameOver) {
    player1Div.id = "";
    player2Div.id = "";
    return;
  }

  if (nextMove % 2 == 0) {
    e.target.innerText = "X";
    player1Div.id = "";
    player2Div.id = "playersTurn";
  } else {
    e.target.innerText = "O";
    player1Div.id = "playersTurn";
    player2Div.id = "";
  }

  e.target.className = "game-div game-div-clicked";
  nextMove++;
  chechWin();
  whoGetsPoint();
}

function chechWin() {
  for (let i = 0; i < 3; i++) {
    if (
      gameMatrix[i][0].innerText == gameMatrix[i][1].innerText &&
      gameMatrix[i][1].innerText == gameMatrix[i][2].innerText &&
      gameMatrix[i][0].innerText !== ""
    ) {
      gameMatrix[i][0].id = "win";
      gameMatrix[i][1].id = "win";
      gameMatrix[i][2].id = "win";
      winSimbol = gameMatrix[i][0].innerText;
      gameOver = true;
      return;
    }

    if (
      gameMatrix[0][i].innerText == gameMatrix[1][i].innerText &&
      gameMatrix[1][i].innerText == gameMatrix[2][i].innerText &&
      gameMatrix[0][i].innerText !== ""
    ) {
      gameMatrix[0][i].id = "win";
      gameMatrix[1][i].id = "win";
      gameMatrix[2][i].id = "win";
      gameOver = true;
      winSimbol = gameMatrix[0][i].innerText;
      return;
    }
  }

  if (
    gameMatrix[0][0].innerText === gameMatrix[1][1].innerText &&
    gameMatrix[1][1].innerText === gameMatrix[2][2].innerText &&
    gameMatrix[1][1].innerText !== ""
  ) {
    gameMatrix[0][0].id = "win";
    gameMatrix[1][1].id = "win";
    gameMatrix[2][2].id = "win";
    gameOver = true;
    winSimbol = gameMatrix[0][0].innerText;
    return;
  }

  if (
    gameMatrix[0][2].innerText === gameMatrix[1][1].innerText &&
    gameMatrix[1][1].innerText === gameMatrix[2][0].innerText &&
    gameMatrix[0][2].innerText !== ""
  ) {
    gameMatrix[0][2].id = "win";
    gameMatrix[1][1].id = "win";
    gameMatrix[2][0].id = "win";
    gameOver = true;
    winSimbol = gameMatrix[0][2].innerText;
    return;
  }
}

function createButton() {
  const button = document.createElement("button");
  button.innerHTML = "Restart";
  button.className = "game-button";
  button.addEventListener("click", reset);
  footerDiv.appendChild(button);
}

restaruj = createButton();
function reset() {
  nextMove = 0;
  player1Div.id = "playersTurn";
  player2Div.id = "none";
  gameMatrix.map((arr) =>
    arr.map((e) => {
      e.innerHTML = "";
      e.id = "";
      e.className = "game-div";
      gameOver = false;
    })
  );
}

function newgame() {
  player1 = 0;
  player2 = 0;
  playerX.innerText = player1;
  playerO.innerText = player2;
  reset();
}
whoGetsPoint();
function whoGetsPoint() {
  if (gameOver === true || winSimbol !== "") {
    winSimbol === "X" ? player1++ : player2++;
    winSimbol === "X"
      ? (playerX.innerText = player1)
      : (playerO.innerText = player2);
    winSimbol = "";
  }
}
