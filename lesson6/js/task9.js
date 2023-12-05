//!Задача №9
// З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.
const USER_PASSWORD = 78;
let enterPassword;
do {
  enterPassword = parseInt(prompt("Введіть пароль"));
  if (enterPassword !== USER_PASSWORD) {
    alert("Невірний пароль.");
  } else {
    alert("Доступ дозволено.");
  }
} while (enterPassword !== USER_PASSWORD);
