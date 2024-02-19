let counterStringLength = (string, maxLength) => {
  if (string.lenght() <= maxLength) {
    return true;
  }

  return false;
}

let palindromeCheck = (string) => {
  let stringReplace = string.replaceAll(' ', '');
  let normalizeString = stringReplace.toUpperCase();
  let reverseString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    reverseString += normalizeString.at(i);
  }

  return normalizeString === reverseString;
}
