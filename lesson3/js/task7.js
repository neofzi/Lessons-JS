//!Задача №7
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
let monthNumber = parseInt(prompt("Введіть номер місяця"));
let result;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    result = "Пора року - Зима. Одягайтесь тепліше!";
    break;
  case 3:
  case 4:
  case 5:
    result =
      "Пора року - Весна. Вийдіть на вулицю і насолодіться весняним повітрям!";
    break;
  case 6:
  case 7:
  case 8:
    result = "Пора року - Літо. Пора на річку! Не забувайте про сметанку ^_^";
    break;
  case 9:
  case 10:
  case 11:
    result = "Пора року - Осінь. Пора зробити декілька фотографій з листям!";
    break;
  default:
    result = "Дані вказані не вірно :(";
    break;
}

alert(result);
