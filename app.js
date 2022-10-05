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
const gameMatrix = Array(3).fill(Array(3).fill(0));

const simbolX = "X";
const simbolO = "O";
let count = 0;

createTable();

function createTable() {
  for (let i = 0; i < gameMatrix.length; i++) {
    for (let j = 0; j < gameMatrix[i].length; j++) {
      const gameDiv = document.createElement("div");
      gameDiv.innerHTML = "";
      gameDiv.className = "game-div";
      gameMatrix[i][j] = gameDiv;
      gameDiv.addEventListener("click", handleGameDiv);
      gameDiv.style.backgroundColor = "red";
      game.appendChild(gameDiv);
    }
  }
}

function handleGameDiv(e) {
  if (e.target.innerText !== "") {
    return;
  }
  count % 2 == 0 ? (e.target.innerText = "X") : (e.target.innerText = "O");
  count++;
}
