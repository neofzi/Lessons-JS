//!Задача №5
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
let names = ["Andrew", "Olga", "Bogdan", "Victoria", "Galina"];
names.sort();
function includes_binarySearch(names, searchElement) {
  let start = 0;
  let end = names.length - 1;
  while (start <= end) {
    const MIDDLE = Math.floor((start + end) / 2);
    if (names[MIDDLE] === searchElement) return MIDDLE;
    if (names[MIDDLE] < searchElement) start = MIDDLE + 1;
    if (names[MIDDLE] > searchElement) end = MIDDLE - 1;
  }
  return -1;
}

document.write(includes_binarySearch(names, "Olga"));
