//!Задача №7
// Створіть функцію, яка приймає початкове значення та збільшення, і генерує послідовність чисел за допомогою замикань. Кожен виклик функції повинен повертати наступне число у послідовності. Наприклад, якщо функцію викликають з початковим значенням 2 і збільшенням 3, вона повинна повертати 2, 5, 8, 11, тощо.
function getNum(start, magnification) {
  return function getSolution() {
    const CURRENT_NUM = start;
    start += magnification;
    return CURRENT_NUM;
  };
}
const NEXT_NUM = getNum(2, 3);
for (let i = 0; i < 4; i++) {
  document.write(NEXT_NUM());
}
