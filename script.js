function rollDice() {
    let diceContainer = document.getElementById("diceContainer");

    const numDice = parseInt(document.getElementById("numDice").value) || 1;
    const faces = parseInt(document.getElementById("faces").value) || 6;
    const customValues = document.getElementById("customValues").value.split(",").map(Number);

    let diceValues = [];

    for (let i = 0; i < numDice; i++) {
        let diceValue;
        if (customValues.length > 1) {
            diceValue = customValues[Math.floor(Math.random() * customValues.length)];
        } else {
            diceValue = Math.floor(Math.random() * faces) + 1;
        }
        diceValues.push(diceValue);
    }

    displayDiceValue(diceValues);
}

function displayDiceValue(values) {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = "";  // Clear previous dice

    values.forEach(value => {
        const dieDiv = document.createElement("div");
        dieDiv.classList.add("die");
        dieDiv.innerText = value.toString();
        diceContainer.appendChild(dieDiv);
    });
}
