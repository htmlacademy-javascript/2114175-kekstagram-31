// Функция для проверки длины строки с максимально допустимой длиной
const counterStringLength = (string, maxLength) => {
  if (string.lenght() <= maxLength) {
    return true;
  }

  return false;
};

// Функция для проверки, является ли строка палиндромом
const palindromeCheck = (string) => {
  const stringReplace = string.replaceAll(' ', '');
  const normalizeString = stringReplace.toUpperCase();
  let reverseString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    reverseString += normalizeString.at(i);
  }

  return normalizeString === reverseString;
};

// Функция принимает строку, извлекает цифры, возвращает их числом или NaN
const stringToNumber = (string) => {
  string = string.toString();
  let numbers = '';
  for (let i = 0; i <= string.length - 1; i++) {
    const char = string.at(i);
    const charInt = parseInt(char, 10);
    if (!Number.isNaN(charInt)) {
      numbers += char;
    }
  }
  return parseInt(numbers, 10);
};
