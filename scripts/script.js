const editBtn = document.querySelector('.edit-button');
const addBtn = document.querySelector('.add-button');
const closeButtons = document.querySelectorAll('.close-button');
const editProfileBtn = document.querySelector('.editProfileBtn');
const addNewCardBtn = document.querySelector('.addNewCardBtn');

const profileHeading = document.querySelector('.profile__heading');
const profileDescription = document.querySelector('.profile__description');

const editProfileForm = document.querySelector('.editProfileForm');
const addNewCardForm = document.querySelector('.addNewCardForm');

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup-edit');
const popupAddCard = document.querySelector('.popup-add-card');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const imageName = document.querySelector('.popup__input_type_place');
const imageLink = document.querySelector('.popup__input_type_src');

const cardTemplate = document.querySelector('.card-template').content;
const cardsList = document.querySelector('.elements');
const popupImgContainer = document.querySelector('.popup-image');
const popupImg = document.querySelector('.popup__image');
const popupImgCaption = document.querySelector('.popup__image-heading');

const initialCards = [
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

function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};

function hideClosestPopup(evt) {
  closePopup(evt.target.closest('.popup'))
};

// создание новой карточки
function createCard(imgName, imgLink) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementHeading = cardElement.querySelector('.element__heading');
  const likeButton = cardElement.querySelector('.like-button');
  const deleteButton = cardElement.querySelector('.delete-button');
  
  elementImage.src = imgLink;
  elementImage.alt = imgName;
  elementHeading.textContent = imgName;
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('like-button_active');
  });
  deleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  elementImage.addEventListener('click', function() {
    openPopup(popupImgContainer);
    popupImg.src = imgLink;
    popupImg.alt = imgName;
    popupImgCaption.textContent = imgName;
  });
  return cardElement;
}

function addCard (imgName, imgLink){
  const cardElement = createCard(imgName, imgLink);
  cardsList.prepend(cardElement);
}

//сохранение формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileHeading.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  addCard(imageName.value, imageLink.value);
  closePopup(popupAddCard);
  addNewCardForm.reset();
}

initialCards.forEach((item) => addCard(item.name, item.link));

// кнопки
editBtn.addEventListener('click', () => openPopup(popupEditProfile));

addBtn.addEventListener('click', () => openPopup(popupAddCard));

closeButtons.forEach((button) => {
  button.addEventListener('click', hideClosestPopup);
});

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addNewCardForm.addEventListener('submit', handlePlaceFormSubmit);