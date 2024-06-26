function calculate() {
    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseInt(document.getElementById('frequency').value);

    // Calculate compound interest
    const amount = principal * Math.pow((1 + rate / frequency), frequency * time);

    // Display the result
    document.getElementById('result').innerText = `Future Value: Rs. ${amount.toFixed(2)}`;
}
