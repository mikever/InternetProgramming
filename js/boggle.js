function boggle() {
  var play = "";
  var score = 0;
  var flag = 0;
  var num = Math.floor(Math.random() * 5) + 1;
  compWords = new array;
  notAWord = new array;
  playWords = new array();
  compWords = words(num);
  yourWord = compWords[0];

  document.GetElementById("letters").innerHTML = yourWord;
  // Get player entries
  while (play !== "Q" && play !== "q") {
    play = prompt("Enter a word, or enter 'Q' when done.");
    playWords.push(play);
    if (play !== "Q" && play !== "q") {
      document.GetElementById("entries").innerHTML = playWords.toString();
    }
  }

  // Check winning score and list bad words
  var complgth = compWords.length;
  var playlgth = (playWords.length - 1);
  for (var i = 0; i < playlgth; i++) {
    flag = 0;
    for (var k = 0; k < complgth; k++) {
      if (playWords[i] === compWords[k]) {
        score++;
        flag = 1;
      }
    }
    if (flag === 0) {
      notAWord.push(playWords[i]);
    }
  }
  document.GetElementById("result").innerHTML = ("Your score is " +
  score + ". The following entries are not valid words: <br>" +
  notAWord.toString());
}
