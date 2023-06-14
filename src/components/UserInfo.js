export default class UserInfo {
  constructor({heading, description, avatar}){
    this._name = document.querySelector(heading);
    this._about = document.querySelector(description);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    this._info = {
      name: this.name,
      about: this.about,
      avatar: this.avatar,
      userId: this.userId
    }
    return this._info;
  }

  setUserInfo({name, about, avatar, _id}) {
    this.name = name;
    this.about = about;
    this.avatar = avatar;
    this.userId = _id;
  }

  renderUserInfo() {
    this._name.textContent = this.name;
    this._about.textContent = this.about;
  }

  setUserAvatar() {
    this._avatar.src = this.avatar;
  }
}