import './index.css'; //импорт стилей

import {
  avatarBtn,
  editBtn,
  addBtn,
  profileHeading,
  profileDescription,
  editAvatarForm,
  editProfileForm,
  addNewCardForm,
  popupEditAvatar,
  popupEditProfile,
  popupAddCard,
  avatarInput,
  nameInput,
  jobInput,
  imageName,
  imageLink,
  formObj,
} from '../components/constants.js';

import {
  openPopup,
  closePopup,
  closeByOverlay, 
} from '../components/modal.js';

import { 
  addCard,
  createCard,
} from '../components/card.js';

import { 
  getProfile,
  getCards,
  patchAvatar,
  patchProfile,
  postCard,
} from '../components/api';

import {
  renderProfile,
  renderAvatar,
} from '../components/utils';

 import { enableValidation } from '../components/validate.js';
 
 closeByOverlay();
 enableValidation(formObj);

 //  кнопки открытия попапов
 avatarBtn.addEventListener('click', () => openPopup(popupEditAvatar));
 editBtn.addEventListener('click', () => {
   openPopup(popupEditProfile);
   nameInput.value = profileHeading.textContent;
   jobInput.value = profileDescription.textContent;
 });
 addBtn.addEventListener('click', () => openPopup(popupAddCard));

//  получение данных с сервера
 Promise.all([getProfile(), getCards()])
  .then(([profileData, cardsData]) => {
    renderProfile(profileData.name, profileData.about);
    renderAvatar(profileData.avatar);
    cardsData.reverse().forEach((card) => {
      addCard(createCard(card.link, card.name, card._id, card.likes, card.owner._id));
    })
  })
  .catch(([profileDataErr, cardsDataErr]) => {
    console.log(`Ошибка: ${profileDataErr}`);
    console.log(`Ошибка: ${cardsDataErr}`);
  });

//сохранение формы аватара профиля
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  patchAvatar(avatarInput.value)
    .then((profile) => {
      renderAvatar(profile.avatar);
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  editAvatarForm.reset();
}
editAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

//сохранение формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  patchProfile(nameInput.value, jobInput.value)
    .then((profileData) => {
      renderProfile(profileData.name, profileData.about);
      closePopup(popupEditProfile);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
}
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

//сохранение формы новой карточки
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  postCard(imageName.value, imageLink.value)
    .then((card) => {
      addCard(createCard( card.link, card.name, card._id, card.likes, card.owner._id));
      closePopup(popupAddCard);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  addNewCardForm.reset();
}
addNewCardForm.addEventListener('submit', handlePlaceFormSubmit);
