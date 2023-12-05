//!Задача №6
// На екрані виводиться меню:
// 1.Ініціалізація (сума=0)
// 2.Додати 2
// 3.Додати 3
// 4.Відняти 2
// 5.Відняти 3.
// 6.Вивести суму
// 7.Вихід.
// Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з клавіатури.
let userNumber = parseInt(prompt("Введіть число"));
let menuWithItems;
while (menuWithItems !== 7) {
  menuWithItems = parseInt(
    prompt(
      "1. Ініціалізація (сума=0).\n2. Додати 2.\n3. Додати 3.\n4. Відняти 2. \n5. Відняти 3. \n6. Вивести суму. \n7. Вихід."
    )
  );
  let res;
  switch (menuWithItems) {
    case 1:
      res = userNumber = 0;
      break;
    case 2:
      res = userNumber += 2;
      break;
    case 3:
      res = userNumber += 3;
      break;
    case 4:
      res = userNumber -= 2;
      break;
    case 5:
      res = userNumber -= 3;
      break;
    case 6:
      res = `Cума = ${userNumber}`;
      break;
    case 7:
      res = `Вихід. Ваше число = ${userNumber}`;
      break;
    default:
      res = "Введіть правильні дані";
      break;
  }
  alert(res);
}
