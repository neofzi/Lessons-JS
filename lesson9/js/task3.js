//!Задача №3
// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
function getNumbers(userNum) {
  let num = new Array(userNum).fill(1, 0, 5).fill(7, 5);
  return num;
}
let userNum = parseInt(prompt("Введіть кількість чисел"));
document.write(`${getNumbers(userNum)}`);
