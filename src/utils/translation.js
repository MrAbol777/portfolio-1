import faTranslations from '../translations/fa';

const translations = {
  fa: faTranslations
};

export const t = (key, lang = 'fa') => {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (let i = 0; i < keys.length; i++) {
    if (value && value[keys[i]]) {
      value = value[keys[i]];
    } else {
      return key; // Return the key if translation not found
    }
  }
  
  return value;
};

export const convertToPersianDigits = (number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};