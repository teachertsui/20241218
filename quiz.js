document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-btn').addEventListener('click', startTest);
});

const questions = [
    {
        question: "1+3+6=?",
        A: "14",
        B: "12",
        C: "11",
        D: "10",
        answer: "D"
    },
    // ... 其他題目 ...
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 20;
let totalScore = 0;

function startTest() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    startQuiz();
}

// ... 其餘JavaScript函數保持不變 ...