//!Задача №5
// Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
const stringsArray = [
  "Це рядок без цифр",
  "Тут є одна цифра: 3",
  "А тут 3 цифри: 123",
  "Цей рядок теж не містить цифр",
];
let exp = /1|3/;
for (const line of stringsArray) {
  if (exp.test(line)) console.log(line);
}
