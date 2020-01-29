var score
var startBtn = document.getElementById("start-btn")
var answerBtnContainer = document.getElementById("answer-btn-container")
var vhsBtn = document.getElementById("high-score-btn")
var question = document.getElementById("question")
var questionText = document.getElementById("question-text")
var nextBtn = document.getElementById("next-btn")


let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', start)
nextBtn.addEventListener('click', setNextQuestion)


var questions = [
    {
        title: "What language do you use to code the basic frame work of a website?",
        choices: [
            "Mandarin", "English", "Hyper Text Markup Language", "I eat crayons"],
        correct: "Hyper Text Markup Language"
    },
    {
        title: "What 2 + 2?",
        choices: [
            "4", "22", "8", "I eat crayons"],
        correct: "4"
    },
    {
        title: "How many questions is the minimum for this assignment?",
        choices: ["4", "22", "5", "I eat crayons"],
        correct: "5"
    },
    {
        title: "Hey, you You're finally awake. You were trying to cross the border right?",
        choices: ["Yes", "No", "Alexa, play Skyrim on my Samsung Smart Fridge", "Look silently into his eyes"],
        correct: "Look silently into his eyes"
    },
    {
        title: "How many questions is the minimum for this assignment?",
        choices: ["4", "22", "5", "I eat crayons"],
        correct: "5"
    }

]


function start() {
    startBtn.classList.add("hide")
    vhsBtn.classList.add("hide")
    answerBtnContainer.classList.remove("hide")
    question.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    setNextQuestion()

    timerCountDown(75, 'timer')
}

function timerCountDown(time, elem) {
    var element = document.getElementById(elem)
    element.innerHTML = time + " seconds remaining."
    element.classList.remove('hide')
    if (time < 1) {
        clearTimeout(timer)
        element.classList.add('hide')
        finish()
        return
    }
    time--
    var timer = setTimeout('timerCountDown(' + time + ',"' + elem + '")', 1000)
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionText.innerText = question.title
    for (i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var buttons = document.createElement('button')
        buttons.innerText = questions[currentQuestionIndex].choices[i]
        answerBtnContainer.appendChild(buttons)
    }

}

function finish() {
    startBtn.classList.remove("hide")
    vhsBtn.classList.remove("hide")
    answerBtnContainer.classList.add("hide")
    question.classList.add("hide")
    startBtn.innerText = "Restart"
}

console.log(questions.length)








