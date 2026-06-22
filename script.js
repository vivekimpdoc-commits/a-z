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

document.addEventListener('DOMContentLoaded', () => {
    const alphabetGrid = document.getElementById('alphabet-grid');
    const displayArea = document.getElementById('display-area');
    const closeBtn = document.getElementById('close-btn');
    
    const displayEmoji = document.getElementById('display-emoji');
    const displayWord = document.getElementById('display-word');
    const displayHindi = document.getElementById('display-hindi');
    const displaySentence = document.getElementById('display-sentence');

    // Generate A-Z Buttons
    const letters = Object.keys(alphabetData);
    letters.forEach((letter, index) => {
        const btn = document.createElement('button');
        btn.classList.add('alphabet-btn');
        btn.classList.add(`color-${index % 6}`); // Add multi-color classes
        btn.textContent = letter;
        
        btn.addEventListener('click', () => showLetterDetails(letter));
        
        alphabetGrid.appendChild(btn);
    });

    // Function to speak text
    function speakText(text) {
        window.speechSynthesis.cancel(); // Stop anything currently playing
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN'; // Set to Hindi
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }

    // Function to show details
    function showLetterDetails(letter) {
        letter = letter.toUpperCase();
        if (alphabetData[letter]) {
            const data = alphabetData[letter];
            displayEmoji.textContent = data.emoji;
            displayWord.textContent = `${letter} for ${data.word}`;
            displayHindi.textContent = data.hindi;
            displaySentence.textContent = data.sentence;

            // Re-trigger pop animation
            displayEmoji.style.animation = 'none';
            setTimeout(() => {
                displayEmoji.style.animation = 'popIn 0.5s ease';
            }, 10);

            displayArea.classList.remove('hidden');

            // Speak the text
            speakText(`${letter} for ${data.word}. ${data.hindi}. ${data.sentence}`);
        }
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
        const key = e.key.toUpperCase();
        if (alphabetData[key] && displayArea.classList.contains('hidden')) {
            showLetterDetails(key);
        } else if (e.key === 'Escape') {
            displayArea.classList.add('hidden');
            window.speechSynthesis.cancel();
        }
    });
});
