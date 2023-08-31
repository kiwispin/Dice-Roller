function rollDice() {
    const numDice = parseInt(document.getElementById("numDice").value) || 1;
    const faces = parseInt(document.getElementById("faces").value) || 6;
    const customValues = document.getElementById("customValues").value.split(",").map(Number);

    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = ''; // Clear previous dice

    for (let i = 0; i < numDice; i++) {
        const dieDiv = document.createElement('div');
        dieDiv.className = 'die';

        let value;
        if (customValues.length > 1) {
            value = customValues[Math.floor(Math.random() * customValues.length)];
        } else {
            value = Math.floor(Math.random() * faces) + 1;
        }

        dieDiv.innerText = value;
        diceContainer.appendChild(dieDiv);
    }
}
