
let shuffledQuestions = questions.concat().sort(shuffleArray);
let shuffledAnswers = answers.concat().sort(shuffleArray);

let usedQuestions = [];
let usedAnswers = [];
let currentQuestion;
let yourCards = [];

const questionCard = document.querySelector('#questionCard');
const answerCards = document.querySelectorAll('.answer-card');
const allAnswerCards = document.querySelector('.answer-cards');


function shuffleArray(a,b) {
    return Math.random() - 0.5;
}

getNewQuestion();
function getNewQuestion () {
    if( shuffledQuestions.length < 1) {
        alert('Game Over! No cards left');
    }
    questionCard.innerHTML = shuffledQuestions.pop();
    console.log(shuffledQuestions.length);
}

giveAnswerCards();
function giveAnswerCards() {
    for (let i = 0; i < 10; i++) {
        if (answerCards.length < 10) {
            addOneCard();
            console.log('card added')
        }
    }

}
 function addOneCard() {
    let card = document.createElement('div');
    card.setAttribute('class', 'answer-card');
    card.innerHTML = shuffledAnswers.pop();
    allAnswerCards.appendChild(card);
     console.log(shuffledAnswers.length);
 }




