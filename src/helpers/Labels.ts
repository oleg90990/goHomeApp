import { Gender, YesNo } from '../enum/Form';

export const getLabelSterilization = (gender: Gender | undefined) => {
  switch (gender) {
    case Gender.male:
        return 'Кастрация';
      break;
    case Gender.female:
        return 'Стирилизация';
      break;
  }
  return 'Стирилизация/Кастрация';
}

export const getLabelYesNo = (value: YesNo) => {
  switch (value) {
    case YesNo.yes:
        return 'Да';
      break;
    case YesNo.no:
        return 'Нет';
      break;
  }
  return 'Неизвестно';
}

export const getLabelAge = (age: number) => {
  age = age % 100;

  if (age >= 11 && age <= 19) {
    return 'лет';
  } else {
    const i = age % 10;
    switch (i) {
      case (1):
        return  'год';
      case (2):
      case (3):
      case (4):
        return 'года';
      default:
        return 'лет';
    }
  }
}

export const getLabelGender = (gender: Gender | undefined, animal: number) => {
    return 'Неизвестно';
}