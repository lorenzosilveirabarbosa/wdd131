
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const temp = 10;     
const windSpeed = 5; 


function calcularSensacaoTermica(t, v) {
    return (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);
}

const windChillElement = document.querySelector("#windChill");

if (windChillElement) {
    if (temp <= 10 && windSpeed > 4.8) {
        const sensacao = calcularSensacaoTermica(temp, windSpeed);
        windChillElement.textContent = `${sensacao} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}