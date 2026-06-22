// Alphabet Data Dictionary
const alphabetData = {
    'A': { word: 'Apple', emoji: '🍎', hindi: 'सेब', sentence: 'सेब खाने से हम सेहतमंद और मजबूत बनते हैं!' },
    'B': { word: 'Ball', emoji: '⚽', hindi: 'गेंद', sentence: 'हम मैदान में गेंद से खेलते हैं!' },
    'C': { word: 'Cat', emoji: '🐱', hindi: 'बिल्ली', sentence: 'बिल्ली म्याऊँ-म्याऊँ करती है और दूध पीती है!' },
    'D': { word: 'Dog', emoji: '🐶', hindi: 'कुत्ता', sentence: 'कुत्ता हमारा सबसे अच्छा दोस्त होता है!' },
    'E': { word: 'Elephant', emoji: '🐘', hindi: 'हाथी', sentence: 'हाथी बहुत बड़ा होता है और उसकी एक लंबी सूंड होती है!' },
    'F': { word: 'Fish', emoji: '🐟', hindi: 'मछली', sentence: 'मछली जल की रानी है, जीवन उसका पानी है!' },
    'G': { word: 'Grapes', emoji: '🍇', hindi: 'अंगूर', sentence: 'खट्टे-मीठे अंगूर खाना सबको पसंद है!' },
    'H': { word: 'Horse', emoji: '🐴', hindi: 'घोड़ा', sentence: 'घोड़ा बहुत तेज़ दौड़ता है!' },
    'I': { word: 'Ice Cream', emoji: '🍦', hindi: 'आइसक्रीम', sentence: 'गर्मियों में ठंडी-ठंडी आइसक्रीम खाने में बड़ा मज़ा आता है!' },
    'J': { word: 'Joker', emoji: '🤡', hindi: 'जोकर', sentence: 'जोकर सर्कस में सबको खूब हंसाता है!' },
    'K': { word: 'Kite', emoji: '🪁', hindi: 'पतंग', sentence: 'हवा में रंग-बिरंगी पतंग उड़ाना बहुत अच्छा लगता है!' },
    'L': { word: 'Lion', emoji: '🦁', hindi: 'शेर', sentence: 'शेर जंगल का राजा होता है!' },
    'M': { word: 'Monkey', emoji: '🐒', hindi: 'बंदर', sentence: 'बंदर पेड़ पर एक डाल से दूसरी डाल पर छलांग लगाता है!' },
    'N': { word: 'Nest', emoji: '🪹', hindi: 'घोंसला', sentence: 'चिड़िया अपना सुंदर घोंसला तिनकों से बनाती है!' },
    'O': { word: 'Orange', emoji: '🍊', hindi: 'संतरा', sentence: 'संतरा खाने से हमें विटामिन सी मिलता है!' },
    'P': { word: 'Parrot', emoji: '🦜', hindi: 'तोता', sentence: 'हरे रंग का तोता बहुत मीठा बोलता है!' },
    'Q': { word: 'Queen', emoji: '👸', hindi: 'रानी', sentence: 'कहानियों में एक सुंदर रानी होती है!' },
    'R': { word: 'Rabbit', emoji: '🐰', hindi: 'खरगोश', sentence: 'प्यारा सा खरगोश बहुत तेज़ दौड़ता है और गाजर खाता है!' },
    'S': { word: 'Sun', emoji: '☀️', hindi: 'सूरज', sentence: 'सूरज हमें रोशनी और गर्मी देता है!' },
    'T': { word: 'Tiger', emoji: '🐯', hindi: 'बाघ', sentence: 'बाघ हमारे देश का राष्ट्रीय जानवर है!' },
    'U': { word: 'Umbrella', emoji: '☂️', hindi: 'छतरी', sentence: 'बारिश होने पर हम छतरी का इस्तेमाल करते हैं!' },
    'V': { word: 'Van', emoji: '🚐', hindi: 'वैन', sentence: 'बच्चे स्कूल वैन में बैठकर स्कूल जाते हैं!' },
    'W': { word: 'Watch', emoji: '⌚', hindi: 'घड़ी', sentence: 'घड़ी हमें समय बताती है!' },
    'X': { word: 'Xylophone', emoji: '🎼', hindi: 'जाइलोफोन', sentence: 'जाइलोफोन बजाने पर मीठी धुन निकलती है!' },
    'Y': { word: 'Yak', emoji: '🐂', hindi: 'याक', sentence: 'याक ठंडे पहाड़ों पर रहता है!' },
    'Z': { word: 'Zebra', emoji: '🦓', hindi: 'ज़ेबरा', sentence: 'ज़ेबरा के शरीर पर काली और सफेद धारियां होती हैं!' }
};

