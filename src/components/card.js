import {
  cardsList,
  cardTemplate,
  popupImgContainer,
  popupImg,
  popupImgCaption,
} from './constants.js';

import {
  openPopup,
} from './modal.js';

// создание новой карточки
export function createCard(imgName, imgLink) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementHeading = cardElement.querySelector('.element__heading');
  const likeButton = cardElement.querySelector('.like-button');
  const deleteButton = cardElement.querySelector('.delete-button');
  
  elementImage.src = imgLink;
  elementImage.alt = imgName;
  elementHeading.textContent = imgName;
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('like-button_active');
  });
  deleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  elementImage.addEventListener('click', function() {
    openPopup(popupImgContainer);
    popupImg.src = imgLink;
    popupImg.alt = imgName;
    popupImgCaption.textContent = imgName;
  });
  return cardElement;
}

//фукция добавления карточки
export function addCard (imgName, imgLink){
  const cardElement = createCard(imgName, imgLink);
  cardsList.prepend(cardElement);
}

