//Question object array

var quizQuestions = [
{question: "Inside which HTML element do we put the JavaScript?", choices: [ "<javascript>", "<script>", "<js>"], answer: "<script>"},
{question:"How do you create a function in JavaScript?", choices: ["function myFunction()", "function: myFunction()", "function = myFunction"], answer: "function myFunction()"}, 
{question: "Which of the following is not a primitive data type?", choices: ["number", "array", "undefined"], answer:"array"},
{question: "Which operator is used to assign a value to a variable?", choices: ["*","-", "="], answer: "="}, 
{question: "How can you add a comment in a JavaScript file?", choices: ["//This is a comment", "'This is a comment", "<!--This is a comment-->"], answer: "//This is a comment"}, 
{question: "Which of the following is not a loop?", choices: ["if", "for", "while"], answer: "if"}, 
{question: "Which popup box allows the user to input a value?", choices: ["alert", "confirm", "prompt"], answer: "prompt"}
];

//Assign elements to variables

var startButton = document.getElementById("start");
var time = document.getElementById("time");
var timer = document.querySelector(".timer");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score")

//Sound effects

var wrongSound = new Audio('assets/sfx/incorrect.wav');
var rightSound = new Audio('assets/sfx/correct.wav');


//Configure timer for 100 sec and end conditions


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      questionScreen.classList.add("hide");
      timer.classList.add("hide");
      endScreen.classList.remove("hide");
    } else if (index == quizQuestions.length) {
        questionScreen.classList.add("hide");
        endScreen.classList.remove("hide");
        clearInterval(timerInterval);
        finalScore.textContent = secondsLeft;
    }
  }, 1000);
}

//Wrong/right answer indicator


var outcome = document.createElement("p");
questionScreen.appendChild(outcome);
var index = 0;

function buttonClick() {
    if (this.textContent != quizQuestions[index].answer) {
        secondsLeft -= 10;
        outcome.textContent = "Wrong Answer";
        wrongSound.play();
    } else {
        secondsLeft += 10;
        outcome.textContent = "Correct Answer";
        rightSound.play();
    }
    index++;
    if (index < quizQuestions.length) {
        questions();
    } 
}


//Function for question succession, button configuration


function questions() {
    var questionName = quizQuestions[index].question;
    questionTitle.textContent = questionName;
    var choice = quizQuestions[index].choices;
    questionChoices.innerHTML = "";
    choice.forEach(
        function(option) {
        var optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = buttonClick;
        questionChoices.appendChild(optionButton);
        }
    ) 

}

//Click event that makes first question & timer appear on button click

startButton.addEventListener("click", function() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    setTime();
    questions();
})




//User initial input and score saving
var input = document.getElementById("initials");
var submitButton = document.getElementById("submit")
var submitMessage = document.createElement("p");
endScreen.appendChild(submitMessage);

submit.addEventListener("click", function() {
    if(input.value.length != 0) {
        latestScore = JSON.parse(localStorage.getItem("Score")) || [];
        var scoreEntry = {
            initials: input.value,
            score: secondsLeft
        };
        latestScore.push(scoreEntry);
        localStorage.setItem("Score", JSON.stringify(latestScore));
    input.value = "";
    submitMessage.textContent = "Your score has been saved.";
    } else {
    submitMessage.textContent = "Please enter your initials.";
    }
}) 
