import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._form = this.popup.querySelector(".popup__input-form");
    this._inputList = this.popup.querySelectorAll(".popup__input");
    this._submitBtn = this._form.querySelector('.save-button');
    this._submitBtnText = this._submitBtn.textContent;
    this._handleFormSubmit = handleFormSubmit;
  }

  renderSubmitBtn (isLoading) {
    isLoading
      ? (this._submitBtn.textContent = 'Сохранение...')
      : (this._submitBtn.textContent = this._submitBtnText);
  };

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", (evt) => {
      this._handleFormSubmit(evt, this._getInputValues());
    });
  }
}