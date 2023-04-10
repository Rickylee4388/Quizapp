let questions = [
    {
        "question": "Was ist 10+3?",
        "answer_1": "22",
        "answer_2": "13",
        "answer_3": "40",
        "answer_4": "10",
        "right_answer": 2
    },
    {
        "question": "Was ist 3+3?",
        "answer_1": "3",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "9",
        "right_answer": 2
    },
    {
        "question": "Was ist 13+4?",
        "answer_1": "17",
        "answer_2": "18",
        "answer_3": "12",
        "answer_4": "27",
        "right_answer": 1
    },
    {
        "question": "Was ist 8+8?",
        "answer_1": "30",
        "answer_2": "18",
        "answer_3": "16",
        "answer_4": "28",
        "right_answer": 3
    }
];
let addition = [
    {
        "question": "Was ist 10+3?",
        "answer_1": "22",
        "answer_2": "13",
        "answer_3": "40",
        "answer_4": "10",
        "right_answer": 2
    },
    {
        "question": "Was ist 3+3?",
        "answer_1": "3",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "9",
        "right_answer": 2
    },
    {
        "question": "Was ist 13+4?",
        "answer_1": "17",
        "answer_2": "18",
        "answer_3": "12",
        "answer_4": "27",
        "right_answer": 1
    },
    {
        "question": "Was ist 8+8?",
        "answer_1": "30",
        "answer_2": "18",
        "answer_3": "16",
        "answer_4": "28",
        "right_answer": 3
    }
];
let substraktion = [
    {
        "question": "Was ist 10-3?",
        "answer_1": "2",
        "answer_2": "7",
        "answer_3": "4",
        "answer_4": "5",
        "right_answer": 2
    },
    {
        "question": "Was ist 3-3?",
        "answer_1": "3",
        "answer_2": "1",
        "answer_3": "2",
        "answer_4": "0",
        "right_answer": 4
    },
    {
        "question": "Was ist 13-4?",
        "answer_1": "9",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "10",
        "right_answer": 1
    },
    {
        "question": "Was ist 8-5?",
        "answer_1": "4",
        "answer_2": "1",
        "answer_3": "3",
        "answer_4": "6",
        "right_answer": 3
    }
];
let multiplikation = [
    {
        "question": "Was ist 10*3?",
        "answer_1": "20",
        "answer_2": "30",
        "answer_3": "40",
        "answer_4": "50",
        "right_answer": 2
    },
    {
        "question": "Was ist 3*3?",
        "answer_1": "3",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "9",
        "right_answer": 4
    },
    {
        "question": "Was ist 13*4?",
        "answer_1": "52",
        "answer_2": "61",
        "answer_3": "72",
        "answer_4": "97",
        "right_answer": 1
    },
    {
        "question": "Was ist 8*8?",
        "answer_1": "30",
        "answer_2": "16",
        "answer_3": "64",
        "answer_4": "68",
        "right_answer": 3
    }
];
let division = [
    {
        "question": "Was ist 9:3?",
        "answer_1": "2",
        "answer_2": "3",
        "answer_3": "4",
        "answer_4": "5",
        "right_answer": 2
    },
    {
        "question": "Was ist 3:3?",
        "answer_1": "3",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "1",
        "right_answer": 4
    },
    {
        "question": "Was ist 16:4?",
        "answer_1": "4",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "9",
        "right_answer": 1
    },
    {
        "question": "Was ist 10:5?",
        "answer_1": "3",
        "answer_2": "1",
        "answer_3": "2",
        "answer_4": "6",
        "right_answer": 3
    }
];

let currentQuestion = 0;
let correctanswer = 0;
let Audio_win = new Audio('QuizappBlue/win.mp3');
let Audio_lose = new Audio('QuizappBlue/lose.mp3');
let Audio_applause = new Audio('QuizappBlue/applause.mp3');

function init() {
    showQuestionlength();
    showQuestion();
}

