import {
  cardsList,
  cardTemplate,
  popupImgContainer,
  popupImg,
  popupImgCaption,
  myId,
} from '../utils/constants.js';

import { openPopup } from './modal.js';

import { api } from './api.js';

export function checkLikeBtn(button) {
  return button.classList.contains('like-button_active');
}
export function toggleLikeBtn(button) {
  button.classList.toggle('like-button_active');
}
export function renderLikesCounter(cardElement, likes) {
  const likesCounter = cardElement.querySelector('.element__likes-couter');
  likesCounter.textContent = likes.length;
}
function checkLikes(likes) {
  return likes.some((like) => {
    return like._id === myId;
  });
}
// создание новой карточки
export function createCard(imgLink, imgName, cardId, likes, ownerId) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementHeading = cardElement.querySelector('.element__heading');
  const likeButton = cardElement.querySelector('.like-button');
  const deleteButton = cardElement.querySelector('.delete-button');
  
  elementImage.src = imgLink;
  elementImage.alt = imgName;
  elementHeading.textContent = imgName;
  cardElement.setAttribute('data-id', `${cardId}`);
  if(checkLikes(likes)) toggleLikeBtn(likeButton);
  if(ownerId !== myId) deleteButton.remove();
  likeButton.addEventListener('click', handleLikeCard);
  deleteButton.addEventListener('click', handleDeleteCard);
  elementImage.addEventListener('click', function() {
    openPopup(popupImgContainer);
    popupImg.src = imgLink;
    popupImg.alt = imgName;
    popupImgCaption.textContent = imgName;
  });
  renderLikesCounter(cardElement, likes);
  return cardElement;
}

// фукция добавления карточки
export function addCard (cardElement){
  cardsList.prepend(cardElement);
}

// функция управления лайками
function handleLikeCard(evt) {
  const targetCard = evt.target.closest('.element');
  if(!checkLikeBtn(evt.target)) {
    api.putLike(targetCard.dataset.id)
      .then((cardData) => {
        toggleLikeBtn(evt.target);
        renderLikesCounter(targetCard, cardData.likes);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  } else {
    api.deleteLike(targetCard.dataset.id)
      .then((cardData) => {
        toggleLikeBtn(evt.target);
        renderLikesCounter(targetCard, cardData.likes);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };
}

// функция удаления карточки
function handleDeleteCard(evt) {
  evt.preventDefault();
  const targetCard = evt.target.closest('.element');
  api.deleteCard(targetCard.dataset.id)
    .then(() => {
      targetCard.remove();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
}