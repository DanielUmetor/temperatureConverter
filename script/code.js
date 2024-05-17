function convertToFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    
    if (isNaN(fahrenheit)) {
        document.getElementById('result').innerText = "Please enter a valid temperature.";
        return;
    }
    
    const celsius = (fahrenheit - 32) * (5 / 9);
    document.getElementById('result').innerText = `Celsius: ${celsius.toFixed(2)}`;
}