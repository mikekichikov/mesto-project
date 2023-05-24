(()=>{"use strict";var e=document.querySelector(".edit-button"),t=document.querySelector(".add-button"),n=document.querySelector(".profile__avatar-button"),r=(document.querySelectorAll(".close-button"),document.querySelector(".editAvatarBtn"),document.querySelector(".editProfileBtn"),document.querySelector(".addNewCardBtn"),document.querySelector(".page"),document.querySelector(".profile__avatar")),o=document.querySelector(".profile__heading"),c=document.querySelector(".profile__description"),a=document.querySelector(".editAvatarForm"),u=document.querySelector(".editProfileForm"),i=document.querySelector(".addNewCardForm"),l=document.querySelectorAll(".popup"),s=document.querySelector(".popup-avatar"),d=document.querySelector(".popup-edit"),f=document.querySelector(".popup-add-card"),p=document.querySelector(".popup__input_avatarURL"),m=document.querySelector(".popup__input_type_name"),v=document.querySelector(".popup__input_type_job"),y=document.querySelector(".popup__input_type_place"),h=document.querySelector(".popup__input_type_src"),_=document.querySelector(".card-template").content,S=document.querySelector(".elements"),b=document.querySelector(".popup-image"),q=document.querySelector(".popup__image"),g=document.querySelector(".popup__image-heading"),E={formSelector:".popup__input-form",inputSelector:".popup__input",submitButtonSelector:".save-button",inactiveButtonClass:"save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},L="Создать",C="Сохранить",k="Сохранение...",A="1a595976abb83992213a7e1b";function U(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function x(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w)}function w(e){"Escape"===e.key&&x(document.querySelector(".popup_opened"))}var T={baseUrl:"https://nomoreparties.co/v1/plus-cohort-24",headers:{authorization:"2d0751a7-a369-43d9-a9c9-33e8b2182ed9","Content-Type":"application/json"}};function j(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var B=function(e){return fetch("".concat(T.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:T.headers}).then((function(e){return j(e)}))},O=function(e){return fetch("".concat(T.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:T.headers}).then((function(e){return j(e)}))},P=function(e){return fetch("".concat(T.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:T.headers}).then((function(e){return j(e)}))};function D(e){e.classList.toggle("like-button_active")}function N(e,t){e.querySelector(".element__likes-couter").textContent=t.length}function M(e,t,n,r,o){var c=_.querySelector(".element").cloneNode(!0),a=c.querySelector(".element__image"),u=c.querySelector(".element__heading"),i=c.querySelector(".like-button"),l=c.querySelector(".delete-button");return a.src=e,a.alt=t,u.textContent=t,c.setAttribute("data-id","".concat(n)),function(e){return e.some((function(e){return e._id===A}))}(r)&&D(i),o!==A&&l.remove(),i.addEventListener("click",I),l.addEventListener("click",J),a.addEventListener("click",(function(){U(b),q.src=e,q.alt=t,g.textContent=t})),N(c,r),c}function F(e){S.prepend(e)}function I(e){var t=e.target.closest(".element");e.target.classList.contains("like-button_active")?P(t.dataset.id).then((function(n){D(e.target),N(t,n.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))})):O(t.dataset.id).then((function(n){D(e.target),N(t,n.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}function J(e){e.preventDefault();var t=e.target.closest(".element");B(t.dataset.id).then((function(){t.remove()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}function G(e,t){o.textContent=e,c.textContent=t}function H(e){r.src=e}function V(e,t,n,r){t.querySelector(".save-button").textContent=e?n:r}function z(e){var t=e;t.disabled=!0,t.classList.add(E.inactiveButtonClass)}function R(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):z(t)}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}l.forEach((function(e){e.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("close-button"))&&x(e)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);R(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),R(n,r,t)}))}))}(t,e)}))}(E),n.addEventListener("click",(function(){return U(s)})),e.addEventListener("click",(function(){U(d),m.value=o.textContent,v.value=c.textContent})),t.addEventListener("click",(function(){return U(f)})),Promise.all([fetch("".concat(T.baseUrl,"/users/me"),{method:"GET",headers:T.headers}).then((function(e){return j(e)})),fetch("".concat(T.baseUrl,"/cards"),{method:"GET",headers:T.headers}).then((function(e){return j(e)}))]).then((function(e){var t=$(e,2),n=t[0],r=t[1];G(n.name,n.about),H(n.avatar),r.reverse().forEach((function(e){F(M(e.link,e.name,e._id,e.likes,e.owner._id))}))})).catch((function(e){var t=$(e,2),n=t[0],r=t[1];console.log("Ошибка: ".concat(n)),console.log("Ошибка: ".concat(r))})),a.addEventListener("submit",(function(e){var t;e.preventDefault(),V(!0,a,k,C),(t=p.value,fetch("".concat(T.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:T.headers,body:JSON.stringify({avatar:t})}).then((function(e){return j(e)}))).then((function(e){H(e.avatar),x(s)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){V(!1,a,k,C)})),a.reset()})),u.addEventListener("submit",(function(e){var t,n;e.preventDefault(),V(!0,u,k,C),(t=m.value,n=v.value,fetch("".concat(T.baseUrl,"/users/me"),{method:"PATCH",headers:T.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return j(e)}))).then((function(e){G(e.name,e.about),x(d)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){V(!1,u,k,C)}))})),i.addEventListener("submit",(function(e){var t,n;e.preventDefault(),V(!0,i,k,L),(t=y.value,n=h.value,fetch("".concat(T.baseUrl,"/cards"),{method:"POST",headers:T.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return j(e)}))).then((function(e){F(M(e.link,e.name,e._id,e.likes,e.owner._id)),x(f)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){V(!1,i,k,L)})),i.reset()}))})();