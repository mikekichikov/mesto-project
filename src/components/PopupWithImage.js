import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({popup, image, caption}) {
    super(popup);
    this._image = this._popup.querySelector(image);
    this._caption = this._popup.querySelector(caption);
  }

  open(name, url) {
    this._image.src = url;
    this._image.alt = name;
    this._caption.textContent = name;

    super.open();
  }
}