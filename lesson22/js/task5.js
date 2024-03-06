//!Задача №5
// Користувач вводить дату народження. Визначити, скільки йому повних років.
function calculateAge(container) {
  let userInput = document.querySelector(".input").value;
  let userDate = new Date(userInput);
  let today = new Date();
  let age = today.getFullYear() - userDate.getFullYear();

  if (
    userDate.getMonth() > today.getMonth() ||
    (userDate.getMonth() === today.getMonth() &&
      userDate.getDate() > today.getDate())
  )
    age--;

  let result = document.createElement("div");
  result.innerText = `Вам ${age} років`;
  if (container) document.querySelector(container).append(result);
}
document.querySelector("button").addEventListener("click", function () {
  calculateAge(".wrap");
});
