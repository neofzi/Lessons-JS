//!Задача №3
// Користувач задає рік народження. Визначити кількість років користувача.
function userAge() {
  const userBirthYear = parseInt(
    document.getElementById("user-age-input").value
  );
  const currentYear = new Date().getFullYear();
  const age = currentYear - userBirthYear;
  document.getElementById("res").value = age;
}
window.onload = function () {
  document.getElementById("user-age-input").oninput = userAge;
};
