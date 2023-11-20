//!Задача №5
// Вивести таблицю
let num = 1;
document.write("<table>");
for (let r = 1; r <= 3; r++) {
  document.write("<tr>");
  for (let c = 1; c <= 3; c++) {
    document.write(`<td>${num++}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
