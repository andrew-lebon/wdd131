const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified


const temperature = 56;
const windSpeed = 3;

const tempSpan = document.getElementById("temp");
const windSpeedSpan = document.getElementById("wind-speed");
const windChillSpan = document.getElementById("wind-chill");
const conditionsSpan = document.getElementById("conditions");

tempSpan.textContent = temperature;
windSpeedSpan.textContent = windSpeed;
conditionsSpan.textContent = "Sunny";

function calculateWindChill(temp, speed) {
    return (
        35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
    ).toFixed(1);
}

if (temperature <= 50 && windSpeed > 3) {
    windChillspan.textContent = calculateWindChill(temperature, windSpeed);
} 
else {
    windChillspan.textContent = "N/A"
    }