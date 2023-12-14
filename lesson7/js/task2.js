//!Задача №2
// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
function getWorkday(dayNum) {
  let result;
  switch (dayNum) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      result = "Цей день є робочим";
      break;
    case 6:
    case 7:
      result = "Сьогодні вихідний!";
      break;
    default:
      result = "Дані вказані не вірно :(";
      break;
  }
  return result;
}

let userNumber = parseInt(
  prompt("Введіть номер дня щоб дізнатись чи є він робочим")
);
alert(getWorkday(userNumber));
