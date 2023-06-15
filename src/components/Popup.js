export default class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
  }

  open() {
    document.addEventListener('keydown', this._closeByEscape);
    this.popup.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener('keydown', this._closeByEscape);
    this.popup.classList.remove("popup_opened");
  }

  _closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this.popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains('close-button')) {
        this.close();
      }
    })
  }
}