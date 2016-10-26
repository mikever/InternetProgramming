var playerTotal = 0;
var dealerTotal = 0;

function getRndInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function rollDice() {
    var playerDice1 = getRndInt(1, 6);
    var playerDice2 = getRndInt(1, 6);
    var dealerDice1 = getRndInt(1, 6);
    var dealerDice2 = getRndInt(1, 6);

    if (playerDice1 === playerDice2) {
      var playerScore = (playerDice1 + playerDice2) * 2;
    } else {
      playerScore = playerDice1 + playerDice2;
    }

    if (dealerDice1 === dealerDice2) {
      var dealerScore = (dealerDice1 + dealerDice2) * 2;
    } else {
      dealerScore = dealerDice1 + dealerDice2;
    }

    switch (playerDice1) {
      case 1:
        document.getElementById("playerDice1").style.backgroundPosition="-7px -4px";
        break;
      case 2:
        document.getElementById("playerDice1").style.backgroundPosition="-134px -4px";
        break;
      case 3:
        document.getElementById("playerDice1").style.backgroundPosition="-261px -4px";
        break;
      case 4:
        document.getElementById("playerDice1").style.backgroundPosition="-259px -130px";
        break;
      case 5:
        document.getElementById("playerDice1").style.backgroundPosition="-133px -130px";
        break;
      case 6:
        document.getElementById("playerDice1").style.backgroundPosition="-6px -131px";
        break;
    }

    switch (playerDice2) {
      case 1:
        document.getElementById("playerDice2").style.backgroundPosition="-7px -4px";
        break;
      case 2:
        document.getElementById("playerDice2").style.backgroundPosition="-134px -4px";
        break;
      case 3:
        document.getElementById("playerDice2").style.backgroundPosition="-261px -4px";
        break;
      case 4:
        document.getElementById("playerDice2").style.backgroundPosition="-259px -130px";
        break;
      case 5:
        document.getElementById("playerDice2").style.backgroundPosition="-133px -130px";
        break;
      case 6:
        document.getElementById("playerDice2").style.backgroundPosition="-6px -131px";
        break;
    }

    switch (dealerDice1) {
      case 1:
        document.getElementById("dealerDice1").style.backgroundPosition="-7px -4px";
        break;
      case 2:
        document.getElementById("dealerDice1").style.backgroundPosition="-134px -4px";
        break;
      case 3:
        document.getElementById("dealerDice1").style.backgroundPosition="-261px -4px";
        break;
      case 4:
        document.getElementById("dealerDice1").style.backgroundPosition="-259px -130px";
        break;
      case 5:
        document.getElementById("dealerDice1").style.backgroundPosition="-133px -130px";
        break;
      case 6:
        document.getElementById("dealerDice1").style.backgroundPosition="-6px -131px";
        break;
    }

    switch (dealerDice2) {
      case 1:
        document.getElementById("dealerDice2").style.backgroundPosition="-7px -4px";
        break;
      case 2:
        document.getElementById("dealerDice2").style.backgroundPosition="-134px -4px";
        break;
      case 3:
        document.getElementById("dealerDice2").style.backgroundPosition="-261px -4px";
        break;
      case 4:
        document.getElementById("dealerDice2").style.backgroundPosition="-259px -130px";
        break;
      case 5:
        document.getElementById("dealerDice2").style.backgroundPosition="-133px -130px";
        break;
      case 6:
        document.getElementById("dealerDice2").style.backgroundPosition="-6px -131px";
        break;
    }

    if (playerScore > dealerScore) {
      playerTotal += playerScore;
      document.getElementById("playerScore").innerHTML = ("<h2>Player Score: " + playerTotal + "</h2>");
      if (playerTotal >= 100) {
        document.getElementById("statusText").innerHTML = ("<h2>You won this round, and you won the game! Congratulations. Feel free to play again.</h2>");
        playerTotal = 0;
        dealerTotal = 0;
        document.getElementById("playerScore").innerHTML = ("<h2>Player Score: " + playerTotal + "</h2>");
        document.getElementById("dealerScore").innerHTML = ("<h2>Dealer Score: " + dealerTotal + "</h2>");
        return;
      }
      document.getElementById("statusText").innerHTML = ("<h2>You won this round!</h2>");
    } else if (playerScore < dealerScore) {
      dealerTotal += dealerScore
      document.getElementById("dealerScore").innerHTML = ("<h2>Dealer Score: " + dealerTotal + "</h2>");
      if (dealerTotal >= 100) {
        document.getElementById("statusText").innerHTML = ("<h2>The dealer won the game. Sorry about that. Try your luck again.</h2>");
        playerTotal = 0;
        dealerTotal = 0;
        document.getElementById("playerScore").innerHTML = ("<h2>Player Score: " + playerTotal + "</h2>");
        document.getElementById("dealerScore").innerHTML = ("<h2>Dealer Score: " + dealerTotal + "</h2>");
        return;
      }
      document.getElementById("statusText").innerHTML = ("<h2>The dealer won this round.</h2>");
    } else {
      document.getElementById("statusText").innerHTML = ("<h2>It was a tie!</h2>");
    }

    document.getElementById("playerResult").innerHTML = "<h2>Score: " + playerScore + "</h2>";
    document.getElementById("dealerResult").innerHTML = "<h2>Score: " + dealerScore + "</h2>";
}
