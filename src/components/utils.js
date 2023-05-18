import {closeByEscape} from './modal.js';

export function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener("keydown", closeByEscape);
};

export function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener("keydown", closeByEscape);
};
