import { Dispatch } from 'redux';
import { SET_AGES, SET_ANIMAL, SET_COLORS, SET_BREED } from './types';

import { IAgeWidgetvalue } from '../../components/widgets/AgeWidget';
import { Animal, Color } from '../../enum/Form';
import { IBreedItem } from '../../data/breeds';

export const setAnimal = (payload: Animal) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_ANIMAL, payload});
  };
};

export const setAges = (payload: IAgeWidgetvalue) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_AGES, payload});
  };
};

export const setColors = (payload: Color[]) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_COLORS, payload});
  };
};

export const setBreed = (payload: IBreedItem) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_BREED, payload});
  };
};