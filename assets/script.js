// questions to be asked and the answers stored in an array
var questions = [
    {
        questiontext: "Commonly used data types Do Not incluede:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers",],
        correctanswer: "3. alerts",
    },
    
    {
        questiontext: "The condtion in an if/else statement is encloded with ___.",
        answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets",],
        correctanswer: "3. parenthesis"
    },

    {
        questiontext: "Arrays in JavaScript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above",],
        correctanswer: "4. all of the above",
    },

    {
        questiontext: "String values must be enclosed within ___ when being assigned to variables",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses",],
        correctanswer: "3. quotes",
    },

    {
        questiontext: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log",],
        correctanswer: "4. console.log",
    },
]

// this is all the variables we will need
var maincard = document.getElementById("main-card");
var quizcard = document.getElementById("quiz-card");
var scorecard = document.getElementById("score-card");
var highscorecard = document.getElementById("highscore-card");
var results = document.getElementById("results");
var resultstext = document.getElementById("results-text");
var interval;
var time;
var questionIndex;


// this function is to hide the cards till we need them
function hidecards() {
    maincard.setAttribute("hidden", true);
    quizcard.setAttribute("hidden", true);
    scorecard.setAttribute("hidden", true);
    highscorecard.setAttribute("hidden", true);
}

function hideresultstext() {
    results.style.display= "none";
}

document.getElementById("start-button").addEventListener("click", startquiz);

function startquiz() {
    hidecards();
    quizcard.removeAttribute("hidden");
    questionIndex = 0
    displayQuestion();
    time = questions.length * 10;
    interval = setInterval(countdown, 1000);
    displayTime();
}

function countdown() {
    time--;
    displayTime() 
        timeDisplay.textContent = time;
        if (time < 1) {
            endQuiz();
        }
    }

var timeDisplay = document.getElementById("time");

function displayTime() {
    timeDisplay.textContent = time;
}

function displayQuestion() {
    let question = questions[questionIndex];
    let answers = question.answers;

    let h2QuestionElement = document.getElementById("question-text");
    h2QuestionElement.textContent = question.questiontext;

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let answerButton = document.querySelector("#answer" + i);
        answerButton.textContent = answer
    }
}

document.getElementById("quiz-answers").addEventListener("click", checkcorrectAnswer);

function answerIsCorrect(answerButton) {
    return answerButton.textContent === questions[questionIndex].correctanswer
}

function checkcorrectAnswer(eventObject) {
    let answerButton = eventObject.target;
    results.style.display = "block";
    if (answerIsCorrect(answerButton)) {
        resultstext.textContent = "Correct!";
        setTimeout(hideresultstext, 1000);
    } 
    else {
        resultstext.textContent = "Incorrect!";
        setTimeout(hideresultstext, 1000);
        if (time >= 5) {
            time = time - 5;
            displayTime();
        }
        else {
            time = 0;
            displayTime ()
            endQuiz();
        }
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        displayQuestion();
    }
    else {
        endQuiz();
    }
}

var score = document.getElementById("score");

function endQuiz() {
    clearInterval(interval);
    hidecards();
    highscorecard.removeAttribute("hidden");
    score.textContent = time;
    console.log(score)
}


