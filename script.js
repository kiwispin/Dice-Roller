function rollDice() {
    console.log("rollDice function called.");
    const numDice = document.getElementById("numDice").value || 1;
    const faces = document.getElementById("faces").value || 6;
    const customValues = document.getElementById("customValues").value.split(",");
    
    const diceContainer = document.getElementById("diceContainer");
    console.log("diceContainer acquired:", diceContainer);

    diceContainer.innerHTML = '';

    const results = [];
    for (let i = 0; i < numDice; i++) {
        if (customValues && customValues.length > 0 && !isNaN(customValues[0])) {
            const randomIndex = Math.floor(Math.random() * customValues.length);
            results.push(customValues[randomIndex]);
        } else {
            results.push(Math.floor(Math.random() * faces) + 1);
        }
    }

    console.log("Dice values:", ...results);

    results.forEach(val => {
        const diceDiv = document.createElement("div");
        diceDiv.className = "die";
        diceDiv.textContent = val;
        diceContainer.appendChild(diceDiv);
    });
}
