//!Задача №1
// Створити функцію, яка за номером місяця повертає його назву.
function getMonthName(monthNumber) {
  let result;
  switch (monthNumber) {
    case 1:
      result = "Ваш місяць - Січень";
      break;
    case 2:
      result = "Ваш місяць - Лютий";
      break;
    case 3:
      result = "Ваш місяць - Березень";
      break;
    case 4:
      result = "Ваш місяць - Квітень";
      break;
    case 5:
      result = "Ваш місяць - Травень";
      break;
    case 6:
      result = "Ваш місяць - Червень";
      break;
    case 7:
      result = "Ваш місяць - Липень";
      break;
    case 8:
      result = "Ваш місяць - Серпень";
      break;
    case 9:
      result = "Ваш місяць - Вересень";
      break;
    case 10:
      result = "Ваш місяць - Жовтень";
      break;
    case 11:
      result = "Ваш місяць - Листопад";
      break;
    case 12:
      result = "Ваш місяць - Грудень";
      break;
    default:
      result = "Дані вказані не вірно :(";
      break;
  }
  return result;
}

let userNumber = parseInt(
  prompt("Введіть номер місяця щоб дізнатись як він називається")
);
alert(getMonthName(userNumber));
