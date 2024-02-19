// Функция для проверки длины строки с максимально допустимой длиной
let counterStringLength = (string, maxLength) => {
  if (string.lenght() <= maxLength) {
    return true;
  }

  return false;
}

// Функция для проверки, является ли строка палиндромом
let palindromeCheck = (string) => {
  let stringReplace = string.replaceAll(' ', '');
  let normalizeString = stringReplace.toUpperCase();
  let reverseString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    reverseString += normalizeString.at(i);
  }

  return normalizeString === reverseString;
}

// Функция принимает строку, извлекает цифры, возвращает их числом или NaN
let stringToNumber = (string) => {
  string = string.toString();
  let numbers = '';
  for (let i = 0; i <= string.length - 1; i++) {
    let char = string.at(i);
    let charInt = parseInt(char, 10);
    if (!Number.isNaN(charInt)) {
      numbers += char;
    }
  }
  return parseInt(numbers, 10);
}
