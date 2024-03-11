//!Задача №4
// Дано масив рядків. Вивести ті, у яких немає голосних літер.
const stringsArray = [
  "Це рядок без цифр",
  "Тут є одна цифра: 5",
  "А тут 3 цифри: 123",
  "Цей рядок теж не містить цифр",
  "ЛЛЛЛЛ",
];
let exp = /^[^aeєиіїоуюя]+$/gi;
for (const line of stringsArray) {
  if (exp.test(line)) console.log(line);
}

// let exp = /[aeєиіїоуюя]/gi;
// for (const line of stringsArray) {
//   if (!exp.test(line)) console.log(line);
// } або так :)
