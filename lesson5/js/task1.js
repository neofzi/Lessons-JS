//!Задача №1
// Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.
let quantityNum = parseInt(
  prompt("Введіть кількість чисел яку хочете згенерувати")
);
let result = "";

for (let num = 0; num < quantityNum; num++) {
  const RANDOM_NUM = 1 + Math.floor(Math.random() * 100);
  result += `<li>${RANDOM_NUM}</li>`;
}
document.write(`
<ul>${result}</ul>
`);
