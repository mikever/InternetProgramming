var cells;
var swapped;

function swap (firstCell, secondCell) {
  swapped = true;
  secondCell.innerHTML = firstCell.innerHTML;
  firstCell.innerHTML = "";
}

function placeNumbers () {
  var numbers = [];
  var randomLoc;
  var temp;

  for (var i = 0; i < 16; i++) {
    numbers[i] = i;
  }
  for (var i = 0; i < 16; i++) {
    randomLoc = Math.floor(Math.random() * 15 + 1);
    temp = numbers[i];
    numbers[i] = numbers[randomLoc];
    numbers[randomLoc] = temp;
  }

  i = 0;
  for (var rows = 0; rows < 4; rows++) {
    for (var cols = 0; cols < 4; cols++) {
      if (numbers[i] != 0) {
        cells[rows][cols].innerHTML = numbers[i];
      } else {
        cells[rows][cols].innerHTML = "";
      }
      i++;
    }
  }
}

function setup () {
  cells = [
    document.getElementById("cell00"),
    document.getElementById("cell02"),
    document.getElementById("cell03")],
    [document.getElementById("cell10"),
    document.getElementById("cell11"),
    document.getElementById("cell12"),
    document.getElementById("cell13")],
    [document.getElementById("cell20"),
    document.getElementById("cell21"),
    document.getElementById("cell22"),
    document.getElementById("cell23")],
    [document.getElementById("cell30"),
    document.getElementById("cell31"),
    document.getElementById("cell32"),
    document.getElementById("cell33")
  ];
  placeNumbers();
}

function checkWinner () {
  var win = true;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (!(cells[i][j].innerHTML == i * 4 + j + 1))
      if (!(i == 3 && j == 3))
      win = false;
    }
  }
  if (win) {
    alert("Congratulations! You won!");
    if (window.prompt("Play Again?", "yes"))
    placeNumbers();
  }
}

function doClick(row, col) {
  var top = row - 1;
  var bottom = row + 1;
  var left = col - 1;
  var right = col + 1;
  swapped = false;

  if (top != -1 && cells[top][col].innerHTML == "") {
    swap(cells[row][col], cells[top][col]);
  } else if (right != 4 && cells[row][right].innerHTML == "") {
    swap(cells[row][col], cells[row][right]);
  } else if (bottom != 4 && cells[bottom][col].innerHTML == "") {
    swap(cells[row][col], cells[bottom][col]);
  } else if (left != -1 && cells[row][left].innerHTML == "") {
    swap(cells[row][col], cells[row][left]);
  } else {
    alert("Illegal move.");
  }
  checkWinner();
}
