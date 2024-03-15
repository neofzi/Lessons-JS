//!Задача №1
// Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
const students = [16, 15, 17, 14, 18, 16, 17, 14, 18, 16];
let map = new Map();
for (const el of students) {
  let elCount = map.get(el) ?? 0;
  map.set(el, elCount + 1);
}
console.log(map);
let maxNum = Math.max(...students);
map.forEach((val, key) => {
  document.write(`${key} - ${val} <br>`);
});
document.write(`Максимальне значення - ${maxNum}`);
