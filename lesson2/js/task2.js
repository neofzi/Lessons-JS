//! Задача №2
// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
{
  let birthYear = parseFloat(prompt("Введіть рік народження"));
  let currentYear = parseInt(prompt("Введіть поточний рік"));

  let sum = currentYear - birthYear;

  document.write(`Вам ${sum} років`);
}
