//!Задача №6
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
let weekDay = parseInt(prompt("Введіть номер дня тижня"));
let result;

switch (weekDay) {
  case 1:
    result = "Введений номер відповідає Понеділку";
    break;
  case 2:
    result = "Введений номер відповідає Вівторок";
    break;
  case 3:
    result = "Введений номер відповідає Середа";
    break;
  case 4:
    result = "Введений номер відповідає Четвер";
    break;
  case 5:
    result = "Введений номер відповідає П`ятниця";
    break;
  case 6:
    result = "Введений номер відповідає Субота";
    break;
  case 7:
    result = "Введений номер відповідає Неділя";
    break;
  default:
    result = "Ви не з нашої планети";
    break;
}

alert(result);
