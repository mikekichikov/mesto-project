export const editBtn = document.querySelector('.edit-button');
export const addBtn = document.querySelector('.add-button');
export const closeButtons = document.querySelectorAll('.close-button');
export const editProfileBtn = document.querySelector('.editProfileBtn');
export const addNewCardBtn = document.querySelector('.addNewCardBtn');

export const page = document.querySelector('.page');
export const profileHeading = document.querySelector('.profile__heading');
export const profileDescription = document.querySelector('.profile__description');

export const editProfileForm = document.querySelector('.editProfileForm');
export const addNewCardForm = document.querySelector('.addNewCardForm');

export const popups = document.querySelectorAll('.popup');
export const popupEditProfile = document.querySelector('.popup-edit');
export const popupAddCard = document.querySelector('.popup-add-card');

export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const imageName = document.querySelector('.popup__input_type_place');
export const imageLink = document.querySelector('.popup__input_type_src');

export const cardTemplate = document.querySelector('.card-template').content;
export const cardsList = document.querySelector('.elements');
export const popupImgContainer = document.querySelector('.popup-image');
export const popupImg = document.querySelector('.popup__image');
export const popupImgCaption = document.querySelector('.popup__image-heading');

export const initialCards = [
  {
    name: 'Алтайские горы',
    link: 'https://images.unsplash.com/photo-1643281237857-5f14c2b9f3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Чемал',
    link: 'https://images.unsplash.com/photo-1619417606952-552a15237367?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Мыс Птичий',
    link: 'https://images.unsplash.com/photo-1660725485682-c4b89da506f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1604921522927-2a83ad2954c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Забайкальский край',
    link: 'https://images.unsplash.com/photo-1662220568412-a3d07a8c823e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }
];
