//!Задача №4
// Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
let students = [
  { name: "Марія", courseNum: 2, faculty: "Психологія" },
  { name: "Андрій", courseNum: 1, faculty: "Психологія" },
  { name: "Василь", courseNum: 3, faculty: "Філологія" },
  { name: "Наталія", courseNum: 4, faculty: "Філософія" },
  { name: "Сергій", courseNum: 2, faculty: "Медицина" },
];
let differentFaculties = new Set(students.map((el) => el.faculty));
document.write(
  `Кількість різних факультетів - ${differentFaculties.size} <br>`
);
let map = new Map();
for (const student of students) {
  let studentsCount = map.get(student.faculty) ?? 0;
  map.set(student.faculty, studentsCount + 1);
}
map.forEach((count, faculty) => {
  document.write(`${faculty} - ${count} <br>`);
});
