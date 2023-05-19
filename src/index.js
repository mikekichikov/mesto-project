import './pages/index.css'; //импорт стилей

import {
  initialCards,
  editBtn,
  addBtn,
  profileHeading,
  profileDescription,
  nameInput,
  jobInput,
  editProfileForm,
  popupEditProfile,
  imageName,
  imageLink,
  addNewCardForm,
  popupAddCard,
  addNewCardBtn,
} from './components/constants.js';

import {
  openPopup,
  closePopup
} from './components/utils.js';

import { addCard } from './components/card.js';
import { closeByMissclick, disabledSaveButton } from './components/modal';
import { enableValidation } from './components/validate.js';

initialCards.forEach((item) => addCard(item.name, item.link));

closeByMissclick();

editBtn.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileHeading.textContent;
  jobInput.value = profileDescription.textContent;
});
addBtn.addEventListener('click', () => openPopup(popupAddCard));

//сохранение формы редактирования профиля
function handleProfileFormSubmit(evt) {
  console.log(evt);
  evt.preventDefault();
  profileHeading.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
};
editProfileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));

//сохранение формы новой карточки
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const imgName = imageName.value;
  const imgLink = imageLink.value;
  addCard(imgName, imgLink);
  disabledSaveButton(addNewCardBtn);
  closePopup(popupAddCard);
  addNewCardForm.reset();
}
addNewCardForm.addEventListener('submit', handlePlaceFormSubmit);
console.log(addNewCardForm);
enableValidation({
  formSelector: '.popup__input-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.save-button',
  inactiveButtonClass: 'save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
