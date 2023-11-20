//!Задача №6
// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній)
let num = 1;
for (let t = 1; t <= 3; t++) {
  document.write("<table>");
  for (let r = 1; r <= 3; r++) {
    document.write("<tr>");
    for (let c = 1; c <= 3; c++) {
      document.write(`<td>${num++}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
