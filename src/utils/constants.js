export const page = document.querySelector('.page');

// кнопки
export const buttons = {
  editBtn: page.querySelector('.edit-button'),
  addBtn: page.querySelector('.add-button'),
  avatarBtn: page.querySelector('.profile__avatar-button'),
  closeButtons: page.querySelectorAll('.close-button')
}
// данные профиля
export const profileObj = {
  avatar: page.querySelector('.profile__avatar'),
  heading: page.querySelector('.profile__heading'),
  description: page.querySelector('.profile__description')
}
// формы
export const forms= {
  avatar: page.querySelector('.editAvatarForm'),
  profile: page.querySelector('.editProfileForm'),
  newCard: page.querySelector('.addNewCardForm')
}
// попапы
export const popups = document.querySelectorAll('.popup');
export const popupEditAvatar = document.querySelector('.popup-avatar');
export const popupEditProfile = document.querySelector('.popup-edit');
export const popupAddCard = document.querySelector('.popup-add-card');
// поля ввода
export const inputs = {
  avatarUrl:document.querySelector('.popup__input_avatarURL'),
  userName: document.querySelector('.popup__input_type_name'),
  userAbout: document.querySelector('.popup__input_type_job'),
  imageName: document.querySelector('.popup__input_type_place'),
  imageLink: document.querySelector('.popup__input_type_src')
}
// темплейт
export const cardTemplate = document.querySelector('.card-template').content;
export const cardsList = document.querySelector('.elements');
export const popupImgContainer = document.querySelector('.popup-image');
export const popupImg = document.querySelector('.popup__image');
export const popupImgCaption = document.querySelector('.popup__image-heading');
export const formObj = {
  formSelector: '.popup__input-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.save-button',
  inactiveButtonClass: 'save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
export const submitObj = {
  create: 'Создать',
  save: 'Сохранить',
  saving: 'Сохранение...',
};
export const myId = '1a595976abb83992213a7e1b';