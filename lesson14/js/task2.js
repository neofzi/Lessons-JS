//!Задача №2
// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
const DATE_OBJECT = {
  year: 2024,
  month: 1,
  day: 20,
};

function getYearDetermination({ month, year }, n) {
  year += Math.floor((month - 1 + n) / 12);
  return year;
}

let n = parseInt(prompt("Введіть кількість місяців"));
let yearDetermination = getYearDetermination(DATE_OBJECT, n);
alert(`Через ${n} місяців буде ${yearDetermination}`);
