let numOfTiles = 6;
let tiles = [];
for (let i = 0; i < numOfTiles; i++) {
  tiles[i] = document.getElementById(i.toString());
}

let x;
let correctColor;

let tries;

let gameRunning;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  tries = 0;
  document.getElementById("triesCount").textContent = "Tries Taken: 0";

  for (let i = 0; i < numOfTiles; i++) {
    tiles[i].style.background = getRandomColor();
  }

  x = Math.floor(Math.random() * numOfTiles);
  correctColor = tiles[x].style.background;

  document.getElementById("header").style.backgroundColor = "#ffb6c1";
  document.getElementById("header-clue").innerHTML = correctColor;

  gameRunning = true;
}

for (let i = 0; i < numOfTiles; i++) {
  tiles[i].addEventListener("click", () => {
    if (!gameRunning) {
      return;
    }

    tries++;
    document.getElementById("triesCount").textContent = "Tries Taken: " + tries;
    if (tiles[i].style.background == correctColor) {
      for (let i = 0; i < numOfTiles; i++) {
        tiles[i].style.background = correctColor;
      }
      document.getElementById("header").style.background = correctColor;
      gameRunning = false;
    } else {
      tiles[i].style.background = "black";
    }
  });
}

document.getElementById("newGameBtn").addEventListener("click", newGame);

function detachListners() {
  for (let i = 0; i < numOfTiles; i++) {
    tiles[i].enabl;
  }
}
