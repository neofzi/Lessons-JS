//!Задача №3
// Вивести таблицю з одним рядком і 7 стовпцями.
let table = "";
for (let num = 1; num <= 7; num++) {
  table += `<td>${num}</td>`;
}
document.write(`
  <table >
  <tr>
	${table}
  </tr>
  </table>
  `);
