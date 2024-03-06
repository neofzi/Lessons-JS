//!Задача №4
// Вивести назву дня
let date = new Date();
let options = { weekday: "long" };
let dayName = date.toLocaleDateString("uk-UA", options);
alert(dayName);
