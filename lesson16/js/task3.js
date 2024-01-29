//!Задача №3
// Об’єкт “Фірма” (використати члени-класи)
// поля
// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);

// методи
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

class Company {
  constructor(name, year, month) {
    this.nameCompany = name;
    this.establishment = [year, month];
    this.services = [];
    this.branches = [];
  }
  existenceOfTheFirm(currentYear) {
    return currentYear - this.establishment[0];
  }
  withdrawalOfBranches(city) {
    return this.branches.filter((branch) => branch.city === city);
  }
  serviceWithdrawal(cost, day) {
    let matchingServices = [];
    for (const service of this.services) {
      if (service.cost <= cost && service.duration <= day)
        matchingServices.push(service);
    }
    return matchingServices;
  }
  addService(name, cost, duration) {
    this.services.push({ name, cost, duration });
  }
  addBranch(country, city, street, houseNumber) {
    this.branches.push({ country, city, street, houseNumber });
  }
  toString() {
    return `Назва компанії: ${this.nameCompany}, Рік заснування: ${this.establishment[0]}`;
  }
}

let myCompany = new Company("Neo company", 2024, 1);
myCompany.addService("Веб-розробка", 2000, 14);
myCompany.addService("Консультації з IT", 500, 7);
myCompany.addBranch("Україна", "Київ", "Вулиця 1", 10);
myCompany.addBranch("США", "Нью-Йорк", "Street 1", 20);

console.log(myCompany.existenceOfTheFirm(2030));
console.log(myCompany.withdrawalOfBranches("Київ"));
console.log(myCompany.serviceWithdrawal(700, 7));
alert(myCompany.toString());
