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
    {id: 30, word: "balloon", phonetic: "/bəˈluːn/", definition: "n. 气球", example: "The balloon flew away."},
    // C开头
    {id: 31, word: "call", phonetic: "/kɔːl/", definition: "v. 呼叫，打电话", example: "I'll call you tomorrow."},
    {id: 32, word: "can", phonetic: "/kæn/", definition: "v. 能，会", example: "I can swim very well."},
    {id: 33, word: "care", phonetic: "/keə(r)/", definition: "v. 关心，照顾", example: "I care about you deeply."},
    {id: 34, word: "carry", phonetic: "/ˈkæri/", definition: "v. 携带，搬运", example: "Can you carry this box?"},
    {id: 35, word: "catch", phonetic: "/kætʃ/", definition: "v. 抓住，赶上", example: "I caught the ball."},
    {id: 36, word: "cause", phonetic: "/kɔːz/", definition: "v. 引起，导致", example: "Smoking can cause cancer."},
    {id: 37, word: "center", phonetic: "/ˈsentə(r)/", definition: "n. 中心，中央", example: "The city center is busy."},
    {id: 38, word: "certain", phonetic: "/ˈsɜːtn/", definition: "adj. 确定的，肯定的", example: "I'm certain about this."},
    {id: 39, word: "chance", phonetic: "/tʃɑːns/", definition: "n. 机会，可能性", example: "This is your last chance."},
    {id: 40, word: "change", phonetic: "/tʃeɪndʒ/", definition: "v. 改变，变化", example: "The weather changes quickly."},
    // D开头
    {id: 41, word: "dance", phonetic: "/dɑːns/", definition: "v. 跳舞", example: "Let's dance together."},
    {id: 42, word: "danger", phonetic: "/ˈdeɪndʒə(r)/", definition: "n. 危险", example: "This is a dangerous area."},
    {id: 43, word: "dark", phonetic: "/dɑːk/", definition: "adj. 黑暗的", example: "It's very dark outside."},
    {id: 44, word: "date", phonetic: "/deɪt/", definition: "n. 日期，约会", example: "What's today's date?"},
    {id: 45, word: "daughter", phonetic: "/ˈdɔːtə(r)/", definition: "n. 女儿", example: "His daughter is beautiful."},
    {id: 46, word: "day", phonetic: "/deɪ/", definition: "n. 天，日子", example: "Have a nice day!"},
    {id: 47, word: "dead", phonetic: "/ded/", definition: "adj. 死的", example: "The plant is dead."},
    {id: 48, word: "deal", phonetic: "/diːl/", definition: "v. 处理，交易", example: "I can deal with this."},
    {id: 49, word: "death", phonetic: "/deθ/", definition: "n. 死亡", example: "Death is inevitable."},
    {id: 50, word: "decide", phonetic: "/dɪˈsaɪd/", definition: "v. 决定", example: "I need to decide now."},
    // E开头
    {id: 51, word: "early", phonetic: "/ˈɜːli/", definition: "adj. 早的", example: "I wake up early."},
    {id: 52, word: "earth", phonetic: "/ɜːθ/", definition: "n. 地球", example: "The Earth is beautiful."},
    {id: 53, word: "east", phonetic: "/iːst/", definition: "n. 东方", example: "The sun rises in the east."},
    {id: 54, word: "easy", phonetic: "/ˈiːzi/", definition: "adj. 容易的", example: "This test is easy."},
    {id: 55, word: "eat", phonetic: "/iːt/", definition: "v. 吃", example: "I eat breakfast daily."},
    {id: 56, word: "education", phonetic: "/ˌedʒuˈkeɪʃn/", definition: "n. 教育", example: "Education is important."},
    {id: 57, word: "effect", phonetic: "/ɪˈfekt/", definition: "n. 效果，影响", example: "The effect was amazing."},
    {id: 58, word: "effort", phonetic: "/ˈefət/", definition: "n. 努力", example: "Make an effort to win."},
    {id: 59, word: "either", phonetic: "/ˈaɪðə(r)/", definition: "adj. 任一的", example: "Either choice is good."},
    {id: 60, word: "elect", phonetic: "/ɪˈlekt/", definition: "v. 选举", example: "People elect leaders."},
    // F开头
    {id: 61, word: "face", phonetic: "/feɪs/", definition: "n. 脸，面孔", example: "She has a pretty face."},
    {id: 62, word: "fact", phonetic: "/fækt/", definition: "n. 事实", example: "This is a proven fact."},
    {id: 63, word: "fail", phonetic: "/feɪl/", definition: "v. 失败", example: "Don't fail this test."},
    {id: 64, word: "fall", phonetic: "/fɔːl/", definition: "v. 落下，摔倒", example: "Leaves fall in autumn."},
    {id: 65, word: "family", phonetic: "/ˈfæməli/", definition: "n. 家庭", example: "My family is large."},
    {id: 66, word: "famous", phonetic: "/ˈfeɪməs/", definition: "adj. 著名的", example: "He is a famous actor."},
    {id: 67, word: "fantastic", phonetic: "/fænˈtæstɪk/", definition: "adj. 极好的", example: "That's fantastic news!"},
    {id: 68, word: "far", phonetic: "/fɑː(r)/", definition: "adj. 远的", example: "The school is far away."},
    {id: 69, word: "farm", phonetic: "/fɑːm/", definition: "n. 农场", example: "They live on a farm."},
    {id: 70, word: "fast", phonetic: "/fɑːst/", definition: "adj. 快的", example: "The car is very fast."},
    // 更多单词...
    {id: 71, word: "father", phonetic: "/ˈfɑːðə(r)/", definition: "n. 父亲", example: "My father is kind."},
    {id: 72, word: "fear", phonetic: "/fɪə(r)/", definition: "v. 害怕", example: "Don't fear failure."},
    {id: 73, word: "feature", phonetic: "/ˈfiːtʃə(r)/", definition: "n. 特征", example: "This phone has great features."},
    {id: 74, word: "feel", phonetic: "/fiːl/", definition: "v. 感觉", example: "I feel happy today."},
    {id: 75, word: "female", phonetic: "/ˈfiːmeɪl/", definition: "adj. 女性的", example: "The female lion hunts."},
    {id: 76, word: "festival", phonetic: "/ˈfestɪvl/", definition: "n. 节日", example: "Christmas is a festival."},
    {id: 77, word: "few", phonetic: "/fjuː/", definition: "adj. 很少的", example: "Few people know this."},
    {id: 78, word: "field", phonetic: "/fiːld/", definition: "n. 田野，领域", example: "The field is green."},
    {id: 79, word: "fight", phonetic: "/faɪt/", definition: "v. 战斗，打架", example: "Don't fight with others."},
    {id: 80, word: "figure", phonetic: "/ˈfɪɡə(r)/", definition: "n. 数字，人物", example: "What's the figure?"},
    {id: 81, word: "fill", phonetic: "/fɪl/", definition: "v. 填充", example: "Fill the glass with water."},
    {id: 82, word: "film", phonetic: "/fɪlm/", definition: "n. 电影", example: "The film was boring."},
    {id: 83, word: "final", phonetic: "/ˈfaɪnl/", definition: "adj. 最终的", example: "This is the final decision."},
    {id: 84, word: "find", phonetic: "/faɪnd/", definition: "v. 找到", example: "I found my keys."},
    {id: 85, word: "fine", phonetic: "/faɪn/", definition: "adj. 好的", example: "I'm fine, thank you."},
    {id: 86, word: "finger", phonetic: "/ˈfɪŋɡə(r)/", definition: "n. 手指", example: "I have ten fingers."},
    {id: 87, word: "finish", phonetic: "/ˈfɪnɪʃ/", definition: "v. 完成", example: "Finish your homework."},
    {id: 88, word: "fire", phonetic: "/ˈfaɪə(r)/", definition: "n. 火", example: "The fire is warm."},
    {id: 89, word: "first", phonetic: "/fɜːst/", definition: "adj. 第一的", example: "She was first in line."},
    {id: 90, word: "fish", phonetic: "/fɪʃ/", definition: "n. 鱼", example: "I like eating fish."},
    {id: 91, word: "fit", phonetic: "/fɪt/", definition: "v. 适合", example: "These shoes fit well."},
    {id: 92, word: "five", phonetic: "/faɪv/", definition: "num. 五", example: "I have five fingers."},
    {id: 93, word: "fix", phonetic: "/fɪks/", definition: "v. 修理", example: "Can you fix this?"},
    {id: 94, word: "flag", phonetic: "/flæɡ/", definition: "n. 旗帜", example: "The flag is red."},
    {id: 95, word: "flat", phonetic: "/flæt/", definition: "adj. 平的", example: "The surface is flat."},
    {id: 96, word: "flight", phonetic: "/flaɪt/", definition: "n. 航班", example: "My flight is delayed."},
    {id: 97, word: "floor", phonetic: "/flɔː(r)/", definition: "n. 地板", example: "The floor is clean."},
    {id: 98, word: "flower", phonetic: "/ˈflaʊə(r)/", definition: "n. 花", example: "The flower is beautiful."},
    {id: 99, word: "fly", phonetic: "/flaɪ/", definition: "v. 飞", example: "Birds can fly."},
    {id: 100, word: "follow", phonetic: "/ˈfɒləʊ/", definition: "v. 跟随", example: "Follow me please."}
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
        let availableWords = WORD_DATABASE.filter(word => !gameController.usedWordIds.has(word.id));
        
        // 如果可用单词不足，清空已使用单词记录
        if (availableWords.length < GAME_CONFIG.OPTIONS_PER_QUESTION) {
            gameController.usedWordIds.clear();
            availableWords = WORD_DATABASE;
        }
        
        if (availableWords.length === 0) {
            // 如果还是没有单词，返回一个默认单词
            correctWord = WORD_DATABASE[0];
        } else {
            correctWord = availableWords[Math.floor(Math.random() * availableWords.length)];
        }
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
    
    // 更新鼓励信息
    const score = gameController.gameState.score;
    const message = document.querySelector('.modal-message');
    if (score >= 18) {
        message.textContent = '太棒了！你是词汇大师！🏆';
    } else if (score >= 15) {
        message.textContent = '很好！继续努力！🌟';
    } else if (score >= 10) {
        message.textContent = '不错！再试一次会更好！💪';
    } else {
        message.textContent = '加油！多练习就能进步！📚';
    }
}

function gameOver() {
    elements.finalScore.textContent = gameController.gameState.score;
    elements.gameOverModal.style.display = 'flex';
    
    // 更新鼓励信息 - 心耗尽的情况
    const message = document.querySelector('.modal-message');
    const score = gameController.gameState.score;
    message.textContent = `生命值耗尽！你答对了 ${score} 题，再试一次吧！❤️‍🩹`;
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