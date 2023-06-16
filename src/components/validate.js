import { formObj } from "./constants";
// валидация форм
function showInputError(formElement, inputElement, errorMessage, formObj) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formObj.errorClass);
}
function hideInputError(formElement, inputElement, formObj) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formObj.inputErrorClass);
  errorElement.classList.remove(formObj.errorClass);
  errorElement.textContent = '';
}
function isValid(formElement, inputElement, formObj) {
  if(inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }

  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formObj);
  } else {
    hideInputError(formElement, inputElement, formObj);
  }
}
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}
export function disableSaveButton(elem) {
  const buttonDisabled = elem;
  buttonDisabled.disabled = true;
  buttonDisabled.classList.add(formObj.inactiveButtonClass);
}
function toggleButtonState(inputList, buttonElement, formObj) {
  if(hasInvalidInput(inputList)) {
    disableSaveButton(buttonElement);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(formObj.inactiveButtonClass);
  }
}
function setEventListeners(formElement, formObj) {
  const inputList = Array.from(formElement.querySelectorAll(formObj.inputSelector));
  const buttonElement = formElement.querySelector(formObj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, formObj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, formObj);
      toggleButtonState(inputList, buttonElement, formObj);
    });
  });
}
 export function enableValidation(formObj) {
  const formList = Array.from(document.querySelectorAll(formObj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, formObj);
  });
}
