export const page = document.querySelector('.page');

export const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-24",
  headers: {
    authorization: "2d0751a7-a369-43d9-a9c9-33e8b2182ed9",
    "Content-Type": "application/json",
  }
}

// кнопки
export const buttons = {
  editBtn: page.querySelector('.edit-button'),
  addBtn: page.querySelector('.add-button'),
  avatarBtn: page.querySelector('.profile__avatar-button'),
  closeButtons: page.querySelectorAll('.close-button')
}
// данные профиля
export const profileObj = {
  avatar: '.profile__avatar',
  heading: '.profile__heading',
  description: '.profile__description'
}
// формы
export const forms= {
  avatar: page.querySelector('.editAvatarForm'),
  profile: page.querySelector('.editProfileForm'),
  newCard: page.querySelector('.addNewCardForm')
}
// попапы
export const popupSelectors = {
  editProfile: '.popup-edit',
  editAvatar: '.popup-avatar',
  addCard: '.popup-add-card',
  deleteConfirm: '.popup-delete-confirm',
  imgContainer: '.popup-image',
  imgSelector: '.popup__image',
  imgCaption: '.popup__image-heading'
}
export const popups = {
  popupEditAvatar: page.querySelector('.popup-avatar'),
  popupEditProfile: page.querySelector('.popup-edit'),
  popupAddCard: page.querySelector('.popup-add-card'),
  popupImage: page.querySelector('.popup-image')
}
// поля ввода
export const inputs = {
  avatarUrl:page.querySelector('.popup__input_avatarURL'),
  userName: page.querySelector('.popup__input_type_name'),
  userAbout: page.querySelector('.popup__input_type_job'),
  imageName: page.querySelector('.popup__input_type_place'),
  imageLink: page.querySelector('.popup__input_type_src')
}
// темплейт
export const cardSelectors = {
  templateSelector: '.card-template',
  cardSelector: '. elements',
  imgSelector: '.element__image',
  headingSelector: '.element__heading',
  likeBtnSelector: '.like-button',
  likeBtnActiveClass: 'like-button_active',
  deleteBtnSelector: '.delete-button',
  likesCounterSelector: '.element__likes-couter'
}

export const formObj = {
  formSelector: '.popup__input-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.save-button',
  inactiveButtonClass: 'save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
export const myId = '1a595976abb83992213a7e1b';