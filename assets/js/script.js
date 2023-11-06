var quizQuestions = [{question: "Inside which HTML element do we put the JavaScript?", choices: ["<script>", "<javascript>", "<js>"]},
{question:"How do you create a function in JavaScript?", choices: ["function myFunction()", "function: myFunction()", "function = myFunction"]}, 
{question: "Which of the following is not a primitive data type?", choices: ["array", "number", "undefined"]},
{question: "Which operator is used to assign a value to a variable?", choices: ["=", "*","-"]}, {question: "How can you add a comment in a JavaScript?", choices: ["//This is a comment", "'This is a comment", "<!--This is a comment-->"]}, {question: "Which of the following is not a loop?", choices: ["if", "for", "while"]}, {question: "Which popup box allows the user to input a value?", choices: ["prompt", "alert", "confirm"]}
];

var startButton = document.getElementById("start");
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");


//configure timer for 100 sec


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      questionScreen.setAttribute("class", "hide");
      endScreen.setAttribute("class", "show");
    }

  }, 1000);
}

//adding buttons to questionChoices

var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var outcome = document.createElement("p");
questionChoices.appendChild(choice1);
questionChoices.appendChild(choice2);
questionChoices.appendChild(choice3);
questionScreen.appendChild(outcome);

//configure function that places each quesiton and answer where they should be on the page + which answer is correct and shuffle answers
var correctAnswer;

function questions(number) {
    questionTitle.textContent = quizQuestions[number].question;
    correctAnswer = quizQuestions[number].choices[0];
    var choice = quizQuestions[number].choices;
    function shuffle(array) {
        for (var i = (array.length - 1); i > 0;  i--) {
          var j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };
    shuffle(choice);
    choice1.textContent = choice[0];
    choice2.textContent = choice[1];
    choice3.textContent = choice[2];
    [choice1, choice2, choice3].forEach(function(element) {
        element.addEventListener("click", function(event) {
            if(event == correctAnswer) {
                secondsLeft += 10;
                outcome.textContent = "Correct Answer";
    
            } else {
                secondsLeft -= 10;
                outcome.textContent = "Wrong Answer";
            }
            questions(number+1);
        })
        if (number >= quizQuestions.length) {
            return;
        }
    })
}





//click event that makes first question & timer appear on button click

startButton.addEventListener("click", function() {
    startScreen.innerHTML = "";
    setTime();
    questionScreen.setAttribute("class", "show");
    questions(0);
})

// Questions contain buttons for each answer.
//HTML button creation for each answer, and make the content change based on question

// When answer is clicked, the next question appears
//click event on answer buttons to progress the question + show whether answer is right/wrong

// If the answer clicked was incorrect then subtract time from the clock
//extra -10 sec upon wrong answer +10 sec upon correct answer

// The quiz should end when all questions are answered or the timer reaches 0.
//end of quiz screen when timer reaches 0 / all questions have been answered

// When the game ends, it should display their score and give the user the ability to save their initials and their score
//end screen is time left as score + input field for name which, if submitted, data will be stored locally
