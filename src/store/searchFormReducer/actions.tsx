import * as Redux from 'redux';
import { SET_AGES, SET_ANIMAL, SET_COLORS } from './types';

import { IAgeWidgetvalue } from '../../components/widgets/AgeWidget';
import { Animal, Color } from '../../enum/Form';

export const setAnimal = (payload: Animal) => {
  return (dispatch: Redux.Dispatch<any>) => {
    dispatch({type: SET_ANIMAL, payload});
  };
};

export const setAges = (payload: IAgeWidgetvalue) => {
  return (dispatch: Redux.Dispatch<any>) => {
    dispatch({type: SET_AGES, payload});
  };
};

export const setColors = (payload: Color[]) => {
  return (dispatch: Redux.Dispatch<any>) => {
    dispatch({type: SET_COLORS, payload});
  };
};