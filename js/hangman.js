function setCharAt (str, index, chr) {
  if (index > str.length-1) {
    return str;
  }
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function checkWord (word, otherWord) {
  var cleanWord;
  cleanWord = otherWord;
  cleanWord = otherWord.replace(/ /g, "");
  if (word === cleanWord) {
    return true;
  } else {
    return false;
  }
}

function startHangman () {
  var nooseCount = 0;
  var wordNum = Math.floor((Math.random() * 9) + 1);
  var picture = "pic" + wordNum + ".jpg";

  switch (wordNum) {
    case 1:
      word = "ghost";
      break;
    case 2:
      word = "horse";
      break;
    case 3:
      word = "insect";
      break;
    case 4:
      word = "celery";
      break;
    case 5:
      word = "pelican";
      break;
    case 6:
      word = "jewelbox";
      break;
    case 7:
      word = "castle";
      break;
    case 8:
      word = "monster";
      break;
    case 9:
      word = "bunny";
      break;
  }

  var newWord = "";
  var win = false;
  var lgth = word.length;
  var guessLetter;
  var goodGuess = false;

  for (var i = 0; i < lgth; i++) {
    newWord = newWord + "_ ";
  }

  document.getElementById("noose").innerHTML = ("<img src = 'images/hangman0.gif'");
  document.getElementById("game").innerHTML = newWord;

  while (win === false && nooseCount < 10) {
    goodGuess = false;
    guessLetter = prompt("Guess a letter");
    for (var j = 0; j < lgth; j++) {
      if (guessLetter === word.charAt(j)) {
        goodGuess = true;
        var offSet = 2*j;
        newWord = setCharAt(newWord, offSet, guessLetter);
      }
    }
    document.getElementById("game").innerHTML = newWord;
    win = checkWord(word, newWord);
    if (win === true) {
      document.getElementById("result").innerHTML = ("You win!");
      document.getElementById("noose").innerHTML = ("<img src='" + picture + "'>");
    } else if (win === false) {
      document.getElementById("result").innerHTML = ("Not a winner yet");
      if (goodGuess === false) {
        nooseCount = nooseCount + 1;
      }
      document.getElementById("noose").innerHTML = ("<img src='images/hangman" + nooseCount + ".gif'>");
    }
  }
}
