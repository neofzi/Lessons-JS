//!Задача №2
// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
function getNumbers(userNum) {
  let halfLength = Math.floor(userNum / 2);
  let num = new Array(userNum).fill(1, 0, halfLength).fill(7, halfLength);
  return num;
}
let userNum = parseInt(prompt("Введіть кількість чисел"));
document.write(`${getNumbers(userNum)}`);
