//!Задача №1
// Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// - назва компанії на час розробки (назву періодично змінюють)
// - власник компанії
// - споснсори (масив спонсорів)
//       - прізвище спонсора
//       - ім’я  спонсора
//       - сума вкладень спонсора
// - рік випуску
// - вартість сайту
let nameCompany = "Apple";
let companies = [
  {
    name: nameCompany,
    owner: "Roman",
    sponsors: [
      {
        lastName: "Anderson",
        firstName: "Max",
        investmentAmount: 50000,
      },
      {
        lastName: "Mitchell",
        firstName: "Roman",
        investmentAmount: 500000,
      },
    ],
    year: 2024,
    siteCost: 3000,
  },
  {
    name: "Google",
    owner: "John",
    sponsors: [
      {
        lastName: "Smith",
        firstName: "Alice",
        investmentAmount: 70000,
      },
      {
        lastName: "Johnson",
        firstName: "Bob",
        investmentAmount: 600000,
      },
    ],
    year: 2007,
    siteCost: 5000,
  },
];

//!Задача №1.1
// Знайти загальну вартість усіх сайтів
let sumAllWebsite = companies.reduce(
  (prevTotalPrice, company) => (prevTotalPrice += company.siteCost),
  0
);
console.log(sumAllWebsite);

//!Задача №1.2
// Знайти кількість сайтів, що було зроблено між 2000 та 2009 рр.
let siteDo2000And2009 = companies.reduce(
  (count, company) =>
    company.year >= 2000 && company.year <= 2009 ? count + 1 : count,
  0
);
console.log(siteDo2000And2009);

//!Задача №1.3
// Кількість сайтів, де сума спонсорських вкладень була більшою за 100 000
function countWebsitesWithTotalInvestmentAbove(companies) {
  let count = 0;
  for (let i = 0; i < companies.length; i++) {
    const COMPANY = companies[i];
    let totalInvestSum = 0;
    for (let j = 0; j < COMPANY.sponsors.length; j++) {
      totalInvestSum += COMPANY.sponsors[j].investmentAmount;
    }
    if (totalInvestSum > 100000) count++;
  }
  return count;
}
console.log(countWebsitesWithTotalInvestmentAbove(companies));

//!Задача №1.4
// Створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
function getAllSponsors(companies) {
  let allSponsors = [];
  for (let i = 0; i < companies.length; i++) {
    const COMPANY = companies[i];
    for (let j = 0; j < COMPANY.sponsors.length; j++) {
      allSponsors.push(COMPANY.sponsors[j]);
    }
  }
  return allSponsors;
}
console.log(getAllSponsors(companies));

//!Задача №1.5
// знайти рік, коли прибуток був найбільшим
function maxSiteCostYear(companies) {
  let maxSiteCost = -Infinity;
  let maxSiteCostYear;
  for (let i = 0; i < companies.length; i++) {
    const COMPANY = companies[i];
    let companyCost = COMPANY.siteCost;
    if (maxSiteCost < companyCost) {
      maxSiteCost = companyCost;
      maxSiteCostYear = COMPANY.year;
    }
  }
  return maxSiteCostYear;
}
console.log(maxSiteCostYear(companies));

//!Задача №1.6
// упорядкувати список за спаданням прибутку
let sortBySiteCostDescending = companies.sort(
  (a, b) => b.siteCost - a.siteCost
);
console.log(sortBySiteCostDescending);

//!Задача №1.7
// Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
let moreThan10k = companies.filter((el) => el.siteCost > 10000);
console.log(moreThan10k);
let lessThan10k = companies.filter((el) => el.siteCost < 10000);
console.log(lessThan10k);
