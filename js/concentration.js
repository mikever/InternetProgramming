var flipped = false;
var topImage, bottomImage;
var matchCount = 0;
var randTop = [], randBottom = [];
var idTop, idBottom;
var totalClicks = 0;
var topClicked = false;

// Get random int in range from min to max
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creates arrays with images for top and bottom
function setup () {
  var topImages = [
    "images/celeb1.jpg",
    "images/celeb2.jpg",
    "images/celeb3.jpg",
    "images/celeb4.jpg",
    "images/celeb5.jpg",
    "images/celeb6.jpg",
    "images/celeb7.jpg",
    "images/celeb8.jpg",
    "images/celeb9.jpg",
    "images/celeb10.jpg",
  ];
  var bottomImages = [
    "images/celeb1.jpg",
    "images/celeb2.jpg",
    "images/celeb3.jpg",
    "images/celeb4.jpg",
    "images/celeb5.jpg",
    "images/celeb6.jpg",
    "images/celeb7.jpg",
    "images/celeb8.jpg",
    "images/celeb9.jpg",
    "images/celeb10.jpg",
  ];

  // Randomize an array passed as argument
  function randomizeArray (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var r = getRandomInt(0,i);
        var tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
  }

  randomizeArray(topImages);
  randomizeArray(bottomImages);
  randTop = topImages;
  randBottom = bottomImages;
}

// Get top image when card is clicked
function getTopImage (id, index) {
  if (flipped) {
    alert("You must pick a blue card to find a match.");
    document.getElementById(idTop).src = "images/redcard.png";
    document.getElementById(idBottom).src = "images/bluecard.png";
    flipped = false;
  } else {
    topClicked = true;
    document.getElementById(id).src = randTop[index];
    topImage = document.getElementById(id).src;
    idTop = document.getElementById(id).id;
    flipped = true;
  }
}

// get bottom image when card is clicked
function getBottomImage (id, index) {
  if (topClicked) {
    totalClicks++;
    topClicked = false;
  }
  if (flipped) {
    document.getElementById(id).src = randBottom[index];
    bottomImage = document.getElementById(id).src;
    idBottom = document.getElementById(id).id;
    interval = window.setInterval("match()", 600);
  } else {
    alert("You must select a red card first.");
  }
}

function match () {
  if (topImage === bottomImage) {
    window.clearInterval(interval);
    flipped = false;
    checkForWin();
  } else {
    flipped = false;
    window.clearInterval(interval);
    document.getElementById(idTop).src = "images/redcard.png";
    document.getElementById(idBottom).src = "images/bluecard.png";
  }
}

// Checks to see if all cards are matched
function checkForWin () {
  matchCount++;
  if (matchCount === 10) {
    document.getElementById("theEndH2").innerHTML = "<h2>Contratulations, you won!</h2> </p><button class='buttons' onclick='playAgain()'>Play again?</button>"
    document.getElementById("theEndP").innerHTML = "<p>It took you " + totalClicks + " clicks. A perfect score is 10, but you would have to get very lucky."
  }
}

// reloads page
function playAgain() {
  location.reload();
}
