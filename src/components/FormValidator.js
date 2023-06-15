export default class FormValidator {
  constructor(selectors, form) {
    this._form = form;
    this._formSelector = selectors.formSelector;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  
  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(input) {
    if (input.validity.patternMismatch) {
      input.setCustomValidity(input.dataset.errorMessage);
    } else {
      input.setCustomValidity("");
    }
    if (!input.validity.valid) {
        this._showInputError(input, input.validationMessage);
    } else {
        this._hideInputError(input);
    }
  }
  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  disableButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add('save-button_disabled');
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
        this.disableButton();
    } else {
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove('save-button_disabled');
    }
  }

  enableValidation() {
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._form.addEventListener("reset", () => {
        this.disableButton();
    });
    this.toggleButtonState();
    this._inputList.forEach((input) => {
        input.addEventListener('input', () => {
            this._checkInputValidity(input);
            this.toggleButtonState();
        });
    });
  }
}
