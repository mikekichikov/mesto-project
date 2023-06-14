export function handleSubmit(request, evt, popup, loadingText = "Сохранение...") {
  evt.preventDefault();
  const submitBtn = evt.submitter;
  const initialText = submitBtn.textContent;
  renderSubmitBtn(true, submitBtn, initialText, loadingText);
  request()
    .then(() => {
      popup.close();
      evt.target.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderSubmitBtn(false, submitBtn, initialText);
    });
};

function renderSubmitBtn(isLoading, button, buttonText = 'Сохранить', loadingText = 'Сохранение...') {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}