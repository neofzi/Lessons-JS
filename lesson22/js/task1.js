//!Задача №1
// Визначити привітання у залежності від часу доби (Доброго дня, Доброго ранку, Доброго вечора)
let timeZone = new Date();
let hour = timeZone.getHours();
if (hour >= 5 && hour <= 10) alert("Доброго ранку!");
else if (hour >= 11 && hour <= 18) alert("Доброго дня!");
else if (hour >= 19 && hour <= 23) alert("Доброго вечора!");
else alert("Доброї ночі!");
