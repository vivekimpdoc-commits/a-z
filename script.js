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
    { title: "Twinkle Twinkle", emoji: "⭐", lines: "Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky." },
    { title: "Baa Baa Black Sheep", emoji: "🐑", lines: "Baa, baa, black sheep,\nHave you any wool?\nYes, sir, yes, sir,\nThree bags full!" },
    { title: "Johnny Johnny", emoji: "👶", lines: "Johnny, Johnny.\nYes, Papa?\nEating sugar?\nNo, Papa.\nTelling lies?\nNo, Papa.\nOpen your mouth.\nHa-ha-ha!" },
    { title: "Humpty Dumpty", emoji: "🥚", lines: "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall;\nAll the king's horses and all the king's men\nCouldn't put Humpty together again." },
    { title: "Rain Rain Go Away", emoji: "🌧️", lines: "Rain, rain, go away,\nCome again another day;\nLittle Johnny wants to play,\nRain, rain, go away." },
    { title: "Jack and Jill", emoji: "🪣", lines: "Jack and Jill went up the hill,\nTo fetch a pail of water.\nJack fell down and broke his crown,\nAnd Jill came tumbling after." }
];

// Stories Data Dictionary
const storiesData = [
    { title: "The Thirsty Crow", emoji: "🐦", lines: "A crow was very thirsty.\nHe saw a pot with a little water.\nHe dropped stones into the pot.\nThe water came up.\nHe drank the water and flew away happily." },
    { title: "Lion & Mouse", emoji: "🦁", lines: "A lion was sleeping.\nA little mouse woke him up.\nThe lion let the mouse go.\nLater, the lion was caught in a net.\nThe mouse cut the net and saved the lion." },
    { title: "Fox & Grapes", emoji: "🦊", lines: "A fox saw a bunch of grapes.\nHe jumped to get them but could not reach.\nHe said, 'The grapes are sour!'\nAnd he walked away." },
    { title: "Hare & Tortoise", emoji: "🐢", lines: "A hare and a tortoise had a race.\nThe hare ran fast and slept under a tree.\nThe tortoise walked slowly but steadily.\nHe won the race." }
];

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const tabAlphabet = document.getElementById('tab-alphabet');
    const tabPoems = document.getElementById('tab-poems');
    const tabStories = document.getElementById('tab-stories');
    
    const alphabetGrid = document.getElementById('alphabet-grid');
    const poemsGrid = document.getElementById('poems-grid');
    const storiesGrid = document.getElementById('stories-grid');
    
    // Modal
    const displayArea = document.getElementById('display-area');
    const closeBtn = document.getElementById('close-btn');
    
    // Views
    const alphabetView = document.getElementById('alphabet-view');
    const poemView = document.getElementById('poem-view');
    const storyView = document.getElementById('story-view');

    let currentMode = 'alphabet'; // 'alphabet', 'poems', 'stories'

    // Tab Switching Logic
    function switchTab(mode) {
        currentMode = mode;
        window.speechSynthesis.cancel();
        
        tabAlphabet.classList.remove('active');
        tabPoems.classList.remove('active');
        tabStories.classList.remove('active');
        
        alphabetGrid.classList.add('hidden');
        poemsGrid.classList.add('hidden');
        storiesGrid.classList.add('hidden');

        if (mode === 'alphabet') {
            tabAlphabet.classList.add('active');
            alphabetGrid.classList.remove('hidden');
        } else if (mode === 'poems') {
            tabPoems.classList.add('active');
            poemsGrid.classList.remove('hidden');
        } else if (mode === 'stories') {
            tabStories.classList.add('active');
            storiesGrid.classList.remove('hidden');
        }
    }

    tabAlphabet.addEventListener('click', () => switchTab('alphabet'));
    tabPoems.addEventListener('click', () => switchTab('poems'));
    tabStories.addEventListener('click', () => switchTab('stories'));

    // Generate A-Z Buttons
    Object.keys(alphabetData).forEach((letter, index) => {
        const btn = document.createElement('button');
        btn.classList.add('item-btn', 'alphabet-btn', `color-${index % 6}`);
        btn.textContent = letter;
        btn.addEventListener('click', () => showLetterDetails(letter));
        alphabetGrid.appendChild(btn);
    });

    // Generate Poem Buttons
    poemsData.forEach((poem, index) => {
        const btn = document.createElement('button');
        btn.classList.add('item-btn', 'content-btn', `color-${index % 6}`);
        btn.innerHTML = `<span class="content-emoji">${poem.emoji}</span><span>${poem.title}</span>`;
        btn.addEventListener('click', () => showContentDetails(poemView, poem, 'poem'));
        poemsGrid.appendChild(btn);
    });

    // Generate Story Buttons
    storiesData.forEach((story, index) => {
        const btn = document.createElement('button');
        btn.classList.add('item-btn', 'content-btn', `color-${index % 6}`);
        btn.innerHTML = `<span class="content-emoji">${story.emoji}</span><span>${story.title}</span>`;
        btn.addEventListener('click', () => showContentDetails(storyView, story, 'story'));
        storiesGrid.appendChild(btn);
    });

    // Function to speak text
    function speakText(text, lang = 'hi-IN') {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang; 
        utterance.rate = 0.85; 
        window.speechSynthesis.speak(utterance);
    }

    // Function to show Alphabet Details
    function showLetterDetails(letter) {
        if (!alphabetData[letter]) return;
        const data = alphabetData[letter];
        
        document.getElementById('display-emoji').textContent = data.emoji;
        document.getElementById('display-word').textContent = `${letter} for ${data.word}`;
        document.getElementById('display-hindi').textContent = data.hindi;
        document.getElementById('display-sentence').textContent = data.sentence;

        alphabetView.classList.remove('hidden');
        poemView.classList.add('hidden');
        storyView.classList.add('hidden');

        triggerPopAnimation('display-emoji');
        displayArea.classList.remove('hidden');
        speakText(`${letter} for ${data.word}. ${data.hindi}. ${data.sentence}`, 'hi-IN');
    }

    // Function to show Poem/Story Details
    function showContentDetails(viewElem, data, prefix) {
        document.getElementById(`${prefix}-emoji`).textContent = data.emoji;
        document.getElementById(`${prefix}-title`).textContent = data.title;
        document.getElementById(`${prefix}-lines`).textContent = data.lines;

        alphabetView.classList.add('hidden');
        poemView.classList.add('hidden');
        storyView.classList.add('hidden');
        viewElem.classList.remove('hidden');

        triggerPopAnimation(`${prefix}-emoji`);
        displayArea.classList.remove('hidden');
        speakText(`${data.title}. ${data.lines}`, 'en-US');
    }

    function triggerPopAnimation(id) {
        const el = document.getElementById(id);
        el.style.animation = 'none';
        setTimeout(() => el.style.animation = 'popIn 0.5s ease', 10);
    }

    // Close Modal
    function closeModal() {
        displayArea.classList.add('hidden');
        window.speechSynthesis.cancel();
    }

    closeBtn.addEventListener('click', closeModal);
    displayArea.addEventListener('click', (e) => {
        if (e.target === displayArea) closeModal();
    });

    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (displayArea.classList.contains('hidden') && currentMode === 'alphabet') {
            const key = e.key.toUpperCase();
            if (alphabetData[key]) showLetterDetails(key);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
});
