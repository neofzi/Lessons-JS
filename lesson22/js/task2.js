//!Задача №2
// Вивести дату у форматі
// “місяць – рік – вихідний/робочий”
let time = new Date();
let monthNames = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Груднень",
];
let year = time.getFullYear();
let month = monthNames[time.getMonth()];
let day = time.getDay();
document.write(`Рік - ${year} <br>`);
document.write(`Місяць - ${month} <br>`);
if (day > 0 && day <= 5) document.write(`Робочий день`);
else document.write("Вихідний");
