//!Задача №5
// Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
class CardList {
  constructor({ srcImg, price, linkProduct, titleProduct }) {
    this.srcImg = srcImg;
    this.price = price;
    this.titleProduct = titleProduct;
    this.linkProduct = linkProduct;
  }
  render(containerSelector) {
    const containerLink = document.createElement("a");
    containerLink.setAttribute("href", this.linkProduct);
    containerLink.onclick = this.clickEffect.bind(this);

    const boxImg = document.createElement("div");
    boxImg.className = "img-box";
    containerLink.append(boxImg);

    const img = document.createElement("img");
    img.setAttribute("src", this.srcImg);
    boxImg.append(img);

    const title = document.createElement("h3");
    title.innerText = this.titleProduct;
    title.className = "title-product";
    containerLink.append(title);

    const price = document.createElement("div");
    price.innerText = this.price;
    price.className = "price-product";
    containerLink.append(price);

    if (containerSelector)
      document.querySelector(containerSelector).append(containerLink);
  }
  clickEffect(event) {
    event.currentTarget.classList.toggle("card-border");
  }
}
const cards = [
  {
    srcImg: "https://content2.rozetka.com.ua/goods/images/big/394082591.jpg",
    price: "13 623₴",
    linkProduct: "#",
    titleProduct: 'Монітор 27" LG UltraGear 27GP850P-B',
  },
  {
    srcImg: "https://content1.rozetka.com.ua/goods/images/big/248368726.jpg",
    price: "11 299₴",
    linkProduct: "#",
    titleProduct:
      'Монітор 27" Samsung Odyssey AG50 S27AG502NI (LS27AG502PIXCI)',
  },
  {
    srcImg: "https://content2.rozetka.com.ua/goods/images/big/346030630.jpg",
    price: "18 990₴",
    linkProduct: "#",
    titleProduct: "Teamgee портативний монітор для ноутбука",
  },
];
window.onload = function () {
  for (const product of cards) {
    new CardList(product).render(".cards");
  }
};
