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

function init() {
    document.getElementById('questionlength').innerHTML = '';
    document.getElementById('questionlength').innerHTML = questions.length;
    showQuestion();
}
function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}
function answer(answer) {
    let question = questions[currentQuestion];

    let questionNumber = answer.slice(-1);
    let rightAnswer = question['right_answer'];
    let idOfRightAnswer = `answer_${rightAnswer}`
    if (questionNumber == question['right_answer']) {
        document.getElementById(answer).classList.add('bg-green');
    }
    else {
        document.getElementById(answer).classList.add('bg-red');
        document.getElementById(idOfRightAnswer).classList.add('bg-green');
    }
}