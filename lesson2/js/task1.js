//! Задача №1
// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
{
  let firstNumber = parseFloat(prompt("Введіть значення 1"));
  let secondNumber = parseFloat(prompt("Введіть значення 2"));

  let sum = firstNumber + secondNumber;
  let multiplication = firstNumber * secondNumber;
  let division = firstNumber / secondNumber;

  document.write(`
<table >
<tr>
  <td>Сума</td>
  <td>Добуток</td>
  <td>Частка</td>
</tr>
<tr>
  <td>${sum.toFixed(2)}</td>
  <td>${multiplication.toFixed(2)}</td>
  <td>${division.toFixed(2)}</td>
</tr>
</table>
`);
}
