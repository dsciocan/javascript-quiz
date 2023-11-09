var highScores = document.getElementById("highscores");

//Get scores from local storage, sort them in descending order if multiple, and display them
var addScore = [];
addScore = JSON.parse(localStorage.getItem("Score"));
if (addScore.length >= 2) {
    addScore.sort((a, b) => {
        var sca = Number(a.score);
        var scb = Number(b.score);
        return scb - sca;
    });
    showScore();
} else {
    showScore();
}

function showScore() {
for(i=0;i<addScore.length;i++) {
    var highscore = document.createElement("li");
    highscore.textContent = addScore[i].initials + " - " + addScore[i].score;
    highScores.append(highscore);
}
}

//Clear highscores

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    localStorage.clear("Score");
    highScores.textContent = "";
})