function rollDice() {
    const numDice = document.getElementById('numDice').value;
    const sides = document.getElementById('sides').value;
    const customNumbers = document.getElementById('customNumbers').value.split(',').map(num => parseInt(num.trim()));
    const resultDiv = document.getElementById('result');
    let results = [];

    for (let i = 0; i < numDice; i++) {
        if (customNumbers.length === parseInt(sides)) {
            results.push(customNumbers[Math.floor(Math.random() * sides)]);
        } else {
            results.push(Math.floor(Math.random() * sides) + 1);
        }
    }

    resultDiv.textContent = `Result: ${results.join(', ')}`;
}
