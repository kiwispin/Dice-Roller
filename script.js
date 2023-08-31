document.addEventListener("DOMContentLoaded", function() {
    // This function gets executed once the DOM is loaded
    const diceContainer = document.getElementById("diceContainer");

    function createDie(value) {
        const die = document.createElement("div");
        die.classList.add("die");
        die.innerText = value;
        diceContainer.appendChild(die);
    }

    function rollDice() {
        console.log("rollDice function called.");

        const numDice = parseInt(document.getElementById('numDice').value) || 1;
        const faces = parseInt(document.getElementById('faces').value) || 6;
        const customValues = document.getElementById('customValues').value.split(',').map(v => v.trim());

        diceContainer.innerHTML = ''; // Clear previous dice

        for (let i = 0; i < numDice; i++) {
            let value;
            if (customValues && customValues.length > 1) {
                value = customValues[Math.floor(Math.random() * customValues.length)];
            } else {
                value = Math.floor(Math.random() * faces) + 1;
            }
            createDie(value);
        }
    }

    window.rollDice = rollDice; // Expose the rollDice function to the window object
});
