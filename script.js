var time 
var score
var startBtn = document.getElementById("start-btn")
var answerBtn = document.getElementById("answer-btn")
var vhsBtn = document.getElementById("high-score-btn")
var questionText = document.getElementById("question-text")

var questions = [
    {
        title: "What language do you use to code the basic frame work of a website?",
        choices: ["Mandarin", "English", "Hyper Text Markup Language", "I eat crayons"],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "What 2 + 2?",
        choices: ["4", "22", "8", "I eat crayons"],
        answer: "4"
    },
    {
        title: "How many questions is the minimum for this assignment?",
        choices: ["4", "22", "5", "I eat crayons"],
        answer: "5"
    },
    {
        title: "Hey, you You're finally awake. You were trying to cross the border right?",
        choices: ["Yes", "No", "Alexa, play Skyrim on my Samsung Smart Fridge", "Look silently into his eyes"],
        answer: "Look silently into his eyes"
    },
    {
        title: "How many questions is the minimum for this assignment?",
        choices: ["4", "22", "5", "I eat crayons"],
        answer: "5"
    }

]


function start(){
    startBtn.classList.add("hide")
    vhsBtn.classList.add("hide")
    answerBtn.classList.remove("hide")
    questionText.classList.remove("hide")
}