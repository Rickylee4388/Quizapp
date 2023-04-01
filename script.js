let questions = [
    {
        "question": "Was ist 1+1?",
        "answer_1": "2",
        "answer_2": "3",
        "answer_3": "4",
        "answer_4": "5",
        "right_answer": 1
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
        "question": "Was ist 10-4?",
        "answer_1": "3",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "9",
        "right_answer": 2
    },
    {
        "question": "Was ist 8+8?",
        "answer_1": "30",
        "answer_2": "16",
        "answer_3": "7",
        "answer_4": "19",
        "right_answer": 2
    }
];
let currentQuestion = 0;
let correctanswer = 0;
let Audio_win = new Audio('QuizappBlue/win.mp3');
let Audio_lose = new Audio('QuizappBlue/lose.mp3');
let Audio_applause = new Audio('QuizappBlue/applause.mp3');

function init() {
    document.getElementById('amountofquestions').innerHTML = questions.length;
    document.getElementById('questionlength').innerHTML = '';
    document.getElementById('questionlength').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {//show end-display
        let percent = Math.round(100);
        Audio_applause.play();
        document.getElementById('progressbar').innerHTML=`${percent}%`
        document.getElementById('progressbar').style.width = `${percent}%`;
        document.getElementById('end-body').style = '';
        document.getElementById('quiz-body').style = 'display:none';
        document.getElementById('allquestions').innerHTML = questions.length;
        document.getElementById('correctquestions').innerHTML = correctanswer;
        document.getElementById('headerimage').src = "QuizappBlue/Group5.png";

    } else {//show question
        let percent = currentQuestion / questions.length ; 
        percent = Math.round(percent * 100) ;
        document.getElementById('progressbar').innerHTML=`${percent}%`;
        document.getElementById('progressbar').style.width = `${percent}%`;
        let question = questions[currentQuestion];

        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        document.getElementById('currentquestion').innerHTML = '';
        document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
    }
}

function answer(answer) {
    let question = questions[currentQuestion];
    let questionNumber = answer.slice(-1);
    let rightAnswer = question['right_answer'];
    let idOfRightAnswer = `answer_${rightAnswer}`
    if (questionNumber == question['right_answer']) {
        document.getElementById(answer).parentNode.classList.add('bg-green');
        Audio_win.play();
        correctanswer++;
    }
    else {
        document.getElementById(answer).parentNode.classList.add('bg-red');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-green');
        Audio_lose.play();
    }
    document.getElementById('next').disabled = false;
}
//parentNode -> übergeordneter container wird angesprochen

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('answer_2').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('answer_3').parentNode.classList.remove('bg-red', 'bg-green');
    document.getElementById('answer_4').parentNode.classList.remove('bg-red', 'bg-green');
}

function restartGame(){
    document.getElementById('start-body').style = 'display:none';
    document.getElementById('end-body').style = 'display:none';//hide end body
    document.getElementById('quiz-body').style = '';//show question body
    document.getElementById('headerimage').src = "QuizappBlue/bgb.png";
    currentQuestion = 0;
    correctanswer = 0;
    init();
}