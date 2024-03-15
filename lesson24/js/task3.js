//!Задача №3
// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
let users = [
  { userName: "Roman", login: 38201, count: 0 },
  { userName: "Max", login: 72129, count: 0 },
];
function login(users) {
  let loginsSave = JSON.parse(localStorage.getItem("logins"));

  if (!loginsSave) {
    localStorage.setItem("logins", JSON.stringify(users));
    loginsSave = users;
  }
  let userName = prompt("Введіть ім'я користувача");
  let userLogin = parseInt(prompt("Введіть логін"));
  for (let i = 0; i < loginsSave.length; i++) {
    if (
      userLogin === loginsSave[i].login &&
      userName === loginsSave[i].userName
    ) {
      document.write(
        `Привіт ${loginsSave[i].userName}!<br> Відвідувань: ${++loginsSave[i]
          .count}`
      );
      localStorage.setItem("logins", JSON.stringify(loginsSave));
      break;
    } else if (i === loginsSave.length - 1)
      alert("Помилка: логін або пароль не знайдено");
  }
  return loginsSave;
}

window.onload = function () {
  let confirmed = confirm("Хочете залогінитись?");
  if (confirmed) {
    login(users);
  }
};
