function rollDice() {
    // Indicate dice are being rolled
    const die1Elem = document.getElementById('die1');
    const die2Elem = document.getElementById('die2');
    die1Elem.classList.add('shaking');
    die2Elem.classList.add('shaking');
    
    setTimeout(() => {
        die1Elem.classList.remove('shaking');
        die2Elem.classList.remove('shaking');
        
        const dice1Value = Math.floor(Math.random() * 6) + 1;
        const dice2Value = Math.floor(Math.random() * 6) + 1;

        displayDiceValue('die1', dice1Value);
        displayDiceValue('die2', dice2Value);
    }, 1500); // 0.5s * 3 iterations of shaking animation
}

function displayDiceValue(dieId, value) {
    const dieElem = document.getElementById(dieId);
    dieElem.innerHTML = ''; // Clear existing dots

    const diceConfig = {
        1: ['center-center'],
        2: ['top-left', 'bottom-right'],
        3: ['top-left', 'center-center', 'bottom-right'],
        4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        5: ['top-left', 'top-right', 'center-center', 'bottom-left', 'bottom-right'],
        6: ['top-left', 'top-right', 'center-left', 'center-right', 'bottom-left', 'bottom-right']
    };

    diceConfig[value].forEach(position => {
        const dot = document.createElement('div');
        dot.classList.add('dot', position);
        dieElem.appendChild(dot);
        
        // Make dots visible with a short delay to give fade-in effect
        setTimeout(() => {
            dot.classList.add('visible');
        }, 100);
    });
}
