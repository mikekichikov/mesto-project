export default class Popup {
    constructor(selector) {
      this._popup = document.querySelector(selector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
      document.addEventListener('keydown', this._closeByEscape);
      this._popup.classList.add("popup_opened");
    }
  
    close() {
      document.removeEventListener('keydown', this._closeByEscape);
      this._popup.classList.remove("popup_opened");
    }
  
    _closeByEscape(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    setEventListeners() {
      this._popup.addEventListener('click', (evt) => {
        if (evt.target === this._popup || evt.target.classList.contains('close-button')) {
          this.close();
        }
      })
    }
  }