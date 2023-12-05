//!Задача №13
// З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
let minNum1 = Infinity;
let minNum2 = Infinity;

do {
  let userNumber = parseInt(prompt("Введіть число"));
  let userNumber2 = parseInt(prompt("Введіть ще одне число"));

  if (minNum1 > userNumber) {
    minNum2 = minNum1;
    minNum1 = userNumber;
  } else if (minNum2 > userNumber) {
    minNum2 = userNumber;
  }
  if (minNum1 > userNumber2) {
    minNum2 = minNum1;
    minNum1 = userNumber2;
  } else if (minNum2 > userNumber2) {
    minNum2 = userNumber2;
  }
} while (minNum2 - minNum1 <= 5);

alert(`Ваші 2 найменші числа це ${minNum1} і ${minNum2}`);
