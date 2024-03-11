//!Задача №10
// Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
let str = "Моє день народження 06.12.2005";
let exp = /\b\d{2}\b/g;
let count = 0;
let matches = str.match(exp);
if (matches) count = matches.length;
alert(`${matches} \n${count}`);
