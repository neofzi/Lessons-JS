//!Задача №10
// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
function getTemperature(numberOfIndicators) {
  let result = 0,
    countNumbers = 0;
  for (let i = 1; i <= numberOfIndicators; i++) {
    let userRecords = parseFloat(prompt(`Введіть показники №${i}`));
    if (userRecords > 0) {
      result += userRecords;
      countNumbers++;
    }
  }
  return result / countNumbers;
}
let userNumberOfIndicators = parseInt(prompt("Введіть кількість показників"));

document.write(
  `Середнє значення температури: ${getTemperature(userNumberOfIndicators)}`
);
