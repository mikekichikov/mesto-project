// import { formObj } from "../utils/constants";
// // валидация форм
// function showInputError(formElement, inputElement, errorMessage, formObj) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(formObj.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(formObj.errorClass);
// }
// function hideInputError(formElement, inputElement, formObj) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(formObj.inputErrorClass);
//   errorElement.classList.remove(formObj.errorClass);
//   errorElement.textContent = '';
// }
// function isValid(formElement, inputElement, formObj) {
//   if(inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage);
//   } else {
//     inputElement.setCustomValidity('');
//   }

//   if(!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, formObj);
//   } else {
//     hideInputError(formElement, inputElement, formObj);
//   }
// }
// function hasInvalidInput (inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// }
// export function disableSaveButton(elem) {
//   const buttonDisabled = elem;
//   buttonDisabled.disabled = true;
//   buttonDisabled.classList.add(formObj.inactiveButtonClass);
// }
// function toggleButtonState(inputList, buttonElement, formObj) {
//   if(hasInvalidInput(inputList)) {
//     disableSaveButton(buttonElement);
//   } else {
//     buttonElement.disabled = false;
//     buttonElement.classList.remove(formObj.inactiveButtonClass);
//   }
// }
// function setEventListeners(formElement, formObj) {
//   const inputList = Array.from(formElement.querySelectorAll(formObj.inputSelector));
//   const buttonElement = formElement.querySelector(formObj.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, formObj);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement, formObj);
//       toggleButtonState(inputList, buttonElement, formObj);
//     });
//   });
// }
//  export function enableValidation(formObj) {
//   const formList = Array.from(document.querySelectorAll(formObj.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, formObj);
//   });
// }

export default class FormValidator {
  constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._selectors.inputSelector)
    );
    this._submitBtn = this._form.querySelector(
      this._selectors.submitButtonSelector
    );
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._selectors.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._selectors.errorClass);
  }
  
  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._selectors.inputErrorClass);
    errorElement.classList.remove(this._selectors.errorClass);
    errorElement.textContent = "";
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitBtn.classList.add(this._selectors.inactiveButtonClass);
      this._submitBtn.setAttribute("disabled", true);
    } else {
      this._submitBtn.classList.remove(this._selectors.inactiveButtonClass);
      this._submitBtn.removeAttribute("disabled", true);
    }
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  }
}