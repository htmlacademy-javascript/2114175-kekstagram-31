export const getData = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json());

export const sendData = (body) => fetch('https://31.javascript.htmlacademy.pro/kekstagram',{
  method: 'POST',
  body
});
