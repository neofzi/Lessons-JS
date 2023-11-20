//!Задача №15
// Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
let sum = 0;
for (let month = 1; month <= 12; month++) {
  let temperature = parseFloat(
    prompt(`Введіть температуру за ${month} місяць`)
  );
  sum += temperature / 12;
}
document.write(`Середня температура = ${sum.toFixed(2)}°C`);
