var cells;
var images;
var row = 0;
var col = 0;
var newRow = 0;
var newCol = 0;
var pitfall1Row; var pitfall1Col;
var pitfall2Row; var pitfall2Col;
var pitfall3Row; var pitfall3Col;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup () {
  cells = new Array ([document.getElementById("cell00"),
    document.getElementById("cell01"),
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
    document.getElementById("cell33")]);

    images = new Array (["<img src='images/elf1.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>"],
      ["<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>"],
      ["<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>"],
      ["<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/field.jpg'>",
      "<img src='images/elfhome.png'>"]);

      setImages();
      setPitfalls();
}

function setImages () {
  for (var rows = 0; rows < 4; rows++) {
    for (var cols = 0; cols < 4; cols++) {
		cells[rows][cols].innerHTML = images[rows][cols];
    }
  }
}

function setPitfalls () {

  pitfall1Row = getRandomInt(0, 3);
  pitfall1Col = getRandomInt(0, 3);
  pitfall2Row = getRandomInt(0, 3);
  pitfall2Col = getRandomInt(0, 3);
  pitfall3Row = getRandomInt(0, 3);
  pitfall3Col = getRandomInt(0, 3);

  while ((pitfall1Row === 0 && pitfall1Col === 0) ||
    (pitfall2Row === 0 && pitfall2Col === 0) ||
    (pitfall3Row === 0 && pitfall3Col === 0) ||
    (pitfall1Row === 3 && pitfall1Col === 3) ||
    (pitfall2Row === 3 && pitfall2Col === 3) ||
    (pitfall3Row === 3 && pitfall3Col === 3)) {
      pitfall1Row = getRandomInt(0, 3);
      pitfall1Col = getRandomInt(0, 3);
      pitfall2Row = getRandomInt(0, 3);
      pitfall2Col = getRandomInt(0, 3);
      pitfall3Row = getRandomInt(0, 3);
      pitfall3Col = getRandomInt(0, 3);
    }
}

function swap (firstCell, secondCell) {
  temp = secondCell.innerHTML;
  secondCell.innerHTML = firstCell.innerHTML;
  firstCell.innerHTML = temp;
}

function doClick (r, c) {

	var moveRow = r - row;
	var moveCol = c - col;
	var newPosition = cells[r][c];
	var lastPosition = cells[row][col];

	// Check to see if move location adjacent to start location
	if ((moveRow === 0 || moveRow === 1 || moveRow === -1) &&
    (moveCol === 0 || moveCol === 1 || moveCol === -1)) {
		//Check for pitfalls
    if ((r === pitfall1Row && c === pitfall1Col) || (r === pitfall2Row && c === pitfall2Col) || (r === pitfall3Row && c === pitfall3Col)) {
      alert("Be careful! That way is a pitfall! Try another way.");
    }
		// Is new location the elf home?
		else if (r === 3 && c === 3){
			newPosition.innerHTML = ("<img src='images/elfhome.png' />");
			alert("You arrived safely at home!");
			if ((window.prompt("Would you like to play again?", "yes")) === "yes"){
			location.reload();
			}
		} else {
      // swap locations
      swap(cells[r][c], cells[row][col]);
		  row = r;
		  col = c;
		}
	} else if (moveRow > 1 || moveRow < -1 || moveCol > 1 || moveCol < -1){
		alert("You can't move there. Try again.");
		}
}
