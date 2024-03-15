//!Задача №8
// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.
let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [
  "Почистити зуби",
  "Поснідати",
  "Випити каву",
  "Зестелити ліжко",
  "Піти на роботу",
];
function randomTask() {
  let randomIndex = Math.floor(Math.random() * toDoList.length);
  return toDoList[randomIndex];
}

function confirmTask() {
  if (toDoList.length === 0) {
    alert("Усі завдання виконані!");
    clearInterval(interval);
    return;
  }
  let task = randomTask();
  let confirmed = confirm(`Ваша наступна задача - ${task}`);
  if (confirmed) {
    toDoList = toDoList.filter((item) => item !== task);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }
}

let interval = setInterval(confirmTask, 5000);
