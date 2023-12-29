//!Задача №9
// Дано масив імен. Сформувати масив з перших літер цих імен.
let names = ["Roman", "Olha", "Max", "Andrey"];
let firstItemInTheName = [];
names.forEach((name) => {
  firstItemInTheName.push(name[0]);
});
document.write(firstItemInTheName);
