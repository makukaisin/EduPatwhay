// Elements
const shsBtn = document.getElementById("shs-btn");
const collegeBtn = document.getElementById("college-btn");
const quizSection = document.getElementById("quiz-section");
const quizTitle = document.getElementById("quiz-title");
const quizContent = document.getElementById("quiz-content");
const nextBtn = document.getElementById("next-btn");
const resultsSection = document.getElementById("results-section");
const resultsText = document.getElementById("results-text");
const resultsIcon = document.getElementById("results-icon");
const programSuggestion = document.getElementById("program-suggestion");

// Data
const shsQuestions = [
    {
        question: "What is the significance of ethics in making moral decisions?",
        choices: [
            "Ethics provides a framework for distinguishing right from wrong.",
            "Ethics teaches people how to follow rules without question.",
            "Ethics prevents personal values from influencing decisions.",
            "Ethics eliminates the need for critical thinking."
        ],
        answer: 0
    },
    {
        question: "How can understanding functions and equations help solve real-life problems?",
        choices: [
            "By memorizing formulas without application.",
            "By analyzing relationships between variables to make predictions.",
            "By ignoring patterns in data.",
            "By simplifying all problems into one solution."
        ],
        answer: 1
    }
];

const collegeQuestions = [
    {
        question: "How does intercultural communication contribute to global understanding?",
        choices: [
            "By promoting misunderstandings between cultures.",
            "By allowing people to impose their values on others.",
            "By fostering respect and collaboration among diverse groups.",
            "By ignoring cultural differences in communication."
        ],
        answer: 2
    },
    {
        question: "Why is self-awareness important in building relationships and achieving goals?",
        choices: [
            "It helps you manipulate others to get what you want.",
            "It allows you to better understand your strengths and areas for improvement.",
            "It eliminates the need for external feedback.",
            "It prevents personal growth by focusing only on the present."
        ],
        answer: 1
    }
];

// Course suggestions with descriptions
const shsCourses = [
    {
        name: "STEM",
        description: "Science, Technology, Engineering, and Mathematics program that prepares students for careers in research, technology, and engineering. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "ABM",
        description: "Accountancy, Business, and Management track that focuses on business principles, economics, and accounting for students aiming for a career in business. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "HUMSS",
        description: "Humanities and Social Sciences program for students interested in fields such as psychology, education, and communication. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    }
];

const collegePrograms = [
    {
        name: "College of Engineering (COE)",
        description: "Offers a variety of engineering disciplines, preparing students for careers in fields like civil, mechanical, and electronics engineering. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "Department of Civil Engineering",
        description: "Focuses on designing and constructing infrastructure such as buildings, roads, and bridges. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "Department of Mechanical Engineering",
        description: "Covers the design and operation of mechanical systems, including machines, engines, and tools. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "Department of Electronics Engineering",
        description: "Specializes in the development of electronic systems, including communication, control, and automation. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "Department of Chemical Engineering",
        description: "Focuses on chemical processes, including the design and operation of reactors, manufacturing, and energy production. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "Department of Industrial Engineering",
        description: "Emphasizes optimizing complex processes and systems, including production, logistics, and operations management. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "Department of Electrical Engineering",
        description: "Deals with the study and application of electrical systems and technologies, including power generation and electrical circuits. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "College of Agriculture and Forestry",
        description: "Focuses on agricultural science, forestry management, and the development of sustainable agricultural systems. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "College of Architecture, Fine Arts, and Design",
        description: "Combines architectural design with arts and design, preparing students for careers in architecture and creative industries. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "College of Informatics and Computing Sciences",
        description: "Prepares students for the tech industry, focusing on software development, data science, and information systems. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    },
    {
        name: "College of Engineering Technology",
        description: "Focuses on hands-on skills in engineering and technology fields, preparing students for careers in technical industries. <br><br><strong>Thank you for using the website to seek answers! Your curiosity and commitment to learning are truly inspiring. Remember, every step you take in your studies brings you closer to your goals. Keep pushing forward with passion, and never stop exploring—you’ve got this!</strong>"
    }
];


// Quiz Flow
let currentQuiz = [];
let currentIndex = 0;
let userAnswers = [];

function startQuiz(type) {
    if (type === "shs") {
        currentQuiz = shsQuestions;
        quizTitle.textContent = "Incoming Senior High School Quiz";
    } else {
        currentQuiz = collegeQuestions;
        quizTitle.textContent = "Incoming College Quiz";
    }
    shsBtn.style.display = "none";
    collegeBtn.style.display = "none";
    quizSection.classList.remove("hidden");
    resultsSection.classList.add("hidden"); // Hide results section initially
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuiz[currentIndex];
    quizContent.innerHTML = `
        <p>${question.question}</p>
        ${question.choices
            .map((choice, index) => `<button class="quiz-choice" onclick="selectAnswer(${index})">${choice}</button>`)
            .join("")}
    `;
}

function selectAnswer(choice) {
    userAnswers.push(choice);
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    resultsText.textContent = "Congratulations! Here are your results.";
    resultsIcon.src = "path_to_icon.png"; // Replace with actual path
    
    // Suggest a random course/program
    suggestProgram();
}

function suggestProgram() {
    let suggestion = "";
    let description = "";
    if (currentQuiz === shsQuestions) {
        // Suggest SHS course
        const course = shsCourses[Math.floor(Math.random() * shsCourses.length)];
        suggestion = course.name;
        description = course.description;
    } else {
        // Suggest College program
        const program = collegePrograms[Math.floor(Math.random() * collegePrograms.length)];
        suggestion = program.name;
        description = program.description;
    }
    programSuggestion.innerHTML = `
        <strong>We suggest you explore: ${suggestion}</strong>
        <p>${description}</p>
    `;
}

// Event Listeners
shsBtn.addEventListener("click", () => startQuiz("shs"));
collegeBtn.addEventListener("click", () => startQuiz("college"));
