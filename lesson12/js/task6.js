//!Задача №6
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
let names = ["Andrew", "Olga", "Bogdan", "Victoria", "Galina", "Roman"];
names.sort((a, b) => a.length - b.length);
console.log(names);
function includesBinarySearch(names, searchElement) {
  let start = 0;
  let end = names.length - 1;
  while (start <= end) {
    const MIDDLE = Math.floor((start + end) / 2);
    if (names[MIDDLE].length === searchElement) return MIDDLE;
    if (names[MIDDLE].length < searchElement) start = MIDDLE + 1;
    if (names[MIDDLE].length > searchElement) end = MIDDLE - 1;
  }
  return -1;
}

document.write(includesBinarySearch(names, 5));
