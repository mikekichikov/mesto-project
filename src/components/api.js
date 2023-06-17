export const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-24",
  headers: {
    authorization: "2d0751a7-a369-43d9-a9c9-33e8b2182ed9",
    "Content-Type": "application/json",
  }
}

// проверка результата запроса
export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

// загрузка информации о пользователе с сервера
export const getProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers,
  })
  .then((res) => {
    // console.log(res);
    return checkResponse(res);
  });
}

// загрузка карточек с сервера
export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers,
  })
  .then((res) => {
    // console.log(res);
    return checkResponse(res);
  })
}

// редактирование профиля
export const patchProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
  .then((res) => {
    return checkResponse(res)
  })
}

// добавление новой карточки
export const postCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
  .then((res) => {
    return checkResponse(res)
  })
}

// удаление карточки
export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then((res) => {
    return checkResponse(res);
  })
}

// постановка лайка
export const putLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then((res) => {
    return checkResponse(res);
  })
}

// снятие лайка
export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    return checkResponse(res);
  })
}

// обновление аватара пользователя
export const patchAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    })
  })
  .then((res) => {
    return checkResponse(res);
  })
}
