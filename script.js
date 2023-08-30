function rollDice() {
    console.log("rollDice function called.");
    let diceContainer = document.getElementById("diceContainer");
    console.log("diceContainer acquired:", diceContainer.style.display);

    // Get user input
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

    console.log("Dice values:", ...diceValues);

    displayDiceValue(diceValues);
}

function displayDiceValue(values) {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = "";  // Clear previous dice

    values.forEach(value => {
        const dieDiv = document.createElement("div");
        dieDiv.classList.add("die");
        dieDiv.innerText = value;  // Here we set the number
        diceContainer.appendChild(dieDiv);
    });
}
