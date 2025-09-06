// 游戏配置
const GAME_CONFIG = {
    MAX_HEARTS: 5,
    QUESTIONS_PER_SESSION: 20,
    OPTIONS_PER_QUESTION: 4,
    CORRECT_BONUS: 10,
    WRONG_PENALTY: 1
};

// 大型单词数据库 - 高考核心词汇
const WORD_DATABASE = [
    // A开头
    {id: 1, word: "abandon", phonetic: "/əˈbændən/", definition: "v. 放弃，抛弃", example: "We had to abandon the car."},
    {id: 2, word: "ability", phonetic: "/əˈbɪləti/", definition: "n. 能力；才能", example: "She has the ability to manage a large team."},
    {id: 3, word: "able", phonetic: "/ˈeɪbl/", definition: "adj. 能够的；有能力的", example: "You must be able to speak French for this job."},
    {id: 4, word: "about", phonetic: "/əˈbaʊt/", definition: "prep. 关于；大约", example: "Tell me all about your holiday."},
    {id: 5, word: "above", phonetic: "/əˈbʌv/", definition: "prep. 在…上面", example: "The helicopter was hovering above the building."},
    {id: 6, word: "accept", phonetic: "/əkˈsept/", definition: "v. 接受，同意", example: "She accepted the job offer."},
    {id: 7, word: "accident", phonetic: "/ˈæksɪdənt/", definition: "n. 事故，意外", example: "There was a car accident yesterday."},
    {id: 8, word: "achieve", phonetic: "/əˈtʃiːv/", definition: "v. 实现，达到", example: "She achieved her goal of becoming a doctor."},
    {id: 9, word: "across", phonetic: "/əˈkrɒs/", definition: "prep. 穿过，横过", example: "He walked across the street."},
    {id: 10, word: "act", phonetic: "/ækt/", definition: "v. 行动，表演", example: "You must act now to solve this problem."},
    {id: 11, word: "add", phonetic: "/æd/", definition: "v. 添加，增加", example: "Please add some sugar to my coffee."},
    {id: 12, word: "address", phonetic: "/əˈdres/", definition: "n. 地址；v. 演讲", example: "What is your home address?"},
    {id: 13, word: "admire", phonetic: "/ədˈmaɪə(r)/", definition: "v. 钦佩，欣赏", example: "I admire your courage."},
    {id: 14, word: "admit", phonetic: "/ədˈmɪt/", definition: "v. 承认，准许进入", example: "He admitted his mistake."},
    {id: 15, word: "adopt", phonetic: "/əˈdɒpt/", definition: "v. 采纳，收养", example: "They decided to adopt a child."},
    {id: 16, word: "advance", phonetic: "/ədˈvɑːns/", definition: "v. 前进，提高", example: "Technology has advanced greatly."},
    {id: 17, word: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", definition: "n. 优势，好处", example: "Her height gives her an advantage."},
    {id: 18, word: "adventure", phonetic: "/ədˈventʃə(r)/", definition: "n. 冒险，奇遇", example: "They went on an adventure."},
    {id: 19, word: "advertise", phonetic: "/ˈædvətaɪz/", definition: "v. 做广告", example: "They advertised the new product."},
    {id: 20, word: "advice", phonetic: "/ədˈvaɪs/", definition: "n. 建议，忠告", example: "Can you give me some advice?"},
    // B开头
    {id: 21, word: "back", phonetic: "/bæk/", definition: "adv. 向后；n. 背部", example: "Please sit back."},
    {id: 22, word: "background", phonetic: "/ˈbækɡraʊnd/", definition: "n. 背景", example: "Tell me about your background."},
    {id: 23, word: "bad", phonetic: "/bæd/", definition: "adj. 坏的", example: "The weather is bad today."},
    {id: 24, word: "badly", phonetic: "/ˈbædli/", definition: "adv. 坏地，严重地", example: "He was badly hurt."},
    {id: 25, word: "bag", phonetic: "/bæɡ/", definition: "n. 包，袋子", example: "Pack your bags."},
    {id: 26, word: "baggage", phonetic: "/ˈbæɡɪdʒ/", definition: "n. 行李", example: "How much baggage do you have?"},
    {id: 27, word: "bake", phonetic: "/beɪk/", definition: "v. 烘烤", example: "She baked a cake."},
    {id: 28, word: "balance", phonetic: "/ˈbæləns/", definition: "n. 平衡；v. 使平衡", example: "Try to maintain your balance."},
    {id: 29, word: "ball", phonetic: "/bɔːl/", definition: "n. 球；舞会", example: "Throw me the ball."},
    {id: 30, word: "balloon", phonetic: "/bəˈluːn/", definition: "n. 气球", example: "The balloon flew away."}
];

// 游戏状态管理
class GameState {
    constructor() {
        this.currentScreen = 'main';
        this.gameState = {
            hearts: GAME_CONFIG.MAX_HEARTS,
            score: 0,
            currentQuestionIndex: 0,
            questions: [],
            isAnswering: false,
            wrongAnswers: []
        };
        this.mistakeBook = this.loadMistakeBook();
        this.masteredWords = this.loadMasteredWords();
        this.dailyStreak = this.loadDailyStreak();
        this.usedWordIds = new Set();
    }

    // 本地存储管理
    loadMistakeBook() {
        const stored = localStorage.getItem('mistakeBook');
        return stored ? JSON.parse(stored) : [];
    }

    saveMistakeBook() {
        localStorage.setItem('mistakeBook', JSON.stringify(this.mistakeBook));
    }

    loadMasteredWords() {
        const stored = localStorage.getItem('masteredWords');
        return stored ? JSON.parse(stored) : [];
    }

    saveMasteredWords() {
        localStorage.setItem('masteredWords', JSON.stringify(this.masteredWords));
    }

    loadDailyStreak() {
        const stored = localStorage.getItem('dailyStreak');
        if (stored) {
            const data = JSON.parse(stored);
            const today = new Date().toDateString();
            if (data.lastDate === today) {
                return data.count;
            } else if (new Date(data.lastDate).toDateString() !== new Date().toDateString()) {
                // 新的一天，重置连击
                this.saveDailyStreak(1);
                return 1;
            }
        }
        return 1;
    }

    saveDailyStreak(count) {
        localStorage.setItem('dailyStreak', JSON.stringify({
            count: count,
            lastDate: new Date().toDateString()
        }));
    }

    // 添加错题到错题本
    addToMistakeBook(word, wrongAnswer, correctAnswer) {
        const existingMistake = this.mistakeBook.find(m => m.wordId === word.id);
        
        if (!existingMistake) {
            this.mistakeBook.push({
                wordId: word.id,
                word: word.word,
                phonetic: word.phonetic,
                definition: word.definition,
                example: word.example,
                wrongAnswer: wrongAnswer,
                correctAnswer: correctAnswer,
                dateAdded: new Date().toISOString(),
                status: 'pending' // pending 或 conquered
            });
            this.saveMistakeBook();
        }
    }

    // 标记错题为已攻克
    conquerMistake(wordId) {
        const mistake = this.mistakeBook.find(m => m.wordId === wordId);
        if (mistake) {
            mistake.status = 'conquered';
            mistake.conqueredDate = new Date().toISOString();
            this.saveMistakeBook();
        }
    }

    // 获取待复习的错题
    getPendingMistakes() {
        return this.mistakeBook.filter(m => m.status === 'pending');
    }

    // 获取已掌握的单词数量
    getMasteredCount() {
        return this.masteredWords.length;
    }

    // 更新统计数据
    updateStats() {
        document.getElementById('mastered-count').textContent = `${this.getMasteredCount()} / 3500`;
        document.getElementById('streak-count').textContent = `🔥 ${this.dailyStreak}`;
        document.getElementById('mistake-count').textContent = this.getPendingMistakes().length;
    }
}

// 游戏控制器
const gameController = new GameState();

// DOM 元素
const elements = {
    // 主屏幕
    mainScreen: document.getElementById('main-screen'),
    gameScreen: document.getElementById('game-screen'),
    mistakeBookScreen: document.getElementById('mistake-book-screen'),
    startSprintBtn: document.getElementById('start-sprint-btn'),
    mistakeBookBtn: document.getElementById('mistake-book-btn'),
    backToMainBtn: document.getElementById('back-to-main-btn'),
    backToMainFromMistakeBtn: document.getElementById('back-to-main-from-mistake-btn'),
    
    // 游戏元素
    hearts: document.getElementById('hearts'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionWord: document.getElementById('question-word'),
    questionPhonetic: document.getElementById('question-phonetic'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackToast: document.getElementById('feedback-toast'),
    gameOverModal: document.getElementById('game-over-modal'),
    finalScore: document.getElementById('final-score'),
    
    // 错题本元素
    mistakeList: document.getElementById('mistake-list'),
    totalMistakes: document.getElementById('total-mistakes'),
    emptyMistakes: document.getElementById('empty-mistakes')
};

// 工具函数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomWords(count, excludeIds = []) {
    const availableWords = WORD_DATABASE.filter(word => !excludeIds.includes(word.id));
    const shuffled = shuffleArray(availableWords);
    return shuffled.slice(0, count);
}

// 屏幕切换功能
function switchScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    switch(screenName) {
        case 'main':
            elements.mainScreen.classList.add('active');
            gameController.updateStats();
            break;
        case 'game':
            elements.gameScreen.classList.add('active');
            startGame();
            break;
        case 'mistake-book':
            elements.mistakeBookScreen.classList.add('active');
            displayMistakeBook();
            break;
    }
    
    gameController.currentScreen = screenName;
}

// 生成题目（优先从错题本选择）
function generateQuestion() {
    const pendingMistakes = gameController.getPendingMistakes();
    let correctWord;
    
    // 优先从错题本选择
    if (pendingMistakes.length > 0 && Math.random() < 0.7) { // 70% 概率选择错题
        const randomMistake = pendingMistakes[Math.floor(Math.random() * pendingMistakes.length)];
        correctWord = WORD_DATABASE.find(w => w.id === randomMistake.wordId);
    } else {
        // 从普通单词中选择
        const availableWords = WORD_DATABASE.filter(word => !gameController.usedWordIds.has(word.id));
        if (availableWords.length === 0) {
            gameController.usedWordIds.clear();
            return generateQuestion();
        }
        correctWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    }
    
    gameController.usedWordIds.add(correctWord.id);
    
    // 获取错误选项
    const wrongWords = getRandomWords(
        GAME_CONFIG.OPTIONS_PER_QUESTION - 1,
        [correctWord.id]
    );
    
    const allOptions = [correctWord, ...wrongWords];
    const shuffledOptions = shuffleArray(allOptions);
    
    return {
        word: correctWord.word,
        phonetic: correctWord.phonetic,
        correctAnswer: correctWord.definition,
        options: shuffledOptions.map(word => word.definition),
        correctIndex: shuffledOptions.findIndex(word => word.id === correctWord.id),
        wordId: correctWord.id
    };
}

function generateQuestions() {
    const questions = [];
    gameController.usedWordIds.clear();
    
    for (let i = 0; i < GAME_CONFIG.QUESTIONS_PER_SESSION; i++) {
        questions.push(generateQuestion());
    }
    
    return questions;
}

// UI 更新函数
function updateHearts() {
    const heartElements = elements.hearts.querySelectorAll('.heart');
    heartElements.forEach((heart, index) => {
        if (index < gameController.gameState.hearts) {
            heart.classList.remove('lost');
        } else {
            heart.classList.add('lost');
        }
    });
}

function updateProgress() {
    const progress = (gameController.gameState.currentQuestionIndex / GAME_CONFIG.QUESTIONS_PER_SESSION) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${gameController.gameState.currentQuestionIndex}/${GAME_CONFIG.QUESTIONS_PER_SESSION}`;
}

function displayQuestion() {
    const question = gameController.gameState.questions[gameController.gameState.currentQuestionIndex];
    
    elements.questionWord.textContent = question.word;
    elements.questionPhonetic.textContent = question.phonetic;
    elements.questionText.textContent = "What does this word mean?";
    
    elements.optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => handleAnswer(index);
        elements.optionsContainer.appendChild(button);
    });
}

// 游戏逻辑函数
function handleAnswer(selectedIndex) {
    if (gameController.gameState.isAnswering) return;
    
    gameController.gameState.isAnswering = true;
    const question = gameController.gameState.questions[gameController.gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    
    const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    if (isCorrect) {
        handleCorrectAnswer(buttons[selectedIndex], question);
    } else {
        handleWrongAnswer(buttons[selectedIndex], buttons[question.correctIndex], question);
    }
}

function handleCorrectAnswer(selectedButton, question) {
    selectedButton.classList.add('correct');
    gameController.gameState.score++;
    
    // 如果是错题本中的单词，标记为已攻克
    gameController.conquerMistake(question.wordId);
    
    // 添加到已掌握单词
    if (!gameController.masteredWords.includes(question.wordId)) {
        gameController.masteredWords.push(question.wordId);
        gameController.saveMasteredWords();
    }
    
    showFeedback('漂亮！ 🎉', false);
    playSound('correct');
    
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function handleWrongAnswer(selectedButton, correctButton, question) {
    selectedButton.classList.add('incorrect');
    correctButton.classList.add('correct');
    
    gameController.gameState.hearts--;
    updateHearts();
    
    // 添加到错题本
    const wrongAnswer = question.options[elements.optionsContainer.querySelectorAll('.option-btn').length - 1];
    const word = WORD_DATABASE.find(w => w.id === question.wordId);
    gameController.addToMistakeBook(word, wrongAnswer, question.correctAnswer);
    
    showFeedback(`正确答案：${question.correctAnswer}`, true);
    playSound('wrong');
    
    if (gameController.gameState.hearts <= 0) {
        setTimeout(() => {
            gameOver();
        }, 2000);
    } else {
        setTimeout(() => {
            nextQuestion();
        }, 2500);
    }
}

function nextQuestion() {
    gameController.gameState.currentQuestionIndex++;
    gameController.gameState.isAnswering = false;
    
    if (gameController.gameState.currentQuestionIndex >= GAME_CONFIG.QUESTIONS_PER_SESSION) {
        gameComplete();
    } else {
        updateProgress();
        displayQuestion();
    }
}

function showFeedback(message, isError) {
    elements.feedbackToast.textContent = message;
    elements.feedbackToast.className = `feedback-toast ${isError ? 'error' : ''}`;
    elements.feedbackToast.classList.add('show');
    
    setTimeout(() => {
        elements.feedbackToast.classList.remove('show');
    }, 2000);
}

function playSound(type) {
    // 创建简单的音效
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'correct') {
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (type === 'wrong') {
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }
    } catch (error) {
        console.log('Sound effect:', type);
    }
}

function gameComplete() {
    elements.finalScore.textContent = gameController.gameState.score;
    elements.gameOverModal.style.display = 'flex';
    
    // 更新连击
    gameController.dailyStreak++;
    gameController.saveDailyStreak(gameController.dailyStreak);
}

function gameOver() {
    elements.finalScore.textContent = gameController.gameState.score;
    elements.gameOverModal.style.display = 'flex';
}

function startGame() {
    gameController.gameState = {
        hearts: GAME_CONFIG.MAX_HEARTS,
        score: 0,
        currentQuestionIndex: 0,
        questions: generateQuestions(),
        isAnswering: false,
        wrongAnswers: []
    };
    
    elements.gameOverModal.style.display = 'none';
    
    updateHearts();
    updateProgress();
    displayQuestion();
}

function restartGame() {
    startGame();
}

function backToMain() {
    switchScreen('main');
}

// 错题本功能
function displayMistakeBook() {
    const pendingMistakes = gameController.getPendingMistakes();
    
    elements.totalMistakes.textContent = pendingMistakes.length;
    
    if (pendingMistakes.length === 0) {
        elements.mistakeList.style.display = 'none';
        elements.emptyMistakes.style.display = 'block';
    } else {
        elements.mistakeList.style.display = 'flex';
        elements.emptyMistakes.style.display = 'none';
        
        elements.mistakeList.innerHTML = '';
        pendingMistakes.forEach(mistake => {
            const mistakeElement = createMistakeElement(mistake);
            elements.mistakeList.appendChild(mistakeElement);
        });
    }
}

function createMistakeElement(mistake) {
    const div = document.createElement('div');
    div.className = 'mistake-item';
    
    const date = new Date(mistake.dateAdded).toLocaleDateString('zh-CN');
    
    div.innerHTML = `
        <div class="mistake-word">${mistake.word}</div>
        <div class="mistake-phonetic">${mistake.phonetic}</div>
        <div class="mistake-definition">${mistake.definition}</div>
        <div class="mistake-example">${mistake.example}</div>
        <div class="mistake-meta">
            <span class="mistake-date">记录于: ${date}</span>
            <span class="mistake-status ${mistake.status}">${mistake.status === 'pending' ? '待攻克' : '已攻克'}</span>
        </div>
    `;
    
    return div;
}

// 键盘支持
function handleKeyPress(event) {
    if (gameController.currentScreen !== 'game' || gameController.gameState.isAnswering) return;
    
    const key = event.key;
    const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
    
    if (key >= '1' && key <= '4') {
        const index = parseInt(key) - 1;
        if (index < buttons.length) {
            handleAnswer(index);
        }
    }
}

// 事件监听器
function initEventListeners() {
    // 主屏幕按钮
    elements.startSprintBtn.addEventListener('click', () => switchScreen('game'));
    elements.mistakeBookBtn.addEventListener('click', () => switchScreen('mistake-book'));
    
    // 返回按钮
    elements.backToMainBtn.addEventListener('click', backToMain);
    elements.backToMainFromMistakeBtn.addEventListener('click', () => switchScreen('main'));
    
    // 键盘事件
    document.addEventListener('keydown', handleKeyPress);
}

// 初始化游戏
function initGame() {
    initEventListeners();
    gameController.updateStats();
    switchScreen('main');
}

// 启动游戏
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

// 全局函数（供HTML调用）
window.restartGame = restartGame;
window.backToMain = backToMain;