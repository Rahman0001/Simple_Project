const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Paris", correct: true},
            {text: "Lyon", correct: false},
            {text: "Marseille", correct: false},
            {text: "Nice", correct: false},
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            {text: "Leo Tolstoy", correct: false},
            {text: "Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
            {text: "Mark Twain", correct: false},
        ]
    },
    {
        question: "Which element's symbol is O?",
        answers: [
            {text: "Nitrogen", correct: false},
            {text: "Helium", correct: false},
            {text: "Oxygen", correct: true},
            {text: "Boron", correct: false},
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            {text: "Cat", correct: false},
            {text: "Jassie", correct: false},
            {text: "Dog", correct: false},
            {text: "Cheetah", correct: true},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    // answerButton.innerHTML="";
    showQuestion();
}



function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " - " + currentQuestion.question;
    answerButton.innerHTML="";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        answerButton.appendChild(button);-
        button.addEventListener("click",selectAnswer);
    });
}
 function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
       if(button.dataset.correct==="true"){
        button.classList.add("correct");
       }
       button.disabled=true;
    });
    nextButton.style.display="block";
 }

 function showScore(){
    answerButton.innerHTML="";
    questionElement.innerHTML=`Your Score is ${score} out of${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    })
startQuiz();