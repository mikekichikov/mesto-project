// кнопки
export const editBtn = document.querySelector('.edit-button');
export const addBtn = document.querySelector('.add-button');
export const avatarBtn = document.querySelector('.profile__avatar-button');
export const closeButtons = document.querySelectorAll('.close-button');
export const editAvatarBtn = document.querySelector('.editAvatarBtn');
export const editProfileBtn = document.querySelector('.editProfileBtn');
export const addNewCardBtn = document.querySelector('.addNewCardBtn');

export const page = document.querySelector('.page');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileHeading = document.querySelector('.profile__heading');
export const profileDescription = document.querySelector('.profile__description');
// формы
export const editAvatarForm = document.querySelector('.editAvatarForm');
export const editProfileForm = document.querySelector('.editProfileForm');
export const addNewCardForm = document.querySelector('.addNewCardForm');
// попапы
export const popups = document.querySelectorAll('.popup');
export const popupEditAvatar = document.querySelector('.popup-avatar');
export const popupEditProfile = document.querySelector('.popup-edit');
export const popupAddCard = document.querySelector('.popup-add-card');
// поля ввода
export const avatarInput = document.querySelector('.popup__input_avatarURL');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const imageName = document.querySelector('.popup__input_type_place');
export const imageLink = document.querySelector('.popup__input_type_src');
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