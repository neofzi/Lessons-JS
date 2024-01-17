//!Задача №6
// Через 20 секунд перейти на сайт ukr.net. Для цього через 20 секунд після відкриття треба виконати команду
let timeoutID = setTimeout(
  () =>
    (window.location.href = "https://maximus.great-site.net/portfolio/?i=1"),
  20000
);
