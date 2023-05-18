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
} from './components/constants.js';

import {
  openPopup,
  closePopup
} from './components/utils.js';

import { addCard } from './components/card.js';
import { closeByMissclick } from './components/modal';
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
  evt.preventDefault();
  profileHeading.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
};
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

//сохранение формы новой карточки
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  imgName.textContent = imageName.value;
  imgLink.textContent = imageLink.value;
  addCard(cardElement);
  closePopup(popupAddCard);
  addNewCardForm.reset();
}
addNewCardForm.addEventListener('submit', handlePlaceFormSubmit);

// закрытие попап на клик вне объекта 
// page.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('close-button')) {
//     closePopup(evt.target.closest('.popup'));
//   };
// });

enableValidation({
  formSelector: '.popup__input-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.save-button',
  inactiveButtonClass: 'save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
