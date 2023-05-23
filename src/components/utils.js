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
