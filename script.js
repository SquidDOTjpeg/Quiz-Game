var time 
var score
var startBtn = document.getElementById("start-btn")
var answerBtn = document.getElementById("answer-btn")
var vhsBtn = document.getElementById("high-score-btn")
var questionText = document.getElementById("question-text")


function start(){
    startBtn.classList.add("hide")
    vhsBtn.classList.add("hide")
    answerBtn.classList.remove("hide")
    questionText.classList.remove("hide")
}