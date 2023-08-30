console.log("Script loaded.");

function rollDice() {
    console.log("rollDice function called.");

    const diceCount = parseInt(document.getElementById('diceCount').value) || 1;
    const sideCount = parseInt(document.getElementById('sideCount').value) || 6;
    const customValues = (document.getElementById('customValues').value).split(',').map(Number).filter(Boolean);

    const diceContainer = document.getElementById('diceContainer');
    console.log("diceContainer acquired:", diceContainer);

    diceContainer.innerHTML = '';  // Clear previous dice

    for (let i = 0; i < diceCount; i++) {
        let diceValue;

        if (customValues.length) {
            diceValue = customValues[Math.floor(Math.random() * customValues.length)];
        } else {
            diceValue = Math.floor(Math.random() * sideCount) + 1;
        }
        console.log("Dice values:", diceValue);

        const dieElem = document.createElement('div');
        dieElem.classList.add('die');
        diceContainer.appendChild(dieElem);

        displayDiceValue(dieElem, diceValue);
    }
}

function displayDiceValue(dieElem, diceValue) {
    const positions = [
        [],
        ['center'],
        ['top-left', 'bottom-right'],
        ['top-left', 'center', 'bottom-right'],
        ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
        ['top-left', 'top-right', 'center-left', 'center-right', 'bottom-left', 'bottom-right']
    ];

    positions[diceValue].forEach(pos => {
        const dot = document.createElement('div');
        dot.classList.add('dot', pos);
        dieElem.appendChild(dot);
    });
}