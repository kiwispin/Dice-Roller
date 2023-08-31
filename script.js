function rollDice() {
    console.log("rollDice function called.");
    const diceContainer = document.getElementById('diceContainer');
    console.log("diceContainer acquired:", diceContainer);

    diceContainer.innerHTML = '';  // Clear previous dice

    const numDice = document.getElementById('numDice').value || 1;
    const faces = document.getElementById('faces').value || 6;
    const customValues = (document.getElementById('customValues').value || "").split(',').map(Number);

    let diceValues = roll(numDice, faces, customValues);
    console.log("Dice values:", ...diceValues);
    
    diceValues.forEach(value => {
        let dieDiv = document.createElement('div');
        dieDiv.className = 'die';
        dieDiv.innerText = value;
        diceContainer.appendChild(dieDiv);
    });
}

function roll(numDice, faces, customValues) {
    let results = [];
    for (let i = 0; i < numDice; i++) {
        if (customValues && customValues.length > 0) {
            results.push(customValues[Math.floor(Math.random() * customValues.length)]);
        } else {
            results.push(Math.floor(Math.random() * faces) + 1);
        }
    }
    return results;
}
