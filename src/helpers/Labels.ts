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

export const getLabelGender = (gender: Gender | undefined, animal: number) => {
    return 'Неизвестно';
}