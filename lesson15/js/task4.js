//!Задача №4
// Розробити клас Baner
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)

// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера
class Banner {
  constructor(bannersArr) {
    this.bannersArr = bannersArr;
  }
  randomBanner() {
    return Math.floor(Math.random() * this.bannersArr.length);
  }
  outputtingTheBanner() {
    let randomBanerIndex = this.randomBanner();
    let randomBaner = this.bannersArr[randomBanerIndex];
    document.write("<h1 style='font-size: 30px'>Help Ukraine!</h1>");
    document.write(
      `<a href="${randomBaner.websiteUrl}"><img style="width: 250px;" src="${randomBaner.imageUrl}" alt="${randomBaner.name}"></a>`
    );
  }
}
let banners = [
  {
    name: "Help Ukraine",
    imageUrl:
      "https://media.istockphoto.com/id/1289522492/pl/wektor/mapa-i-flaga-ukrainy.jpg?s=612x612&w=0&k=20&c=yWE7NX56Ywq9Bh-XgKPpWC8DwvR5nT_1DsorHu2XARE=",
    websiteUrl: "https://prytulafoundation.org/",
  },
  {
    name: "Help Ukraine",
    imageUrl:
      "https://cdnn21.img.ria.ru/images/07e5/0c/11/1764162382_0:265:3072:1993_1920x0_80_0_0_63fadbb271179d457de21a3b2c415a6c.jpg",
    websiteUrl: "https://prytulafoundation.org/",
  },
  {
    name: "Help Ukraine",
    imageUrl:
      "https://media.istockphoto.com/id/876656164/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D0%B0%D0%BF%D0%BE%D1%80-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D1%80%D0%B0%D0%BF%D0%BE%D1%80-%D0%BD%D0%B0-%D1%87%D0%BE%D1%80%D0%BD%D0%BE%D0%BC%D1%83-%D1%88%D1%82%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D1%85%D0%BC%D0%B0%D1%80%D0%BD%D0%BE%D0%BC%D1%83-%D0%BD%D0%B5%D0%B1%D1%96-%D1%88%D1%82%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%B0-%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0.jpg?s=612x612&w=0&k=20&c=KlH2ha45XLuaJoZoEc_8dIAPC7S0XXHYB2VTcjhIQOM=",
    websiteUrl: "https://prytulafoundation.org/",
  },
];
const bannerInstance = new Banner(banners);

bannerInstance.outputtingTheBanner();
