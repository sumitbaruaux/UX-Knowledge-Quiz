const quizData = [
    {
        question: "What does Front-end development means to you?",
        a: "Front-side of the restaurant",
        b: "Refers to user-interface that users interacts with",
        c: "Customer service associate",
        d: "Web Engineer",
        correct: "b",
    },
    {
        question: "What are the methods of user research without users?",
        a: "Heuristic review",
        b: "Competitive Analysis",
        c: "Expert review",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What is a disadvantage of vertical navigation?",
        a: "Can accommodate only a small number of categories",
        b: "Offers no room for growth",
        c: "Is unfamiliar to users",
        d: "Requires more space",
        correct: "d",
    },
    {
        question: "What does UX stand for?",
        a: "User Exchange",
        b: "User Expression",
        c: "User Experience",
        d: "User Interface",
        correct: "c",
    },
    {
        question: "Red text should not be used on a blue background because?",
        a: "All of the above",
        b: "It will be fuzzy to read",
        c: "It has patriotic meaning for those in the U.S",
        d: "These are not browser safe colors",
        correct: "b",
    },
    {
        question: "You have to address a usability issue pertaining to a software interface. You will provide solutions after understanding?",
        a: "How your friends use the software",
        b: "How you use the software",
        c: "How the users utilize the software",
        d: "How the developer uses the software",
        correct: "c",
    },
    {
        question: "What is the right UCD cycle?",
        a: "Plan->Analyze->Design->Test",
        b: "Design->Analyze->Plan->Test",
        c: "Design->Analyze->Test->Plan",
        d: "Analyze->Design->Test->Plan",
    },
    {
        question: "When should a developer apply usability principles?",
        a: "Early in the SDLC",
        b: "After selling the product",
        c: "We don't need usability",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "How many websites fail at UX?",
        a: "97%",
        b: "25%",
        c: "12%",
        d: "56%",
        correct: "a",
    },
    {
        question: "What type of UX designer specializes in one kind of UX design, and has a breadth of knowledge in other areas?",
        a: "T-shaped",
        b: "A-shaped",
        c: "Generalist",
        d: "Y-shaped",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})