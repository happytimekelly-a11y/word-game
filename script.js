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
    {
        id: 1,
        word: "abandon",
        phonetic: "/əˈbændən/",
        definition: "v. 放弃，抛弃",
        example: "We had to abandon the car."
    },
    {
        id: 2,
        word: "ability",
        phonetic: "/əˈbɪləti/",
        definition: "n. 能力；才能",
        example: "She has the ability to manage a large team."
    },
    {
        id: 3,
        word: "able",
        phonetic: "/ˈeɪbl/",
        definition: "adj. 能够的；有能力的",
        example: "You must be able to speak French for this job."
    },
    {
        id: 4,
        word: "about",
        phonetic: "/əˈbaʊt/",
        definition: "prep. 关于；大约",
        example: "Tell me all about your holiday."
    },
    {
        id: 5,
        word: "above",
        phonetic: "/əˈbʌv/",
        definition: "prep. 在…上面",
        example: "The helicopter was hovering above the building."
    },
    {
        id: 6,
        word: "accept",
        phonetic: "/əkˈsept/",
        definition: "v. 接受，同意",
        example: "She accepted the job offer."
    },
    {
        id: 7,
        word: "accident",
        phonetic: "/ˈæksɪdənt/",
        definition: "n. 事故，意外",
        example: "There was a car accident yesterday."
    },
    {
        id: 8,
        word: "achieve",
        phonetic: "/əˈtʃiːv/",
        definition: "v. 实现，达到",
        example: "She achieved her goal of becoming a doctor."
    },
    {
        id: 9,
        word: "across",
        phonetic: "/əˈkrɒs/",
        definition: "prep. 穿过，横过",
        example: "He walked across the street."
    },
    {
        id: 10,
        word: "act",
        phonetic: "/ækt/",
        definition: "v. 行动，表演",
        example: "You must act now to solve this problem."
    },
    {
        id: 11,
        word: "add",
        phonetic: "/æd/",
        definition: "v. 添加，增加",
        example: "Please add some sugar to my coffee."
    },
    {
        id: 12,
        word: "address",
        phonetic: "/əˈdres/",
        definition: "n. 地址；v. 演讲",
        example: "What is your home address?"
    },
    {
        id: 13,
        word: "admire",
        phonetic: "/ədˈmaɪə(r)/",
        definition: "v. 钦佩，欣赏",
        example: "I admire your courage."
    },
    {
        id: 14,
        word: "admit",
        phonetic: "/ədˈmɪt/",
        definition: "v. 承认，准许进入",
        example: "He admitted his mistake."
    },
    {
        id: 15,
        word: "adopt",
        phonetic: "/əˈdɒpt/",
        definition: "v. 采纳，收养",
        example: "They decided to adopt a child."
    },
    // 更多单词...
    {id: 16, word: "advance", phonetic: "/ədˈvɑːns/", definition: "v. 前进，提高", example: "Technology has advanced greatly."},
    {id: 17, word: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", definition: "n. 优势，好处", example: "Her height gives her an advantage."},
    {id: 18, word: "adventure", phonetic: "/ədˈventʃə(r)/", definition: "n. 冒险，奇遇", example: "They went on an adventure."},
    {id: 19, word: "advertise", phonetic: "/ˈædvətaɪz/", definition: "v. 做广告", example: "They advertised the new product."},
    {id: 20, word: "advice", phonetic: "/ədˈvaɪs/", definition: "n. 建议，忠告", example: "Can you give me some advice?"},
    {id: 21, word: "advise", phonetic: "/ədˈvaɪz/", definition: "v. 建议，劝告", example: "I advise you to study hard."},
    {id: 22, word: "affair", phonetic: "/əˈfeə(r)/", definition: "n. 事情，事件", example: "That's my personal affair."},
    {id: 23, word: "affect", phonetic: "/əˈfekt/", definition: "v. 影响", example: "The weather affects my mood."},
    {id: 24, word: "afford", phonetic: "/əˈfɔːd/", definition: "v. 负担得起", example: "I can't afford this car."},
    {id: 25, word: "afraid", phonetic: "/əˈfreɪd/", definition: "adj. 害怕的", example: "She is afraid of spiders."},
    {id: 26, word: "Africa", phonetic: "/ˈæfrɪkə/", definition: "n. 非洲", example: "She traveled to Africa."},
    {id: 27, word: "African", phonetic: "/ˈæfrɪkən/", definition: "adj. 非洲的", example: "They speak African languages."},
    {id: 28, word: "after", phonetic: "/ˈɑːftə(r)/", definition: "prep. 在…之后", example: "We'll meet after dinner."},
    {id: 29, word: "afternoon", phonetic: "/ˌɑːftəˈnuːn/", definition: "n. 下午", example: "We have a meeting in the afternoon."},
    {id: 30, word: "again", phonetic: "/əˈɡen/", definition: "adv. 又一次", example: "Please try again."},
    {id: 31, word: "against", phonetic: "/əˈɡenst/", definition: "prep. 反对，靠着", example: "They voted against the plan."},
    {id: 32, word: "age", phonetic: "/eɪdʒ/", definition: "n. 年龄；时代", example: "What's your age?"},
    {id: 33, word: "aged", phonetic: "/eɪdʒd/", definition: "adj. …岁的", example: "Aged 25, she became successful."},
    {id: 34, word: "agency", phonetic: "/ˈeɪdʒənsi/", definition: "n. 代理机构", example: "I booked through a travel agency."},
    {id: 35, word: "agent", phonetic: "/ˈeɪdʒənt/", definition: "n. 代理人，特工", example: "He works as a secret agent."},
    {id: 36, word: "aggressive", phonetic: "/əˈɡresɪv/", definition: "adj. 侵略的，积极的", example: "The company took aggressive action."},
    {id: 37, word: "ago", phonetic: "/əˈɡəʊ/", definition: "adv. 以前", example: "She left two hours ago."},
    {id: 38, word: "agree", phonetic: "/əˈɡriː/", definition: "v. 同意", example: "I agree with you."},
    {id: 39, word: "agreement", phonetic: "/əˈɡriːmənt/", definition: "n. 同意，协议", example: "We reached an agreement."},
    {id: 40, word: "agriculture", phonetic: "/ˈæɡrɪkʌltʃə(r)/", definition: "n. 农业", example: "Agriculture is important."},
    {id: 41, word: "ahead", phonetic: "/əˈhed/", definition: "adv. 向前，在前面", example: "The car ahead stopped suddenly."},
    {id: 42, word: "aid", phonetic: "/eɪd/", definition: "n. 帮助，援助", example: "They provided aid to victims."},
    {id: 43, word: "aim", phonetic: "/eɪm/", definition: "n. 目标；v. 瞄准", example: "What's your aim in life?"},
    {id: 44, word: "air", phonetic: "/eə(r)/", definition: "n. 空气", example: "The air is fresh today."},
    {id: 45, word: "aircraft", phonetic: "/ˈeəkrɑːft/", definition: "n. 飞机", example: "The aircraft landed safely."},
    {id: 46, word: "airline", phonetic: "/ˈeəlaɪn/", definition: "n. 航空公司", example: "Which airline did you take?"},
    {id: 47, word: "airplane", phonetic: "/ˈeəpleɪn/", definition: "n. 飞机", example: "The airplane took off on time."},
    {id: 48, word: "airport", phonetic: "/ˈeəpɔːt/", definition: "n. 机场", example: "We met at the airport."},
    {id: 49, word: "alarm", phonetic: "/əˈlɑːm/", definition: "n. 警报；闹钟", example: "The alarm woke me up."},
    {id: 50, word: "album", phonetic: "/ˈælbəm/", definition: "n. 相册，专辑", example: "She bought a new album."},
    // B开头单词
    {id: 51, word: "back", phonetic: "/bæk/", definition: "adv. 向后；n. 背部", example: "Please sit back."},
    {id: 52, word: "background", phonetic: "/ˈbækɡraʊnd/", definition: "n. 背景", example: "Tell me about your background."},
    {id: 53, word: "bad", phonetic: "/bæd/", definition: "adj. 坏的", example: "The weather is bad today."},
    {id: 54, word: "badly", phonetic: "/ˈbædli/", definition: "adv. 坏地，严重地", example: "He was badly hurt."},
    {id: 55, word: "bag", phonetic: "/bæɡ/", definition: "n. 包，袋子", example: "Pack your bags."},
    {id: 56, word: "baggage", phonetic: "/ˈbæɡɪdʒ/", definition: "n. 行李", example: "How much baggage do you have?"},
    {id: 57, word: "bake", phonetic: "/beɪk/", definition: "v. 烘烤", example: "She baked a cake."},
    {id: 58, word: "balance", phonetic: "/ˈbæləns/", definition: "n. 平衡；v. 使平衡", example: "Try to maintain your balance."},
    {id: 59, word: "ball", phonetic: "/bɔːl/", definition: "n. 球；舞会", example: "Throw me the ball."},
    {id: 60, word: "balloon", phonetic: "/bəˈluːn/", definition: "n. 气球", example: "The balloon flew away."},
    {id: 61, word: "game", phonetic: "/ɡeɪm/", definition: "n. 游戏", example: "Let's play a game."},
    {id: 62, word: "gap", phonetic: "/ɡæp/", definition: "n. 缺口，差距", example: "There's a gap in the wall."},
    {id: 63, word: "garage", phonetic: "/ˈɡærɑːʒ/", definition: "n. 车库", example: "Park the car in the garage."},
    {id: 64, word: "garbage", phonetic: "/ˈɡɑːbɪdʒ/", definition: "n. 垃圾", example: "Take out the garbage."},
    {id: 65, word: "garden", phonetic: "/ˈɡɑːdn/", definition: "n. 花园", example: "She has a beautiful garden."},
    {id: 66, word: "gas", phonetic: "/ɡæs/", definition: "n. 气体；汽油", example: "The car needs gas."},
    {id: 67, word: "gate", phonetic: "/ɡeɪt/", definition: "n. 大门", example: "Close the gate behind you."},
    {id: 68, word: "gather", phonetic: "/ˈɡæðə(r)/", definition: "v. 聚集", example: "Let's gather for dinner."},
    {id: 69, word: "gay", phonetic: "/ɡeɪ/", definition: "adj. 快乐的；同性恋的", example: "She has a gay personality."},
    {id: 70, word: "general", phonetic: "/ˈdʒenrəl/", definition: "adj. 一般的", example: "Give me a general idea."},
    {id: 71, word: "generation", phonetic: "/ˌdʒenəˈreɪʃn/", definition: "n. 一代，产生", example: "Our generation is different."},
    {id: 72, word: "generous", phonetic: "/ˈdʒenərəs/", definition: "adj. 慷慨的", example: "She is very generous."},
    {id: 73, word: "gentle", phonetic: "/ˈdʒentl/", definition: "adj. 温柔的", example: "Be gentle with the baby."},
    {id: 74, word: "gentleman", phonetic: "/ˈdʒentlmən/", definition: "n. 绅士", example: "He is a true gentleman."},
    {id: 75, word: "geography", phonetic: "/dʒiˈɒɡrəfi/", definition: "n. 地理", example: "We study geography at school."},
    {id: 76, word: "geometry", phonetic: "/dʒiˈɒmətri/", definition: "n. 几何学", example: "Geometry is difficult."},
    {id: 77, word: "gesture", phonetic: "/ˈdʒestʃə(r)/", definition: "n. 手势，姿态", example: "She made a friendly gesture."},
    {id: 78, word: "get", phonetic: "/ɡet/", definition: "v. 得到", example: "I got a gift."},
    {id: 79, word: "ghost", phonetic: "/ɡəʊst/", definition: "n. 鬼魂", example: "The ghost appeared at night."},
    {id: 80, word: "giant", phonetic: "/ˈdʒaɪənt/", definition: "n. 巨人", example: "He is a giant in business."},
    {id: 81, word: "gift", phonetic: "/ɡɪft/", definition: "n. 礼物，天赋", example: "She has a gift for music."},
    {id: 82, word: "girl", phonetic: "/ɡɜːl/", definition: "n. 女孩", example: "The girl is playing."},
    {id: 83, word: "give", phonetic: "/ɡɪv/", definition: "v. 给", example: "Give me the book."},
    {id: 84, word: "glad", phonetic: "/ɡlæd/", definition: "adj. 高兴的", example: "I'm glad to see you."},
    {id: 85, word: "glance", phonetic: "/ɡlɑːns/", definition: "v. 扫视", example: "She glanced at the clock."},
    {id: 86, word: "glass", phonetic: "/ɡlɑːs/", definition: "n. 玻璃", example: "Be careful with the glass."},
    {id: 87, word: "global", phonetic: "/ˈɡləʊbl/", definition: "adj. 全球的", example: "Global warming is serious."},
    {id: 88, word: "glove", phonetic: "/ɡlʌv/", definition: "n. 手套", example: "Wear gloves in winter."},
    {id: 89, word: "glue", phonetic: "/ɡluː/", definition: "n. 胶水", example: "Use glue to fix it."},
    {id: 90, word: "go", phonetic: "/ɡəʊ/", definition: "v. 去", example: "Let's go home."},
    {id: 91, word: "goal", phonetic: "/ɡəʊl/", definition: "n. 目标", example: "What's your goal?"},
    {id: 92, word: "goat", phonetic: "/ɡəʊt/", definition: "n. 山羊", example: "The goat climbed the hill."},
    {id: 93, word: "god", phonetic: "/ɡɒd/", definition: "n. 上帝，神", example: "Thank God for that."},
    {id: 94, word: "gold", phonetic: "/ɡəʊld/", definition: "n. 黄金", example: "Gold is expensive."},
    {id: 95, word: "golden", phonetic: "/ˈɡəʊldən/", definition: "adj. 金色的", example: "She has golden hair."},
    {id: 96, word: "golf", phonetic: "/ɡɒlf/", definition: "n. 高尔夫球", example: "He plays golf on weekends."},
    {id: 97, word: "good", phonetic: "/ɡʊd/", definition: "adj. 好的", example: "That's a good idea."},
    {id: 98, word: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", definition: "int. 再见", example: "Goodbye, my friend."},
    {id: 99, word: "goods", phonetic: "/ɡʊdz/", definition: "n. 商品，货物", example: "The store sells goods."},
    {id: 100, word: "goose", phonetic: "/ɡuːs/", definition: "n. 鹅", example: "The goose honked loudly."}
];

// 已使用的单词记录，避免重复
let usedWordIds = new Set();

// 游戏状态
let gameState = {
    hearts: GAME_CONFIG.MAX_HEARTS,
    score: 0,
    currentQuestionIndex: 0,
    questions: [],
    isAnswering: false,
    wrongAnswers: []
};

// DOM 元素
const elements = {
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
    correctSound: document.getElementById('correct-sound'),
    wrongSound: document.getElementById('wrong-sound')
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

function generateQuestion() {
    // 获取未使用的单词
    const availableWords = WORD_DATABASE.filter(word => !usedWordIds.has(word.id));
    
    // 如果所有单词都用完了，重置记录
    if (availableWords.length === 0) {
        usedWordIds.clear();
        return generateQuestion();
    }
    
    // 随机选择一个正确答案
    const correctWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWordIds.add(correctWord.id);
    
    // 获取错误选项（排除正确答案）
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
        correctIndex: shuffledOptions.findIndex(word => word.id === correctWord.id)
    };
}

function generateQuestions() {
    const questions = [];
    usedWordIds.clear(); // 清空已使用记录
    for (let i = 0; i < GAME_CONFIG.QUESTIONS_PER_SESSION; i++) {
        questions.push(generateQuestion());
    }
    return questions;
}

// UI 更新函数
function updateHearts() {
    const heartElements = elements.hearts.querySelectorAll('.heart');
    heartElements.forEach((heart, index) => {
        if (index < gameState.hearts) {
            heart.classList.remove('lost');
        } else {
            heart.classList.add('lost');
        }
    });
}

function updateProgress() {
    const progress = (gameState.currentQuestionIndex / GAME_CONFIG.QUESTIONS_PER_SESSION) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${gameState.currentQuestionIndex}/${GAME_CONFIG.QUESTIONS_PER_SESSION}`;
}

function displayQuestion() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    
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
    if (gameState.isAnswering) return;
    
    gameState.isAnswering = true;
    const question = gameState.questions[gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    
    const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    if (isCorrect) {
        handleCorrectAnswer(buttons[selectedIndex]);
    } else {
        handleWrongAnswer(buttons[selectedIndex], buttons[question.correctIndex]);
    }
}

function handleCorrectAnswer(selectedButton) {
    selectedButton.classList.add('correct');
    gameState.score++;
    
    showFeedback('漂亮！ 🎉', false);
    playSound('correct');
    
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function handleWrongAnswer(selectedButton, correctButton) {
    selectedButton.classList.add('incorrect');
    correctButton.classList.add('correct');
    
    gameState.hearts--;
    updateHearts();
    
    const question = gameState.questions[gameState.currentQuestionIndex];
    showFeedback(`正确答案：${question.correctAnswer}`, true);
    playSound('wrong');
    
    if (gameState.hearts <= 0) {
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
    gameState.currentQuestionIndex++;
    gameState.isAnswering = false;
    
    if (gameState.currentQuestionIndex >= GAME_CONFIG.QUESTIONS_PER_SESSION) {
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
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
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
        // 忽略音频播放错误
        console.log('Sound effect:', type);
    }
}

function gameComplete() {
    elements.finalScore.textContent = gameState.score;
    elements.gameOverModal.style.display = 'flex';
}

function gameOver() {
    elements.finalScore.textContent = gameState.score;
    elements.gameOverModal.style.display = 'flex';
}

function restartGame() {
    gameState = {
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

// 键盘支持
function handleKeyPress(event) {
    if (gameState.isAnswering) return;
    
    const key = event.key;
    const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
    
    if (key >= '1' && key <= '4') {
        const index = parseInt(key) - 1;
        if (index < buttons.length) {
            handleAnswer(index);
        }
    }
}

// 初始化游戏
function initGame() {
    gameState.questions = generateQuestions();
    
    updateHearts();
    updateProgress();
    displayQuestion();
    
    // 添加键盘事件监听
    document.addEventListener('keydown', handleKeyPress);
}

// 启动游戏
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

// 全局函数（供HTML调用）
window.restartGame = restartGame;