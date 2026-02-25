(function () {
    const state = {
        quizData: null,
        currentModule: null,
        currentSlideIndex: 0,
        isExamMode: false,
        isHardMode: false,
        userAnswers: [],
        timeRemaining: 900,
        timerInterval: null,
        isCompleted: false,
        reviewIndex: 0
    };

    const dom = {
        startScreen: document.getElementById('startScreen'),
        introScreen: document.getElementById('introScreen'),
        quiz: document.getElementById('quiz'),
        endScreen: document.getElementById('endScreen'),
        reviewScreen: document.getElementById('reviewScreen'),

        startPracticeBtn: document.getElementById('startPracticeBtn'),
        introBackBtn: document.getElementById('introBackBtn'),

        examModeToggle: document.getElementById('examModeToggle'),
        hardModeToggle: document.getElementById('hardModeToggle'),

        studentName: document.getElementById('studentName'),
        studentDate: document.getElementById('studentDate'),

        activeTimer: document.getElementById('activeTimer'),
        globalHomeBtn: document.getElementById('globalHomeBtn'),
        progressText: document.getElementById('progressText'),
        difficultyBadge: document.getElementById('difficultyBadge'),
        questionText: document.getElementById('questionText'),
        optionsGrid: document.getElementById('optionsGrid'),

        feedbackArea: document.getElementById('feedbackArea'),
        feedbackStatus: document.getElementById('feedbackStatus'),
        explanationText: document.getElementById('explanationText'),

        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),

        scoreDisplay: document.getElementById('scoreDisplay'),
        copyBtn: document.getElementById('copyBtn'),
        submitMsg: document.getElementById('submitMsg'),
        reviewBtn: document.getElementById('reviewBtn'),
        returnMenuBtn: document.getElementById('returnMenuBtn'),

        reviewBackBtn: document.getElementById('reviewBackBtn'),
        reviewQuestionText: document.getElementById('reviewQuestionText'),
        reviewOptions: document.getElementById('reviewOptions'),
        reviewFeedbackStatus: document.getElementById('reviewFeedbackStatus'),
        reviewExplanationText: document.getElementById('reviewExplanationText'),
        reviewPrevBtn: document.getElementById('reviewPrevBtn'),
        reviewNextBtn: document.getElementById('reviewNextBtn'),
        reviewProgress: document.getElementById('reviewProgress')
    };

    // UTILITIES
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    function resolveLinks(data) {
        // Flatten all questions to search by ID
        const flatPool = Object.values(window.QUESTIONS).flat().filter(q => q.question);
        return data.map(item => {
            if (item.linkId) {
                const linked = flatPool.find(q => q.id === item.linkId);
                return linked ? { ...linked, originalId: item.id } : item;
            }
            return item;
        });
    }

    function triggerMath(element) {
        if (window.renderMathInElement) {
            window.renderMathInElement(element || document.body, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ],
                throwOnError: false
            });
        }
    }

    // STATE MANAGEMENT
    function init() {
        document.querySelectorAll('.module-btn').forEach(btn => {
            btn.addEventListener('click', () => startModule(btn.dataset.module));
        });

        dom.nextBtn.addEventListener('click', handleNext);
        dom.prevBtn.addEventListener('click', () => {
            if (state.currentSlideIndex > 0) {
                state.currentSlideIndex--;
                renderSlide();
            }
        });

        dom.globalHomeBtn.addEventListener('click', () => location.reload());
        dom.returnMenuBtn.addEventListener('click', () => location.reload());

        dom.introBackBtn.addEventListener('click', () => {
            dom.introScreen.hidden = true;
            dom.startScreen.hidden = false;
        });

        dom.startPracticeBtn.addEventListener('click', () => {
            dom.introScreen.hidden = true;
            beginQuizExecution();
        });

        dom.reviewBtn.addEventListener('click', startReview);
        dom.copyBtn.addEventListener('click', handleCopyWork);
        dom.reviewBackBtn.addEventListener('click', () => {
            dom.reviewScreen.hidden = true;
            dom.endScreen.hidden = false;
        });

        dom.reviewNextBtn.addEventListener('click', () => {
            if (state.reviewIndex < state.quizData.length - 1) {
                state.reviewIndex++;
                renderReviewSlide();
            }
        });

        dom.reviewPrevBtn.addEventListener('click', () => {
            if (state.reviewIndex > 0) {
                state.reviewIndex--;
                renderReviewSlide();
            }
        });
    }

    function startModule(moduleKey) {
        state.isExamMode = dom.examModeToggle.checked;
        state.isHardMode = dom.hardModeToggle.checked;

        const dataKey = state.isHardMode ? `${moduleKey}_hard` : moduleKey;
        const rawData = window.QUESTIONS[dataKey] || [];
        state.quizData = resolveLinks(rawData);

        if (state.quizData.length === 0) {
            alert("This module is currently empty or under development.");
            return;
        }

        state.currentModule = moduleKey;
        // Show Concept Intro exactly once before starting the quiz
        dom.startScreen.hidden = true;
        dom.introScreen.hidden = false;
        triggerMath(dom.introScreen);
    }

    function beginQuizExecution() {
        state.isCompleted = false;
        state.currentSlideIndex = 0;
        state.userAnswers = new Array(state.quizData.length).fill(null);

        dom.quiz.hidden = false;

        if (state.isExamMode) {
            startTimer();
            dom.activeTimer.hidden = false;
        }

        renderSlide();
    }

    function startTimer() {
        state.timeRemaining = 900;
        dom.activeTimer.textContent = formatTime(state.timeRemaining);
        state.timerInterval = setInterval(() => {
            state.timeRemaining--;
            dom.activeTimer.textContent = formatTime(state.timeRemaining);
            if (state.timeRemaining <= 60) dom.activeTimer.classList.add('timer-danger');
            if (state.timeRemaining <= 0) finishModule();
        }, 1000);
    }

    function renderSlide() {
        const q = state.quizData[state.currentSlideIndex];
        dom.progressText.textContent = `Question ${state.currentSlideIndex + 1} of ${state.quizData.length}`;
        dom.difficultyBadge.textContent = q.difficulty || "Standard";
        dom.questionText.innerHTML = q.question;

        dom.optionsGrid.innerHTML = '';
        dom.feedbackArea.hidden = true;

        const indexedOptions = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));

        // Don't shuffle if already answered to prevent jarring UI
        const pool = (state.userAnswers[state.currentSlideIndex] === null)
            ? shuffleArray([...indexedOptions])
            : indexedOptions;

        pool.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = opt.text;

            if (state.userAnswers[state.currentSlideIndex] === opt.originalIndex) {
                btn.classList.add('selected');
                if (!state.isExamMode && state.currentModule !== 'homework') {
                    const isCorrect = opt.originalIndex === q.correctIndex;
                    btn.classList.add(isCorrect ? 'correct' : 'wrong');
                    showFeedback(isCorrect);
                    disableOptions();
                }
            }

            btn.addEventListener('click', () => handleOptionClick(opt.originalIndex, btn));
            dom.optionsGrid.appendChild(btn);
        });

        dom.prevBtn.disabled = state.currentSlideIndex === 0;
        dom.nextBtn.textContent = state.currentSlideIndex === state.quizData.length - 1 ? 'Finish Module' : 'Next Question →';

        triggerMath(dom.quiz);
    }

    function disableOptions() {
        Array.from(dom.optionsGrid.children).forEach(b => b.disabled = true);
    }

    function handleOptionClick(originalIndex, btn) {
        const q = state.quizData[state.currentSlideIndex];

        if (!state.isExamMode && state.currentModule !== 'homework') {
            if (state.userAnswers[state.currentSlideIndex] !== null) return;

            state.userAnswers[state.currentSlideIndex] = originalIndex;
            const isCorrect = originalIndex === q.correctIndex;

            disableOptions();
            btn.classList.add(isCorrect ? 'correct' : 'wrong');

            // Highlight correct one if missed
            if (!isCorrect) {
                Array.from(dom.optionsGrid.children).forEach(b => {
                    // Logic to find button with correctIndex...
                    // In practice, simpler is better for now.
                });
            }

            showFeedback(isCorrect);
        } else {
            state.userAnswers[state.currentSlideIndex] = originalIndex;
            Array.from(dom.optionsGrid.children).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        }
    }

    function showFeedback(isCorrect) {
        const q = state.quizData[state.currentSlideIndex];
        dom.feedbackStatus.textContent = isCorrect ? "✓ Correct" : "✗ Incorrect";
        dom.feedbackStatus.style.color = isCorrect ? "var(--success)" : "var(--danger)";
        dom.explanationText.innerHTML = q.explanation;
        dom.feedbackArea.hidden = false;
        triggerMath(dom.feedbackArea);
    }

    function handleNext() {
        if (state.currentSlideIndex < state.quizData.length - 1) {
            state.currentSlideIndex++;
            renderSlide();
        } else {
            finishModule();
        }
    }

    function finishModule() {
        clearInterval(state.timerInterval);
        dom.activeTimer.hidden = true;
        dom.quiz.hidden = true;
        dom.endScreen.hidden = false;

        let score = 0;
        state.quizData.forEach((q, idx) => {
            if (state.userAnswers[idx] === q.correctIndex) score++;
        });

        dom.scoreDisplay.textContent = `Score: ${score} / ${state.quizData.length}`;
        state.isCompleted = true;
    }

    function startReview() {
        state.reviewIndex = 0;
        dom.endScreen.hidden = true;
        dom.reviewScreen.hidden = false;
        renderReviewSlide();
    }

    function handleCopyWork() {
        const name = dom.studentName.value.trim();
        const date = dom.studentDate.value;
        const msgEl = dom.submitMsg;

        msgEl.className = 'submit-msg';
        msgEl.innerText = '';

        if (!name) {
            dom.studentName.style.borderColor = 'var(--danger)';
            msgEl.innerText = "Please enter your name on the Start Screen!";
            msgEl.classList.add("msg-error");

            // Auto hide message after 3 seconds
            setTimeout(() => { msgEl.innerText = ''; }, 3000);
            return;
        }

        let score = 0;
        state.quizData.forEach((q, idx) => {
            if (state.userAnswers[idx] === q.correctIndex) score++;
        });

        let outputText = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 MODULE: Systems of Equations - ${state.currentModule.toUpperCase()}\nStudent: ${name}\nDate: ${date || "Not set"}\n`;

        if (state.isExamMode) {
            const timeSpent = 900 - state.timeRemaining;
            const m = Math.floor(timeSpent / 60);
            const s = timeSpent % 60;
            outputText += `Mode: EXAM (Timer: ${m}m ${s}s)\n`;
        } else {
            outputText += `Mode: PRACTICE\n`;
        }

        outputText += `Final Score: ${score} / ${state.quizData.length}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        state.quizData.forEach((q, idx) => {
            const userA = state.userAnswers[idx];
            const isCorrect = userA === q.correctIndex;

            // Strip KaTeX formatting for raw text copy
            const cleanQuestion = q.question.replace(/<[^>]*>?/gm, '').replace(/\\\(/g, '').replace(/\\\)/g, '').replace(/\$\$/g, '').replace(/\$/g, '');

            outputText += `Q${idx + 1}: ${cleanQuestion}\n`;

            if (userA === null) {
                outputText += `  Status: ⚠️ UNANSWERED\n\n`;
            } else {
                const userChoiceText = q.options[userA].replace(/<[^>]*>?/gm, '').replace(/\$/g, '');
                outputText += `  Selected: ${userChoiceText}\n`;
                outputText += `  Status: ${isCorrect ? '✅ Correct' : '❌ Incorrect'}\n\n`;
            }
        });

        outputText += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nEnd of Report\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

        // Clipboard logic
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(outputText).then(() => {
                msgEl.innerText = "✅ Copied to clipboard! Ready to paste.";
                msgEl.classList.add("msg-success");
            }).catch(err => copyFallback(outputText, msgEl));
        } else {
            copyFallback(outputText, msgEl);
        }
    }

    function copyFallback(text, msgEl) {
        const t = document.createElement("textarea");
        t.value = text;
        t.style.position = 'fixed';
        t.style.opacity = '0';
        document.body.appendChild(t);
        t.select();
        try {
            document.execCommand('copy');
            msgEl.innerText = "✅ Copied to clipboard! Ready to paste.";
            msgEl.classList.add("msg-success");
        } catch (e) {
            msgEl.innerText = "Failed to copy automatically. Please select text manually.";
            msgEl.classList.add("msg-error");
        }
        document.body.removeChild(t);
    }

    function renderReviewSlide() {
        const q = state.quizData[state.reviewIndex];
        const userA = state.userAnswers[state.reviewIndex];
        const isCorrect = userA === q.correctIndex;

        dom.reviewProgress.textContent = `Review: ${state.reviewIndex + 1} of ${state.quizData.length}`;
        dom.reviewQuestionText.innerHTML = q.question;

        dom.reviewOptions.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const div = document.createElement('div');
            div.className = 'option-btn disabled';
            div.innerHTML = opt;
            if (idx === q.correctIndex) div.classList.add('correct');
            if (idx === userA && !isCorrect) div.classList.add('wrong');
            dom.reviewOptions.appendChild(div);
        });

        dom.reviewFeedbackStatus.textContent = isCorrect ? "✓ Correct" : "✗ Incorrect";
        dom.reviewFeedbackStatus.style.color = isCorrect ? "var(--success)" : "var(--danger)";
        dom.reviewExplanationText.innerHTML = q.explanation;

        dom.reviewPrevBtn.disabled = state.reviewIndex === 0;
        dom.reviewNextBtn.disabled = state.reviewIndex === state.quizData.length - 1;

        triggerMath(dom.reviewScreen);
    }

    init();
})();
