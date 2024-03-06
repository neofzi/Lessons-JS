//!Задача №3
// Визначити поточну пору року
let date = new Date();
let month = date.getMonth();
if (month >= 2 && month <= 4) alert("Весна");
else if (month >= 5 && month <= 7) alert("Літо");
else if (month >= 8 && month <= 10) alert("Осінь");
else alert("Зима");
