const name = prompt("Как вас зовут?");
const temperatures = [22, 10, 25, 8, 31, 17, 30];

console.log("Имя:", name);
console.log("Температуры:", temperatures);

function findHottestDay(temps) {
    let max = temps[0]; 
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > max) {
            max = temps[i];
        }
    }
    return max; 
}

const hottest = findHottestDay(temperatures);
console.log("Максимальная температура:", hottest, "°C");