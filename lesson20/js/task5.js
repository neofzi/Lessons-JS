//!Задача №5
// Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент
class DynamicSearch {
  onInputChange() {
    const searchInput = new CustomEvent("searchEmployee", {
      detail: {
        findText: this.input.value,
      },
    });
    this.input.dispatchEvent(searchInput);
  }
  render(containerSelector) {
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.addEventListener("input", this.onInputChange.bind(this));

    if (containerSelector)
      document.querySelector(containerSelector).append(this.input);
  }
}
class WorkerList {
  constructor(list) {
    this.list = list;
  }
  sortList(findText) {
    const workers = document.querySelectorAll(".worker");
    workers.forEach((worker) => {
      const name = worker.textContent.toLowerCase();
      if (name.startsWith(findText.toLowerCase()))
        worker.style.display = "block";
      else worker.style.display = "none";
    });
  }
  render(containerSelector) {
    const div = document.createElement("div");
    for (const worker of this.list) {
      let employeeDiv = document.createElement("div");
      employeeDiv.className = "worker";
      employeeDiv.textContent = `${worker.firstName} ${worker.secondName}`;
      div.append(employeeDiv);
    }
    if (containerSelector)
      document.querySelector(containerSelector).append(div);
  }
}
const workerList = [
  {
    firstName: "Roman",
    secondName: "Ch",
  },
  {
    firstName: "Max",
    secondName: "Sm",
  },
];

window.onload = function () {
  let search = new DynamicSearch();
  search.render(".box");

  let workers = new WorkerList(workerList);
  workers.render(".box");
  search.input.addEventListener("searchEmployee", function (event) {
    workers.sortList(event.detail.findText);
  });
};
