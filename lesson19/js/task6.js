//!Задача №6
// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
class ListOfAthletes {
  constructor(athlete) {
    this.athlete = athlete;
  }

  athleteMoving(event) {
    const clickedButton = event.target;
    const parentContainer = clickedButton.parentElement;
    const isInTeam = parentContainer.closest(".team") !== null;
    const destinationContainer = isInTeam
      ? document.querySelector(".all-athletes")
      : document.querySelector(".team");

    destinationContainer.append(clickedButton);
  }

  render(containerSelector) {
    const allAthletes = document.createElement("div");
    allAthletes.className = "all-athletes";
    const titleAll = document.createElement("h2");
    titleAll.innerText = "Загальний список";
    allAthletes.append(titleAll);

    for (let i = 0; i < this.athlete.length; i++) {
      const athletePerson = document.createElement("button");
      athletePerson.setAttribute("type", "button");
      athletePerson.className = "athlete";
      athletePerson.innerText = this.athlete[i];
      athletePerson.onclick = this.athleteMoving.bind(this);
      allAthletes.append(athletePerson);
    }
    const team = document.createElement("div");
    team.className = "team";
    const titleTeam = document.createElement("h2");
    titleTeam.innerText = "Обрані для змагання";
    team.append(titleTeam);

    if (containerSelector)
      document.querySelector(containerSelector).append(allAthletes);
    document.querySelector(containerSelector).append(team);
  }
}
const athletesList = [
  "John Depp",
  "Sara Wik",
  "Den Miro",
  "Alan Woo",
  "Olga Sich",
  "Ivan Hal",
];
window.onload = function () {
  let a1 = new ListOfAthletes(athletesList);
  a1.render(".cards");
};
