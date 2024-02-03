//!Задача №1
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
class MathematicalOperations {
  static numberOfPositives(numbers) {
    return numbers
      .flat(Infinity)
      .reduce((count, el) => (el > 0 ? count + 1 : count), 0);
  }
  static numberOfNegative(numbers) {
    return numbers
      .flat(Infinity)
      .reduce((count, el) => (el < 0 ? count + 1 : count), 0);
  }
  static findUserNum(numbers, userNum) {
    return numbers
      .flat(Infinity)
      .reduce((count, el) => (el === userNum ? count + 1 : count), 0);
  }
}
let numbersArray = [
  [2, 13, -71, 27, -17],
  [8, 12, 3, -7, -100],
];
let userNum = parseInt(
  prompt(`${numbersArray} \nВведіть число яке ви шукаєте`)
);
if (isNaN(userNum)) throw new Error("Incorrect value");

document.write(MathematicalOperations.numberOfPositives(numbersArray) + "<br>");
document.write(MathematicalOperations.numberOfNegative(numbersArray) + "<br>");
document.write(
  MathematicalOperations.findUserNum(numbersArray, userNum) + "<br>"
);
