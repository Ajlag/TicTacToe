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

game = document.getElementById("container");
footerDiv = document.getElementById("footer");
headerDiv = document.getElementById("header");
const gameMatrix = createTable();
let nextMove = 0;
let gameOver = false;
let winSimbol = "";
let player1 = 0;
let player2 = 0;

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
    return;
  }
  nextMove % 2 == 0 ? (e.target.innerText = "X") : (e.target.innerText = "O");
  e.target.style.backgroundColor = "blue";
  nextMove++;

  chechWin();
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
  gameMatrix.map((arr) =>
    arr.map((e) => {
      e.innerHTML = "";
      e.style.backgroundColor = "black";
      e.id = "new";
      gameOver = false;
    })
  );
}

function createPlayer() {
  const player1Div = document.createElement("div");
  player1Div.className = "player";
  headerDiv.appendChild(player1Div);

  const name = document.createElement("p");
  name.innerText = "Player 1";
  player1Div.appendChild(name);

  const point = document.createElement("p");
  point.innerText = player1;
  player1Div.appendChild(point);

  const player2Div = document.createElement("div");
  player2Div.className = "player2";
  headerDiv.appendChild(player2Div);

  const name1 = document.createElement("p");
  name1.innerText = "Player 2";
  player2Div.appendChild(name1);

  const point2 = document.createElement("p");
  point2.innerText = player2;
  player2Div.appendChild(point2);
}

createPlayer();
whoGetsPoint();
function whoGetsPoint() {
  if (winSimbol !== "") {
    return winSimbol === "X" ? player1++ : player2++;
  }
}
