//!Задача №6
// Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.
function getAverageScore() {
  let userCount = parseInt(document.querySelector(".lesson-6__input").value);
  for (let i = 0; i < userCount; i++) {
    let inp = document.createElement("input");
    inp.type = "number";
    document.querySelector(".lesson-6").append(inp);
  }
  let btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "Get sum";
  document.querySelector(".lesson-6").append(btn);
  btn.addEventListener("click", calculateSum);
}
function calculateSum() {
  let inputs = document.querySelectorAll(".lesson-6 input[type='number']");
  let sum = 0;
  inputs.forEach((input) => {
    sum += parseInt(input.value) || 0;
  });

  let average = sum / inputs.length;
  let resultDiv = document.createElement("div");
  resultDiv.innerText = `Середнє значення: ${average}`;
  document.querySelector(".lesson-6").append(resultDiv);
}
window.onload = function () {
  document.getElementById("get-table").onclick = getAverageScore;
};
