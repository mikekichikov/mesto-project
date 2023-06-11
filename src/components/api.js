export const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-24",
  headers: {
    authorization: "2d0751a7-a369-43d9-a9c9-33e8b2182ed9",
    "Content-Type": "application/json",
  }
}

export class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers
  }

// проверка результата запроса
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

// загрузка информации о пользователе с сервера
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => {
      return this._checkResponse(res);
    });
  }

// загрузка карточек с сервера
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => {
      return this._checkResponse(res);
    })
  }

// редактирование профиля
  patchProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

// добавление новой карточки
  postCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

// удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      return this._checkResponse(res);
    })
  }

// постановка лайка
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then((res) => {
      return this._checkResponse(res);
    })
  }

// снятие лайка
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      return this._checkResponse(res);
    })
  }

// обновление аватара пользователя
  patchAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
    .then((res) => {
      return this._checkResponse(res);
    })
  }
}

export const api = new Api(config);