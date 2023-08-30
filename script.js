function rollDice() {
    const diceContainer = document.getElementById('diceContainer');
    diceContainer.innerHTML = ''; // Clear previous dice

    const diceCount = parseInt(document.getElementById('diceCount').value);
    const sideCount = parseInt(document.getElementById('sideCount').value);
    let customValuesInput = document.getElementById('customValues').value.split(',').map(num => parseInt(num.trim()));

    // If customValuesInput is empty or doesn't match the side count, generate default values
    if (customValuesInput.length !== sideCount || !customValuesInput.every(Number.isInteger)) {
        customValuesInput = Array.from({ length: sideCount }, (_, i) => i + 1);
    }

    for (let i = 0; i < diceCount; i++) {
        const dieElem = document.createElement('div');
        dieElem.classList.add('die');
        dieElem.setAttribute('id', `die${i}`);
        diceContainer.appendChild(dieElem);
    }

    const diceElems = document.querySelectorAll('.die');
    diceElems.forEach(dieElem => dieElem.classList.add('shaking'));

    setTimeout(() => {
        diceElems.forEach(dieElem => {
            dieElem.classList.remove('shaking');

            const randomValue = Math.floor(Math.random() * sideCount);
            const diceValue = customValuesInput[randomValue];

            displayDiceValue(dieElem, diceValue);
        });
    }, 1500); // 0.5s * 3 iterations of shaking animation
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
