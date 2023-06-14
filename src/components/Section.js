export default class Section {
  constructor(containerSelector, renderer) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element, position) {
    if (position === 'append') {
      this._container.append(element);
    } else if (position === 'prepend') {
      this._container.prepend(element);
    };
  }

  renderItems(items) {
    items.reverse().forEach(item => this._renderer({ data: item, position: 'prepend'}))
  }

  _clear() {
    this._container.innerHTML = '';
  } 
}