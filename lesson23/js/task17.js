//!Задача №17
// Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
let userDate = prompt(
  "Введіть номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»"
);
let exp = /^(0|6|sat|sun)$/i;
if (exp.test(userDate)) alert("Вихідний");
else alert("Робочий");
