const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

export const getData = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(ErrorText.GET_DATA);
    }
    return response.json();
  });

export const sendData = (body) => fetch('https://31.javascript.htmlacademy.pro/kekstagram',{
  method: 'POST',
  body
}).then((response) => {
  if (!response.ok) {
    throw new Error(ErrorText.SEND_DATA);
  }
});
