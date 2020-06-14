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
  const endings: string[] = ['год', 'года', 'лет'];
  let ending: string = '';

  age = age % 100;

  if (age >= 11 && age <= 19) {
    ending = endings[2];
  }
  else {
      const i = age % 10;
      switch (i) {
          case (1):
            ending =  endings[0];
            break;
          case (2):
          case (3):
          case (4):
            ending =  endings[1];
            break;
          default:
            ending = endings[2];
      }
  }

  return ending;
}

export const getLabelGender = (gender: Gender | undefined, animal: number) => {
    return 'Неизвестно';
}