// Poems Data Dictionary
const poemsData = [
    {
        title: "Twinkle Twinkle",
        emoji: "⭐",
        lines: "Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky."
    },
    {
        title: "Baa Baa Black Sheep",
        emoji: "🐑",
        lines: "Baa, baa, black sheep,\nHave you any wool?\nYes, sir, yes, sir,\nThree bags full!"
    },
    {
        title: "Johnny Johnny",
        emoji: "👶",
        lines: "Johnny, Johnny.\nYes, Papa?\nEating sugar?\nNo, Papa.\nTelling lies?\nNo, Papa.\nOpen your mouth.\nHa-ha-ha!"
    },
    {
        title: "Humpty Dumpty",
        emoji: "🥚",
        lines: "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall;\nAll the king's horses and all the king's men\nCouldn't put Humpty together again."
    },
    {
        title: "Rain Rain Go Away",
        emoji: "🌧️",
        lines: "Rain, rain, go away,\nCome again another day;\nLittle Johnny wants to play,\nRain, rain, go away."
    },
    {
        title: "Jack and Jill",
        emoji: "🪣",
        lines: "Jack and Jill went up the hill,\nTo fetch a pail of water.\nJack fell down and broke his crown,\nAnd Jill came tumbling after."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const tabAlphabet = document.getElementById('tab-alphabet');
    const tabPoems = document.getElementById('tab-poems');
    const alphabetGrid = document.getElementById('alphabet-grid');
    const poemsGrid = document.getElementById('poems-grid');
    
    // Modal
    const displayArea = document.getElementById('display-area');
    const closeBtn = document.getElementById('close-btn');
    
    // Alphabet View
    const alphabetView = document.getElementById('alphabet-view');
    const displayEmoji = document.getElementById('display-emoji');
    const displayWord = document.getElementById('display-word');
    const displayHindi = document.getElementById('display-hindi');
    const displaySentence = document.getElementById('display-sentence');

    // Poem View
    const poemView = document.getElementById('poem-view');
    const poemEmoji = document.getElementById('poem-emoji');
    const poemTitle = document.getElementById('poem-title');
    const poemLines = document.getElementById('poem-lines');

    let currentMode = 'alphabet'; // 'alphabet' or 'poems'

    // Tab Switching Logic
    tabAlphabet.addEventListener('click', () => {
        currentMode = 'alphabet';
        tabAlphabet.classList.add('active');
        tabPoems.classList.remove('active');
        alphabetGrid.classList.remove('hidden');
        poemsGrid.classList.add('hidden');
        window.speechSynthesis.cancel();
    });

    tabPoems.addEventListener('click', () => {
        currentMode = 'poems';
        tabPoems.classList.add('active');
        tabAlphabet.classList.remove('active');
        poemsGrid.classList.remove('hidden');
        alphabetGrid.classList.add('hidden');
        window.speechSynthesis.cancel();
    });

    // Generate A-Z Buttons
    const letters = Object.keys(alphabetData);
    letters.forEach((letter, index) => {
        const btn = document.createElement('button');
        btn.classList.add('alphabet-btn');
        btn.classList.add(`color-${index % 6}`);
        btn.textContent = letter;
        
        btn.addEventListener('click', () => showLetterDetails(letter));
        
        alphabetGrid.appendChild(btn);
    });

    // Generate Poem Buttons
    poemsData.forEach((poem, index) => {
        const btn = document.createElement('button');
        btn.classList.add('poem-btn');
        btn.classList.add(`color-${index % 6}`);
        
        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('poem-btn-emoji');
        emojiSpan.textContent = poem.emoji;
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = poem.title;

        btn.appendChild(emojiSpan);
        btn.appendChild(titleSpan);
        
        btn.addEventListener('click', () => showPoemDetails(poem));
        
        poemsGrid.appendChild(btn);
    });

    // Function to speak text
    function speakText(text, lang = 'hi-IN') {
        window.speechSynthesis.cancel(); // Stop anything currently playing
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang; 
        utterance.rate = 0.85; // Slightly slower
        window.speechSynthesis.speak(utterance);
    }

    // Function to show Alphabet Details
    function showLetterDetails(letter) {
        letter = letter.toUpperCase();
        if (alphabetData[letter]) {
            const data = alphabetData[letter];
            displayEmoji.textContent = data.emoji;
            displayWord.textContent = `${letter} for ${data.word}`;
            displayHindi.textContent = data.hindi;
            displaySentence.textContent = data.sentence;

            alphabetView.classList.remove('hidden');
            poemView.classList.add('hidden');

            // Re-trigger pop animation
            displayEmoji.style.animation = 'none';
            setTimeout(() => {
                displayEmoji.style.animation = 'popIn 0.5s ease';
            }, 10);

            displayArea.classList.remove('hidden');

            // Speak the text
            speakText(`${letter} for ${data.word}. ${data.hindi}. ${data.sentence}`, 'hi-IN');
        }
    }

    // Function to show Poem Details
    function showPoemDetails(poem) {
        poemEmoji.textContent = poem.emoji;
        poemTitle.textContent = poem.title;
        poemLines.textContent = poem.lines;

        poemView.classList.remove('hidden');
        alphabetView.classList.add('hidden');

        // Re-trigger pop animation
        poemEmoji.style.animation = 'none';
        setTimeout(() => {
            poemEmoji.style.animation = 'popIn 0.5s ease';
        }, 10);

        displayArea.classList.remove('hidden');

        // Speak the poem text in English
        speakText(poem.title + ". " + poem.lines, 'en-US');
    }

    // Close Modal
    closeBtn.addEventListener('click', () => {
        displayArea.classList.add('hidden');
        window.speechSynthesis.cancel();
    });

    // Close on clicking outside the card
    displayArea.addEventListener('click', (e) => {
        if (e.target === displayArea) {
            displayArea.classList.add('hidden');
            window.speechSynthesis.cancel();
        }
    });

    // Listen to Keyboard events
    document.addEventListener('keydown', (e) => {
        if (displayArea.classList.contains('hidden') && currentMode === 'alphabet') {
            const key = e.key.toUpperCase();
            if (alphabetData[key]) {
                showLetterDetails(key);
            }
        } else if (e.key === 'Escape') {
            displayArea.classList.add('hidden');
            window.speechSynthesis.cancel();
        }
    });
});
