import {
  profileObj
} from './constants';

export function renderProfile(name, about) {
  profileObj.heading.textContent = name;
  profileObj.description.textContent = about;
}
export function renderAvatar(avatar) {
  profileObj.avatar.src = avatar;
}
export function renderLoading(isLoading, formElement, loadingValue, baseValue) {
  const buttonElement = formElement.querySelector('.save-button');
  if(isLoading) {
    buttonElement.textContent = loadingValue;
  } else {
    buttonElement.textContent = baseValue;
  }
}