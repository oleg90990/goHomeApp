import { Gender, YesNo } from '../enum/Form';

export const getLabelSterilization = (gender: Gender | undefined) => {
  switch (gender) {
    case Gender.male:
      return 'Кастрация';
    case Gender.female:
      return 'Стирилизация';
  }
  return 'Стирилизация/Кастрация';
}

export const getLabelYesNo = (value: YesNo) => {
  switch (value) {
    case YesNo.yes:
      return 'Да';
    case YesNo.no:
      return 'Нет';
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
      case (4):
        return 'года';
    }
  }

  return 'лет';
}

export const getLabelGender = (gender: Gender | undefined, animal: number) => {
    return 'Неизвестно';
}