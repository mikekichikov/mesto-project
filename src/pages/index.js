import './index.css'; //импорт стилей

import {
  buttons,
  profileObj,
  forms,
  popups,
  popupSelectors,
  // popupEditAvatar,
  // popupEditProfile,
  // popupAddCard,
  inputs,
  formObj,
  submitObj,
  cardSelectors
} from '../utils/constants.js';

import { Api, config } from '../components/Aapi';
import Card from '../components/Cardd';
import FormValidator from '../components/FormValidator';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';
import { handleSubmit } from '../utils/utils';

let userId;
// экземпляр api
const api = new Api(config);
// экземпляр данных пользователя
const user = new UserInfo(profileObj.heading, profileObj.description, profileObj.avatar);
// экземпляр для рендера карточек
const cardSection = new Section('.elements', renderCard);
// экземпляры модальных окон
const popupEditProfile = new PopupWithForm(popupSelectors.editProfile, submitPopupProfile);
const popupAddCard = new PopupWithForm(popupSelectors.addCard, sibmitPopupAddCard);
const popupEditAvatar = new PopupWithForm(popupSelectors.editAvatar, submitPopupAvatar);
const popupImage = new PopupWithImage(popupSelectors.imgContainer);
const popupConfirm = new PopupWithConfirm(popupSelectors.deleteConfirm, submitDeleteCard);

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupImage.setEventListeners();
popupConfirm.setEventListeners();

//экземпляры форм валидации
const formValidProfile = new FormValidator(formObj, popupEditProfile.popup);
const formValidCard = new FormValidator(formObj, popupAddCard.popup);
const formValidAvatar = new FormValidator(formObj, popupEditAvatar.popup);

formValidProfile.enableValidation();
formValidCard.enableValidation();
formValidAvatar.enableValidation();

buttons.editBtn.addEventListener('click', () => { handleEditProfile() });
buttons.addBtn.addEventListener('click', () => { popupAddCard.open()});
buttons.avatarBtn.addEventListener('click', () => { popupEditAvatar.open() });

Promise.all([api.getProfile(), api.getCards()])
.then(([userData, cards]) => {
  user.setUserInfo(userData);
  user.renderUserInfo();
  user.setUserAvatar();
  cardSection.renderItems(cards);
})
.catch(err => console.log(err))

function submitPopupProfile(evt, {name, about}) {
  function makePatchProfile() {
    return api.patchProfile(name, about)
    .then(data => {
      user.setUserInfo({name: data.name, about: data.about});
      user.renderUserInfo();
    })
  }
  handleSubmit(makePatchProfile, evt, popupEditProfile);
};

function sibmitPopupAddCard(evt, {link, caption}) {
  function makePostCard() {
      return api.postCard( link, caption)
      .then(data => {renderCard({ data, position: 'prepend'})
    })
  };
  handleSubmit(makePostCard, evt, popupAddCard);
};

function submitPopupAvatar(evt, {avatar} ) {
  function makePatchAvatar() {
    return api.patchAvatar(avatar)
    .then(data => {
      user.setUserInfo({avatar: data.avatar})
      user.setUserAvatar();
    });
  }
  handleSubmit(makePatchAvatar, evt, popupEditAvatar);
};

function submitDeleteCard(card, evt) {
  // console.log(card);
  function makeDeleteCard() {
    return api.deleteCard(card)
    .then(() => {
      console.log(popupConfirm.card);
      popupConfirm.card.deleteCard()
    })
  }
  handleSubmit(makeDeleteCard, evt, popupConfirm, 'Удаление...');
};

function handleEditProfile() {
  const data = user.getUserInfo();
  inputs.userName.value = data.name;
  inputs.userAbout.value = data.about;
  popupEditProfile.open()
};

function renderCard({ data, position }) {
  const newCard = new Card(data, cardSelectors.templateSelector, user.userId, handleLikeCard, handleClickCard, handleDeleteCard).createCard();
  cardSection.addItem(newCard, position);
}

function handleLikeCard(card) {
  if (!card.checkLikes()) {
    api.putLike(card)
    .then(data => {
      card.likes = data.likes;
      card.toggleLikeBtn();
      card.renderLikesCounter();
    })
    .catch(err => console.log(err))
  } else {
    api.deleteLike(card)
    .then(data => {
      card.likes = data.likes;
      card.toggleLikeBtn();
      card.renderLikesCounter();
    })
    .catch(err => console.log(err))
  }
};

function handleClickCard(card) {
  popupImage.open(card);
};

function handleDeleteCard(card) {
  popupConfirm.open();
  popupConfirm.getCard(card);
}
