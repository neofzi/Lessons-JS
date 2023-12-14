//!Задача №9
// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
function getMinusTemperature(numberOfIndicators) {
  let minusTemperature = 0;
  for (let i = 1; i <= numberOfIndicators; i++) {
    let userRecords = parseFloat(prompt(`Введіть показники №${i}`));
    if (userRecords < 0) {
      minusTemperature++;
    }
  }
  return minusTemperature;
}

let userNumberOfIndicators = parseInt(prompt("Введіть кількість показників"));

document.write(
  `Мінусова температура була ${getMinusTemperature(
    userNumberOfIndicators
  )} рази`
);
