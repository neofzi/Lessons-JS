//!Задача №3
// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
function getNamesOfStudents() {
  let result = 0;
  let nameStudents = ["Роман", "Іван", "Максим", "Вова", "Іван"];
  for (let i = 0; i < nameStudents.length; i++) {
    if (nameStudents[i] === "Іван") {
      result++;
    }
  }
  return result;
}
document.write(`Кількість учнів з іменем Іван: ${getNamesOfStudents()}`);
