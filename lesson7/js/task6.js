//!Задача №6
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
function getCreatesTable(column, row) {
  document.write("<table style='border: 1px solid'>");
  for (let r = 0; r < row; r++) {
    document.write("<tr>");
    for (let c = 0; c < column; c++) {
      document.write(
        "<td style='border: 1px solid; padding: 5px;'>Hello!</td>"
      );
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

let userColumn = parseInt(
  prompt("Введіть кількість стовпців яку хочете згенерувати")
);
let userRow = parseInt(
  prompt("Введіть кількість рядків яку хочете згенерувати")
);
getCreatesTable(userColumn, userRow);
