var quizQuestions = [{question: "Inside which HTML element do we put the JavaScript?", choices: ["<script>", "<javascript>", "<js>"]},
{question:"How do you create a function in JavaScript?", choices: ["function myFunction()", "function: myFunction()", "function = myFunction"]}, 
{question: "Which one is not a primitive data type?", choices: ["array", "number", "undefined"]}, {question: "Which one is not a loop?", choices: ["if", "for", "while"]},
{question: "Which operator is used to assign a value to a variable?", choices: ["=", "*","-"]}, {question: "How can you add a comment in a JavaScript?", choices: ["//This is a comment", "'This is a comment", "<!--This is a comment-->"]}, {question: "Which popup box allows the user to input a value?", choices: ["prompt", "alert", "confirm"]}
];


//configure timer for 100 sec

//configure function that places each quesiton and answer where they should be on the page + which answer is correct and shuffle answers

//click event that makes first question & timer appear on button click

// Questions contain buttons for each answer.
//HTML button creation for each answer, and make the content change based on question

// When answer is clicked, the next question appears
//click event on answer buttons to progress the question + show whether answer is right/wrong

// If the answer clicked was incorrect then subtract time from the clock
//extra -5 sec upon wrong answer +10 sec upon correct answer

// The quiz should end when all questions are answered or the timer reaches 0.
//end of quiz screen when timer reaches 0 / all questions have been answered

// When the game ends, it should display their score and give the user the ability to save their initials and their score
//end screen is time left as score + input field for name which, if submitted, data will be stored locally
