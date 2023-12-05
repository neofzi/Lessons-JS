//!Задача №12
// З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
let maxNum1 = 0;
let maxNum2 = 0;

do {
  let userNumber = parseInt(prompt("Введіть число"));
  if (maxNum1 < userNumber) {
    maxNum2 = maxNum1;
    maxNum1 = userNumber;
  } else if (maxNum2 < userNumber) {
    maxNum2 = userNumber;
  }
} while (maxNum1 - maxNum2 <= 5);

alert(`Ваші 2 найбільші числа це ${maxNum1} і ${maxNum2}`);
