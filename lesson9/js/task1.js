//!Задача №1
// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
function getNumbers(userNum) {
  let num = new Array(userNum).fill(0);
  return num;
}
let userNum = parseInt(prompt("Введіть кількість чисел"));
document.write(`${getNumbers(userNum)}`);
