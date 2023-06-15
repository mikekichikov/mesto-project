export default class Card {
  constructor(data, selectors, userId, handleLikeCard, handleClickCard, handleDeleteCard) {
    this.link = data.link;
    this.name = data.name;
    this.id = data._id;
    this.likes = data.likes;
    this._owner = data.owner;
    this._userId = userId;
    this._selectors = selectors;
    this._handleLikeCard = handleLikeCard;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selectors)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  checkLikes() {
    return this.likes.some(like => {
      return like._id === this._userId;
    });
  }
  
  renderLikesCounter() {
    this._cardLikesCounter.textContent = this.likes.length;
}

  toggleLikeBtn() {
    this._cardLikeBtn.classList.toggle("like-button_active");
}
  deleteCard() {
    this._element.remove();
  }
  
  _setEventListeners() {
    this._cardDeleteBtn.addEventListener('click', () => this._handleDeleteCard(this));
    this._cardLikeBtn.addEventListener('click', () => this._handleLikeCard(this));
    this._cardImg.addEventListener('click', () => this._handleClickCard(this));
}
  createCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector('.element__image');
    this._cardHeading = this._element.querySelector('.element__heading');
    this._cardLikeBtn = this._element.querySelector('.like-button');
    this._cardDeleteBtn = this._element.querySelector('.delete-button');
    this._cardLikesCounter = this._element.querySelector('.element__likes-couter');
  
    this._cardImg.src = this.link;
    this._cardImg.alt = this.name;
    this._cardHeading.textContent = this.name;
  
    this._element.setAttribute('data-id', `${this.id}`);
    this._setEventListeners();
    this.renderLikesCounter();
  
    if (this.checkLikes()) this.toggleLikeBtn();
    if (this._owner._id !== this._userId) this._cardDeleteBtn.remove();
    
    return this._element;
  }
}
