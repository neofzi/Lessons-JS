//!Задача №3
// На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0. Використати делегування
class Inputs {
  inputClick(event) {
    let targetElement = event.target;
    if (targetElement.tagName === "INPUT") targetElement.value = 0;
  }
  render(containerSelector) {
    const inputsPlaceholder = [
      "Age",
      "Height",
      "Weight",
      "Salary",
      "Experience",
      "Department",
      "Order",
    ];
    const form = document.createElement("form");
    inputsPlaceholder.forEach((element) => {
      const inp = document.createElement("input");
      inp.setAttribute("type", "number");
      inp.placeholder = element;
      form.append(inp);
    });
    form.addEventListener("click", this.inputClick);
    if (containerSelector)
      document.querySelector(containerSelector).append(form);
  }
}
window.onload = function () {
  let input = new Inputs();
  input.render(".inputs-box");
};
