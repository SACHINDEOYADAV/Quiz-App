const questions = [
  {
    question: "which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false},
      { text: "Blue whale", correct: true},
      { text: "Elephant", correct: false},
      { text: "Giraffe", correct: false},
    ]
  },
  {
    question: "Who is the first bowler to take a hattrick in the first over of a Ranji Trophy?",
    answers: [
      { text: "Suddep Tyagi", correct: false},
      { text: "Dhawal Kulkarni", correct: false},
      { text: "Jaydev Unadkat", correct: true},
      { text: "R sai Kishore", correct: false},
    ]
  },
  {
    question: "Who won the orange cap in 2014 ipl?",
    answers: [
      { text: "Robin Uthappa", correct: true},
      { text: "Gautam Gambhir", correct: false},
      { text: "Michel Hussey", correct: false},
      { text: "Sachin Tendulkar", correct: false},
    ]
  },
  {
    question: "which is largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false},
      { text: "Gobi", correct: false},
      { text: "Sahara", correct: false},
      { text: "Antarctica", correct: true},
    ]
  },
  {
    question: "which is Smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false},
      { text: "Australia", correct: true},
      { text: "Arctic", correct: false},
      { text: "Africa", correct: false},
    ]
  },
  {
    question: "which is the Smallest Country in the world?",
    answers: [
      { text: "Vatican City", correct: true},
      { text: "Bhutan", correct: false},
      { text: "Nepal", correct: false},
      { text: "Srilanka", correct: false},
    ]
  },
  {
    question: "Who scored the first century in the history of the Cricket World Cup?",
    answers: [
      { text: "Vivan Richards", correct: false},
      { text: "Clive Lloyd", correct: false},
      { text: "Sunil Gavaskar", correct: false},
      { text: "Dennis Amiss", correct: true},
    ]
  },
  {
    question: "Who is the highest run-scorer in the world Cup 2023?",
    answers: [
      { text: "Rachin Ravindra", correct: false},
      { text: "Rohit Sharma", correct: false},
      { text: "Travis Head", correct: false},
      { text: "Virat Kohli", correct: true},
    ]
  },
  {
    question: "Who holds the record for the highest individual score in a single world cup innings?",
    answers: [
      { text: "Sachin Tendulkar", correct: true},
      { text: "Ricky Ponting", correct: false},
      { text: "Brendon Mcculaum", correct: false},
      { text: "Chris Gayle", correct: false},
    ]
  },
  {
    question: "which player has the most centuries in cricket World Cup history?",
    answers: [
      { text: "Ricky Ponting", correct: false},
      { text: "Sachin Tendulkar", correct: false},
      { text: "Rohit Sharma", correct: true},
      { text: "Virat Kohli", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion () {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `your scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
      startQuiz();
  }

});

startQuiz();
