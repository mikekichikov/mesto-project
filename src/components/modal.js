import { page } from "./constants";
import { closePopup } from "./utils";

export function closeByMissclick() {
  page.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('close-button')) {
      closePopup(evt.target.closest('.popup'));
      };
  });
}

export function closeByEscape(evt) {
  if(evt.key == 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// export function disabledSaveButton(button) {
//   const buttonDisabled = document.querySelector(button);
//   buttonDisabled.disabled = true;
//   buttonDisabled.classList.add("save-button_disabled");
// }