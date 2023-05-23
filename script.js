import { dataFood } from "./dataFood.js";

function assignDataToElements() {
  // Отримання всіх елементів HTML з класом "card"
  let cardElements = document.getElementsByClassName("card");

  // Перебір кожного елементу "card"
  for (let i = 0; i < cardElements.length; i++) {
    let cardElement = cardElements[i];
    let cardId = cardElement.id;

    // Перебір масиву dataFood
    for (let j = 0; j < dataFood.length; j++) {
      let item = dataFood[j];
      let id = item.id;
      let name = item.name;
      let description = item.description;
      let image = item.image;
      let price = item.price;

      // Перевірка на співпадіння id
      if (id == cardId) {
        // Знаходження елементів HTML в межах поточного "card" та присвоєння значень
        let nameElement = cardElement.querySelector(".name");
        let descriptionElement = cardElement.querySelector(".description");
        let priceElement = cardElement.querySelector(".price");
        let imageElement = cardElement.querySelector(".image");

        nameElement.innerHTML = name;
        descriptionElement.innerHTML = description;
        priceElement.innerHTML = `${price} $`;
        imageElement.src = image;

        // Вихід з циклу, оскільки id було знайдено
        break;
      }
    }
  }
}

// Виклик функції для присвоєння значень до всіх карточок
assignDataToElements();
