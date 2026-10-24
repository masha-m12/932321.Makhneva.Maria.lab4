const name = prompt("Как вас зовут?");
const temperatures = [22, 10, 25, 8, 31, 17, 30];

console.log("Имя:", name);
console.log("Температуры:", temperatures);

function findHottestDay(temps) {
    let maxTemp = temps[0]; 
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > maxTemp) {
            maxTemp = temps[i];
        }
    }
    return maxTemp; 
}

function filterWarmDays(temps) {
    let warmDays = [];
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > 20) {
            warmDays.push(temps[i]);
        }
    }
    return warmDays;
}

function calculateAverageTemperature(temps) {
    let sum = 0;
    for (let i = 0; i < temps.length; i++) {
        sum += temps[i];
    }
    let averageTemp = sum / temps.length;
    return averageTemp;
}


const hottest = findHottestDay(temperatures);
const warmDays = filterWarmDays(temperatures);
const average = calculateAverageTemperature(temperatures);

console.log("Максимальная температура:", hottest, "°C");
console.log("Тёплые дни (> 20 °C):", warmDays);
console.log("Средняя температура:", averageTemp.toFixed(1), "°C");