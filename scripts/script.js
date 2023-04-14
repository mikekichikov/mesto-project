const editBtn = document.querySelector('.edit-button');
const addBtn = document.querySelector('.add-button');
const closeBtn = document.querySelectorAll('.close-button');
const saveBtn = document.querySelectorAll('.save-button');
const editProfileBtn = document.querySelector('.editProfileBtn');
const addNewCardBtn = document.querySelector('.addNewCardBtn');

const popup = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup-edit');
const popupAddCard = document.querySelector('.popup-add-card');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

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

function openPopup (element) {
  element.classList.add('popup_opened');
};

function closePopup(evt) {
  evt.target.closest(".popup").classList.remove("popup_opened")
}

//сохранение формы редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  document.querySelector('.profile__heading').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = jobInput.value;
}

// добавление новой карточки
function addCard (imgName, imgLink){
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector(".element__image").src = imgLink;
  cardElement.querySelector('.element__image').alt = imgName;
  cardElement.querySelector('.element__heading').textContent = imgName;
  cardElement.querySelector('.like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('like-button_active');
  });
  cardElement.querySelector('.delete-button').addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  cardElement.querySelector('.element__image').addEventListener('click', function() {
    openPopup(popupImgContainer);
    popupImg.src = imgLink;
    popupImgCaption.textContent = imgName;
  });
  cardsList.prepend(cardElement);
}

function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  let imgName = document.querySelector(".popup__input_type_place").value;
  let imgLink = document.querySelector(".popup__input_type_src").value;
  addCard(imgName, imgLink);
}

// карточки по умолчанию
initialCards.forEach(function (item){
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  cardElement.querySelector(".element__image").src = item.link;
  cardElement.querySelector('.element__image').alt = item.name;
  cardElement.querySelector('.element__heading').textContent = item.name;
  cardElement.querySelector('.like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('like-button_active');
  });
  cardElement.querySelector('.delete-button').addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  cardElement.querySelector('.element__image').addEventListener('click', function() {
    openPopup(popupImgContainer);
    popupImg.src = item.link;
    popupImgCaption.textContent = item.name;
  });
  cardsList.prepend(cardElement);
});
  
// кнопки
editBtn.addEventListener('click', () => openPopup (popupEditProfile));

addBtn.addEventListener('click', () => openPopup (popupAddCard));

closeBtn.forEach((item) => {
  item.addEventListener("click", (evt) => closePopup(evt));
});

editProfileBtn.addEventListener('click', (evt) => {
  handleFormSubmit(evt);
  closePopup(evt)
});

addNewCardBtn.addEventListener('click', (evt) => {
  handleFormSubmitPlace(evt);
  closePopup(evt);
});