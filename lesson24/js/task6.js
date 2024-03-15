//!Задача №6
// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
let mathClubStudents = ["Smith", "Jones", "Williams", "Taylor", "Brown"];
let historyClubStudents = ["Jones", "Taylor", "Martinez", "Davis", "Garcia"];

let map = new Map();
let count = 0;

for (const student of mathClubStudents) {
  map.set(student, (map.get(student) ?? 0) + 1);
}

for (const student of historyClubStudents) {
  map.set(student, (map.get(student) ?? 0) + 1);
  if (map.get(student) === 2) count++;
}

document.write(
  `Кількість студентів, які відвідують обидва гуртки: ${count} <br>`
);
document.write(
  `Загальна кількість студентів які відвідують хоча б один гурток: ${map.size}`
);
