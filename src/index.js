import './pages/index.css'; //импорт стилей

import {
  page,
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

import {
  addCard,
} from './components/card.js';

import {
  enableValidation
} from './components/validate.js';

initialCards.forEach((item) => addCard(item.name, item.link));

//сохранение формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileHeading.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

//сохранение формы новой карточки
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  imgName = imageName.value;
  imgLink = imageLink.value;
  addCard(imgName, imgLink);
  closePopup(popupAddCard);
  addNewCardForm.reset();
}
addNewCardForm.addEventListener('submit', handlePlaceFormSubmit);

// кнопки открытия попап 
editBtn.addEventListener('click', () => openPopup(popupEditProfile));
addBtn.addEventListener('click', () => openPopup(popupAddCard));

// закрытие попап на клик вне объекта 
page.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('close-button')) {
    closePopup(evt.target.closest('.popup'));
  };
});

// закрытие попап на Esc
page.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    closePopup(page.querySelector('.popup_opened'))
  }
});

enableValidation();
