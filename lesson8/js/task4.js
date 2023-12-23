//!Задача №4
// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;
function getCarNumbers(numberOfCarPlates) {
  let carNumbers = [];
  for (let i = 1; i <= numberOfCarPlates; i++) {
    let userCarNumber = prompt(`Введіть номер ${i} автомобіля`);
    carNumbers.push(userCarNumber);
  }
  return carNumbers;
}
function getNumCarNameBeginA(carNumbers) {
  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i][0].toUpperCase() === "A") {
      count++;
    }
  }
  return count;
}
function getNumLettersMatch(carNumbers) {
  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i][0] === carNumbers[i][carNumbers[i].length - 1]) {
      count++;
    }
  }
  return count;
}
function getMoreThan5Symbols(carNumbers) {
  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i].length > 5) {
      count++;
    }
  }
  return count;
}

let numberOfCarPlates = parseInt(prompt("Введіть кількість номерів"));
let userCarNumbers = getCarNumbers(numberOfCarPlates);
let numCarNameBeginA = getNumCarNameBeginA(userCarNumbers);
let numLettersMatch = getNumLettersMatch(userCarNumbers);
let moreThan5Symbols = getMoreThan5Symbols(userCarNumbers);
document.write(
  `Кількість номерів які починаються на букву «А»: ${numCarNameBeginA} <br>Кількість номерів у яких перша і остання літери співпадають ${numLettersMatch} <br>Кількість номерів які складаються з більше ніш 5 символів: ${moreThan5Symbols}`
);