function showQuestion() {
    if (showEndDisplay()) {
        let percent = Math.round(100);
        progressbar(percent);
        Audio_applause.play();
        document.getElementById('end-body').style = '';
        document.getElementById('quiz-body').style = 'display:none';
        document.getElementById('allquestions').innerHTML = questions.length;
        document.getElementById('correctquestions').innerHTML = correctanswer;
        document.getElementById('headerimage').src = "QuizappBlue/Group5.png";

    } else {
        //show question
        let question = questions[currentQuestion];
        let percent = currentQuestion / questions.length ; 
        percent = Math.round(percent * 100) ;
        progressbar(percent);
        showQuestionAndAnswers(question);
        countActualQuestion();
    }
}

function answer(answer) {
    let question = questions[currentQuestion];
    let questionNumber = answer.slice(-1);
    let rightAnswer = question['right_answer'];
    let idOfRightAnswer = `answer_${rightAnswer}`
    if (correctAnswerGiven(question,questionNumber)) {
        document.getElementById(answer).parentNode.classList.add('bg-green');
        document.getElementById(`letter_${questionNumber}`).classList.add('bg-darkgreen');
        Audio_win.play();
        correctanswer++;
        disableButtons();
    }
    else {
        document.getElementById(answer).parentNode.classList.add('bg-red');
        document.getElementById(`letter_${questionNumber}`).classList.add('bg-darkred');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-green');
        document.getElementById(`letter_${rightAnswer}`).classList.add('bg-darkgreen');
        Audio_lose.play();
        disableButtons();
    }
}
//parentNode -> übergeordneter container wird angesprochen

function changeQuestions(x) {
    questions = x;
    showQuestionlength();
    resetAnswerButtons();
    restartGame();
    enableAnswerButtons();
}

function showQuestionAndAnswers(question){
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showQuestionlength(){
    document.getElementById('amountofquestions').innerHTML = questions.length;
    document.getElementById('questionlength').innerHTML = '';
    document.getElementById('questionlength').innerHTML = questions.length;
}

function correctAnswerGiven(question,questionNumber){
    return questionNumber == question['right_answer'];
}

function showEndDisplay(){
    return currentQuestion >= questions.length;
}

function countActualQuestion(){
    document.getElementById('currentquestion').innerHTML = '';
    document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
}

function disableButtons() {
    disableAnswerButtons();
    document.getElementById('next').disabled = false;
}
function nextQuestion() {
    currentQuestion++;
    document.getElementById('next').disabled = true;
    enableAnswerButtons();
    resetAnswerButtons();
    showQuestion();
}

function restartGame(){
    currentQuestion = 0;
    correctanswer = 0;
    document.getElementById('start-body').style = 'display:none';
    document.getElementById('end-body').style = 'display:none';//hide end body
    document.getElementById('quiz-body').style = '';//show question body
    init();
}

function progressbar(percent){
    document.getElementById('progressbar').innerHTML=`${percent}%`;
    document.getElementById('progressbar').style.width = `${percent}%`;
}

function disableAnswerButtons(){
    document.getElementById('answer_1button').disabled = true;
    document.getElementById('answer_2button').disabled = true;
    document.getElementById('answer_3button').disabled = true;
    document.getElementById('answer_4button').disabled = true;
}

function enableAnswerButtons(){
    document.getElementById('answer_1button').disabled = false;
    document.getElementById('answer_2button').disabled = false;
    document.getElementById('answer_3button').disabled = false;
    document.getElementById('answer_4button').disabled = false;
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('answer_2').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('answer_3').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('answer_4').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('letter_1').classList.remove('bg-darkred', 'bg-darkgreen');
    document.getElementById('letter_2').classList.remove('bg-darkred', 'bg-darkgreen');
    document.getElementById('letter_3').classList.remove('bg-darkred', 'bg-darkgreen');
    document.getElementById('letter_4').classList.remove('bg-darkred', 'bg-darkgreen');
}



