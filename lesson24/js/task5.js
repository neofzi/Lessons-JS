//!Задача №5
// Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
let map = new Map();
for (const temperature of temperatures) {
  let roundedTemperature = Math.ceil(temperature);
  let temperatureCount = map.get(roundedTemperature) ?? 0;
  map.set(roundedTemperature, temperatureCount + 1);
}
map.forEach((count, temperature) => {
  document.write(`${temperature} - ${count} <br>`);
});
document.write(`Кількість різних показів: ${map.size} <br>`);
