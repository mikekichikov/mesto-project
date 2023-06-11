import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._form = this._popup.querySelector(".popup__input-form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitBtn = this._form.querySelector('.set-button');

    this._handleFormSubmit = handleFormSubmit;
  }

  renderLoading (isLoading, textDefault="Сохранить", textLoading="Сохранение...") {
    isLoading
      ? (this._submitBtn.textContent = textLoading)
      : (this._submitBtn.textContent = textDefault);
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
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }
}