import './pages/index.css'; //импорт стилей

import {
  avatarBtn,
  editBtn,
  addBtn,
  editAvatarBtn,
  addNewCardBtn,
  profileAvatar,
  profileHeading,
  profileDescription,
  editAvatarForm,
  editProfileForm,
  addNewCardForm,
  popupEditAvatar,
  popupEditProfile,
  popupAddCard,
  nameInput,
  jobInput,
  imageName,
  imageLink,
  formObj,
  avatarInput
} from './components/constants.js';

import { addCard } from './components/card.js';
import { initialCards } from './components/utils';

import {
  openPopup,
  closePopup,
  closeByOverlay, 
 } from './components/modal.js';

import { enableValidation, disableSaveButton } from './components/validate.js';

initialCards.forEach((item) => addCard(item.name, item.link));

closeByOverlay();

avatarBtn.addEventListener('click', () => openPopup(popupEditAvatar));
editBtn.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileHeading.textContent;
  jobInput.value = profileDescription.textContent;
});
addBtn.addEventListener('click', () => openPopup(popupAddCard));

//сохранение формы аватара профиля
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  profileAvatar.src = avatarInput.value;
  closePopup(popupEditAvatar);
  disableSaveButton(editAvatarBtn);
  editAvatarForm.reset();
}

editAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

//сохранение формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileHeading.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

//сохранение формы новой карточки
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const imgName = imageName.value;
  const imgLink = imageLink.value;
  addCard(imgName, imgLink);
  closePopup(popupAddCard);
  disableSaveButton(addNewCardBtn)
  addNewCardForm.reset();
}

addNewCardForm.addEventListener('submit', handlePlaceFormSubmit);

enableValidation(formObj);
