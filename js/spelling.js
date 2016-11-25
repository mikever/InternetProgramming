var imgCompare = ""; var spellCompare = ""; var count = 0;

function checkEnd() {
  if (count === 12) {
    var endIt = document.createElement("H3");
    var endMessage = document.createTextNode("Congratulations! You are a great speller!");
    endIt.appendChild(endMessage);
    document.getElementById("theEnd").appendChild(endIt);
  }
}

function compareThem() {
  if (imgCompare === spellCompare) {
    var newStuff = document.createElement("P");
    var newMessage = document.createTextNode("CORRECT!");
    newStuff.appendChild(newMessage);
    document.getElementById("s" + spellCompare).appendChild(newStuff);
    count++;
    checkEnd();
  } else {
    alert("Wrong ... Try again.")
  }
}

var getImage = function(x) {
  var iLgth = x.length;
  imgCompare = x.substr(1, iLgth - 1);
}

var getSpell = function(x) {
  var sLgth = x.length;
  spellCompare = x.substr(1, sLgth - 1);
  compareThem(imgCompare, spellCompare);
}
