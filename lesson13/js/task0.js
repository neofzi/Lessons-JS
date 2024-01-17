//!Задача №0
// Рекурсивна функція для обчислення суми чисел у масиві
let num = [1, 2, 3, 4, 5];
document.write(`${num} <br>`);

function getSumNum(numbers, index = 0, sum = 0) {
  if (index < numbers.length) {
    sum += numbers[index];
    return getSumNum(numbers, index + 1, sum);
  } else return sum;
}
document.write(getSumNum(num));
