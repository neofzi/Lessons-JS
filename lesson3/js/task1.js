//!Задача №1
// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
let childFirstName = prompt("Введіть ім`я першої дитини", "Роман");
let quantityCandyFirstChild = parseInt(
  prompt(`${childFirstName}, введіть свою кількість цукерок`)
);
let childSecondName = prompt("Введіть ім`я другої дитини", "Макс");
let quantityCandySecondChild = parseInt(
  prompt(`${childSecondName}, введіть свою кількість цукерок`)
);

if (quantityCandyFirstChild > quantityCandySecondChild) {
  alert(`У ${childFirstName} цукерок більше`);
} else if (quantityCandyFirstChild < quantityCandySecondChild) {
  alert(`У ${childSecondName} цукерок більше`);
} else alert(`У ${childFirstName} та ${childSecondName} цукерок одинаково`);
