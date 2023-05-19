import { popups } from "./constants";

export function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener("keydown", closeByEscape);
};

export function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener("keydown", closeByEscape);
};

export function closeByOverlay() {
  popups.forEach(item => {
    item.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('close-button')) {
          closePopup(item);
      }
    })
  })
}

export function closeByEscape(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

export function disabledSaveButton(elem) {
  const buttonDisabled = elem;
  buttonDisabled.disabled = true;
  buttonDisabled.classList.add("save-button_disabled");
}