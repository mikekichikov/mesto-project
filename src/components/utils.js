import {
  profileHeading,
  profileDescription,
  profileAvatar,
} from './constants';

export function renderProfile(name, about) {
  profileHeading.textContent = name;
  profileDescription.textContent = about;
}
export function renderAvatar(avatar) {
  profileAvatar.src = avatar;
}
export function renderLoading(isLoading, formElement, loadingValue, baseValue) {
  const buttonElement = formElement.querySelector('.save-button');
  if(isLoading) {
    buttonElement.textContent = loadingValue;
  } else {
    buttonElement.textContent = baseValue;
  }
}