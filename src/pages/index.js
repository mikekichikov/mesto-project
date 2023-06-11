import './index.css'; //импорт стилей

import {
  buttons,
  profileObj,
  forms,
  popupEditAvatar,
  popupEditProfile,
  popupAddCard,
  inputs,
  formObj,
  submitObj,
} from '../utils/constants.js';

import {
  openPopup,
  closePopup,
  closeByOverlay, 
} from '../components/modal.js';

import {
  addCard,
  createCard,
} from '../components/card.js';

import { api } from '../components/api';

import {
  renderProfile,
  renderAvatar,
  renderLoading,
} from '../utils/utils';

import { enableValidation } from '../components/validate.js';

closeByOverlay();
enableValidation(formObj);

//  кнопки открытия попапов
buttons.avatarBtn.addEventListener('click', () => openPopup(popupEditAvatar));
buttons.editBtn.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputs.userName.value = profileObj.heading.textContent;
  inputs.userAbout.value = profileObj.description.textContent;
});
buttons.addBtn.addEventListener('click', () => openPopup(popupAddCard));

//  получение данных с сервера
Promise.all([api.getProfile(), api.getCards()])
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
  renderLoading(true, forms.avatar, submitObj.saving, submitObj.save);
  api.patchAvatar(inputs.avatarUrl.value)
    .then((profile) => {
      renderAvatar(profile.avatar);
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, forms.avatar, submitObj.saving, submitObj.save);
    });
    forms.avatar.reset();
}
forms.avatar.addEventListener('submit', handleAvatarFormSubmit);

//сохранение формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, forms.profile, submitObj.saving, submitObj.save);
  api.patchProfile(inputs.userName.value, inputs.userAbout.value)
    .then((profileData) => {
      renderProfile(profileData.name, profileData.about);
      closePopup(popupEditProfile);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, forms.profile, submitObj.saving, submitObj.save);
    });
}
forms.profile.addEventListener('submit', handleProfileFormSubmit);

//сохранение формы новой карточки
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, forms.newCard, submitObj.saving, submitObj.create);
  api.postCard(inputs.imageName.value, inputs.imageLink.value)
    .then((card) => {
      addCard(createCard( card.link, card.name, card._id, card.likes, card.owner._id));
      closePopup(popupAddCard);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, forms.newCard, submitObj.saving, submitObj.create);
    });
    forms.newCard.reset();
}
forms.newCard.addEventListener('submit', handlePlaceFormSubmit);
