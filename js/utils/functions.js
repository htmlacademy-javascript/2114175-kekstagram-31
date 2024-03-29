// Функция для проверки длины строки с максимально допустимой длиной
const counterStringLength = (string = '', maxLength = 1) => (string.lenght <= maxLength);

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

counterStringLength('123', 3);
palindromeCheck('поп');

// Делу — время
// тут использую тренировочную функцию которая писали до этого
const timeCheck = (workStartTime, workEndTime, meetStartTime, meetDuration) => {
  workStartTime = workStartTime.split(':');
  workEndTime = workEndTime.split(':');
  meetStartTime = meetStartTime.split(':');
  const workStartHour = stringToNumber(workStartTime[0]);
  const workStartMinute = stringToNumber(workStartTime[1]);
  const workEndTimeHour = stringToNumber(workEndTime[0]);
  const workEndTimeMinute = stringToNumber(workEndTime[1]);
  const meetStartHour = stringToNumber(meetStartTime[0]);
  const meetStartMinute = stringToNumber(meetStartTime[1]);
  const meetDurationHour = Math.floor(meetDuration / 60);
  const meetDurationMinute = meetDuration - (meetDurationHour * 60);

  // проверка на время до раб.времени
  if (meetStartHour < workStartHour) {
    return false;
  } else if (meetStartHour === workStartHour && meetStartMinute < workStartMinute) {
    return false;
  }
  // проверка на окончание раб.времени
  if (meetStartHour > workEndTimeHour) {
    return false;
  } else if (meetStartHour === workEndTimeHour && meetStartMinute > workEndTimeMinute) {
    return false;
  }
  //проверка на окончание митинга
  let meetEndHour = meetDurationHour + meetStartHour;
  let meetEndMinute = meetDurationMinute + meetStartMinute;
  // переводим митинг в часы и минуты
  if (meetEndMinute >= 60) {
    const hours = Math.floor(meetEndMinute / 60);
    meetEndMinute = meetEndMinute - (hours * 60);
    meetEndHour += hours;
  }
  //  проверка оканчания митинга и конца рабочего времени
  if (meetEndHour > workEndTimeHour) {
    return false;
  } else if (meetEndHour === workEndTimeHour && meetEndMinute > workEndTimeMinute) {
    return false;
  }

  return true;
};

timeCheck('08:00', '17:30', '14:00', 90);
