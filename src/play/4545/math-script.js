const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerHTML = 'Restart <a href="/play/4545/"> Diiferent quiz</a>'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 420 + 9?',
    answers: [
      { text: '430', correct: false },
      { text: '431', correct: false },
      { text: '429', correct: true }
    ]
  },
  {
    question: 'What is 9 x 8?',
    answers: [
      { text: '72', correct: true },
      { text: '71', correct: false },
      { text: '70', correct: false }
    ]
  },
  {
    question: 'What is 11 x 11?',
    answers: [
      { text: '122', correct: false },
      { text: '121', correct: true },
      { text: '124', correct: false }
    ]
  },
  {
    question: 'What is 30  x 20?',
    answers: [
      { text: '590', correct: false },
      { text: '599', correct: false },
      { text: '600', correct: true },
      { text: '593', correct: false }
    ]
  },
  {
    question: 'What is 2000+110?',
    answers: [
      { text: '2110', correct: true },
      { text: '2112', correct: false },
      { text: '2222', correct: false }
    ]
  }
]