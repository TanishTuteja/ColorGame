let numOfTiles = 6;
let tiles = [];
for (let i = 0; i < numOfTiles; i++) {
  tiles[i] = document.getElementById(i.toString());
}

let x;
let correctColor;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  for (let i = 0; i < numOfTiles; i++) {
    tiles[i].style.background = getRandomColor();
  }

  x = Math.floor(Math.random() * numOfTiles);
  correctColor = tiles[x].style.background;

  document.getElementById("header-clue").innerHTML = correctColor;
}

for (let i = 0; i < numOfTiles; i++) {
  tiles[i].addEventListener("click", function () {
    if (tiles[i].style.background == correctColor) {
      for (let i = 0; i < numOfTiles; i++) {
        tiles[i].style.background = correctColor;
      }
      document.getElementById("header").style.background = correctColor;
    } else {
      tiles[i].style.background = "black";
    }
  });
}
