import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(selector, handleConfirm) {
    super(selector);
    this._handleConfirm = handleConfirm;
    this._button = this.popup.querySelector('.save-button');
  }

  getCard(card) {
    this.card = card;
  }
  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener('submit', (evt) => this._handleConfirm(this.card, evt))
  }
}