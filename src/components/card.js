import {
  cardSelectors,
  cardsList,
  cardTemplate,
  popupImgContainer,
  popupImg,
  popupImgCaption,
  myId,
} from '../utils/constants.js';

import { openPopup } from './modal.js';

import { api } from './Api.js';


export class Card {
  constructor({link, name, _id, likes, owner}, selectors, userID, handleLikeCard, handleClickCard, handleDeleteCard) {
    this._link = link;
    this._name = name;
    this._id = _id;
    this.likes = likes;
    this._owner = owner;
    this._userID = userID;
    this._selectors = selectors;
    this._handleLikeCard = handleLikeCard;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selectors.templateSelector)
      .content
      .querySelector(this._selectors.cardSelector)
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector(this._selectors.imgSelector);
    this._cardHeading = this._element.querySelector(this._selectors.headingSelector);
    this._cardLikeBtn = this._element.querySelector(this._selectors.likeBtnSelector);
    this._cardDeleteBtn = this._element.querySelector(this._selectors.deleteBtnSelector);
    this._cardLikesCounter = this._element.querySelector(this._selectors.likesCounterSelector);

    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._cardHeading.textContent = this._name;
    this._renderLIkes();

    if (this._owner._id !== this._userID) {
      this._cardDeleteBtn.remove();
    }

    return this._element;
  }

  checkLikes() {
    return this.likes.some(like => like._id === this._userID);
  }

  renderLikes() {
    if (this.checkLikes()) {
      this._cardLikeBtn.classList.add('like-button_active');
      this._cardLikesCounter.textContent = this.likes.length;
    } else {
      this._cardLikeBtn.classList.remove('like-button_active');
      this._cardLikesCounter.textContent = this.likes.length;
    }
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(this._selectors.imgSelector)
      .addEventListener('click', () => {
        this._handleClickCard(this._link, this._name);
      });
    this._element
      .querySelector(this._selectors.likeBtnSelector)
      .addEventListener('click', () => {
        this._handleLikeCard(this);
      });
    this._element
      .querySelector(this._selectors.deleteBtnSelector)
      .addEventListener('click', () => {
        this._handleDeleteCard(this);
      });
  }
}


// export function checkLikeBtn(button) {
//   return button.classList.contains(cardSelectors.likeBtnActiveClass);
// }
// export function toggleLikeBtn(button) {
//   button.classList.toggle(cardSelectors.likeBtnActiveClass);
// }
// export function renderLikesCounter(cardElement, likes) {
//   const likesCounter = cardElement.querySelector(cardSelectors.likesCounterSelector);
//   likesCounter.textContent = likes.length;
// }
// function checkLikes(likes) {
//   return likes.some((like) => {
//     return like._id === myId;
//   });
// }
// // создание новой карточки
// export function createCard(imgLink, imgName, cardId, likes, ownerId) {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   const elementImage = cardElement.querySelector('.element__image');
//   const elementHeading = cardElement.querySelector('.element__heading');
//   const likeButton = cardElement.querySelector('.like-button');
//   const deleteButton = cardElement.querySelector('.delete-button');
  
//   elementImage.src = imgLink;
//   elementImage.alt = imgName;
//   elementHeading.textContent = imgName;
//   cardElement.setAttribute('data-id', `${cardId}`);
//   if(checkLikes(likes)) toggleLikeBtn(likeButton);
//   if(ownerId !== myId) deleteButton.remove();
//   likeButton.addEventListener('click', handleLikeCard);
//   deleteButton.addEventListener('click', handleDeleteCard);
//   elementImage.addEventListener('click', function() {
//     openPopup(popupImgContainer);
//     popupImg.src = imgLink;
//     popupImg.alt = imgName;
//     popupImgCaption.textContent = imgName;
//   });
//   renderLikesCounter(cardElement, likes);
//   return cardElement;
// }

// // фукция добавления карточки
// export function addCard (cardElement){
//   cardsList.prepend(cardElement);
// }

// // функция управления лайками
// function handleLikeCard(evt) {
//   const targetCard = evt.target.closest('.element');
//   if(!checkLikeBtn(evt.target)) {
//     api.putLike(targetCard.dataset.id)
//       .then((cardData) => {
//         toggleLikeBtn(evt.target);
//         renderLikesCounter(targetCard, cardData.likes);
//       })
//       .catch((err) => {
//         console.log(`Ошибка: ${err}`);
//       });
//   } else {
//     api.deleteLike(targetCard.dataset.id)
//       .then((cardData) => {
//         toggleLikeBtn(evt.target);
//         renderLikesCounter(targetCard, cardData.likes);
//       })
//       .catch((err) => {
//         console.log(`Ошибка: ${err}`);
//       });
//   };
// }

// // функция удаления карточки
// function handleDeleteCard(evt) {
//   evt.preventDefault();
//   const targetCard = evt.target.closest('.element');
//   api.deleteCard(targetCard.dataset.id)
//     .then(() => {
//       targetCard.remove();
//     })
//     .catch((err) => {
//       console.log(`Ошибка: ${err}`);
//     })
// }