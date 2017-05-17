var Scrabble = function() {};


  Scrabble.prototype.score = function(word) {
    var scoreChart = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2,
    "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3,
    "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1,
    "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4,
    "x": 8, "z": 10};


    var wordScore = 0;

    for (var i = 0; i < word.length; i++) {
      var letterScore = scoreChart[word.charAt(i)];
      wordScore += letterScore;
    }

    word.length == 7 ? wordScore += 50 : wordScore;
    console.log(wordScore);
    return wordScore;

  };


  Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

    var arrayOfScores = [];
    var self = this;

    arrayOfWords.forEach(function(word) {
      var score = self.score(word);
      arrayOfScores.push(score);
    })

    console.log(arrayOfScores);
    return arrayOfScores;
  };



var game = new Scrabble();
game.score("heelloo");
game.highestScoreFrom(["hello", "heelloo", "hi"]);

module.exports = Scrabble;
