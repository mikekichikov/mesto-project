export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers
  }

// проверка результата запроса
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }
// запрос
  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._checkResponse);
  };

// загрузка информации о пользователе с сервера
  getProfile() {
    return this._request(`/users/me`, {
      headers: this._headers
    })
  }

// загрузка карточек с сервера
  getCards() {
    return this._request(`/cards`, {
      headers: this._headers
    })
  }

// редактирование профиля
  patchProfile(name, about) {
    return this._request(`/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
  }

// добавление новой карточки
  postCard(link, name) {
    return this._request(`/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
  }

// удаление карточки
  deleteCard(card) {
    return this._request(`/cards/${card.id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

// постановка лайка
  putLike(card) {
    return this._request(`/cards/likes/${card.id}`, {
      method: 'PUT',
      headers: this._headers,
    })
  }

// снятие лайка
  deleteLike(card) {
    return this._request(`/cards/likes/${card.id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

// обновление аватара пользователя
  patchAvatar(link) {
    return this._request(`/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
  }
}
