var board;
var score = 0;
var col = 4;
var row = 4;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById("box").append(tile);
    }
  }
}
function hasEmptyFile() {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] == 0) return true;
    }
  }
  return false;
}
function setTwo() {
  if (!hasEmptyFile()) {
    return;
  }

  let found = false;
  while (!found) {
    let r = Math.floor(Math.random() * 4);
    let c = Math.floor(Math.random() * 4);

    if (board[r][c] == 0) {
      board[r][c] = 2;
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      tile.innerText = "2";
      tile.classList.add("x2");
      found = true;
    }
  }
}

function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = "";
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num;
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192");
    }
  }
}

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
    setTwo();
  } else if (e.code == "ArrowRight") {
    slideRight();
    setTwo();
  } else if (e.code == "ArrowUp") {
    slideUp();
    setTwo();
  } else if (e.code == "ArrowDown") {
    slideDown();
    setTwo();
  }
});

function slideLeft() {
  for (let r = 0; r < row; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;

    for (let c = 0; c < col; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
function slideRight() {
  for (let r = 0; r < row; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    row.reverse();
    board[r] = row;

    for (let c = 0; c < col; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
function slideUp() {
  for (c = 0; c < col; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);

    for (let r = 0; r < 4; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
function slideDown() {
  for (c = 0; c < col; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();

    for (let r = 0; r < 4; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slide(row) {
  //[0,2,2,2]
  row = row.filter((x) => x != 0);
  //[2,2,2]
  for (let r = 0; r < row.length; r++) {
    if (row[r] == row[r + 1]) {
      row[r] = 2 * row[r];
      row[r + 1] = 0;
      score += row[r];
    }
  }
  //[4,0,2]
  row = row.filter((x) => x != 0);
  //[4,2]

  while (row.length < col) {
    row.push(0);
  }
  //   console.log(row);
  document.getElementById("score").innerText = score;
  return row;
}
