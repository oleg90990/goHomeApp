import { Dispatch } from 'redux';
import { SET_AGES, SET_ANIMAL, SET_COLORS, ADD_BREED, REMOVE_BREED, SET_GENDER, SET_STERILIZATION } from './types';
import { AgeState} from './index';
import { Gender, YesNo } from '../../enum/Form';

export const setAnimal = (payload: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_ANIMAL, payload});
  };
};

export const setAges = (payload: AgeState) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_AGES, payload});
  };
};

export const setColors = (payload: number[]) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_COLORS, payload});
  };
};

export const setGender = (payload: Gender) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_GENDER, payload});
  };
};

export const setSterilization = (payload: YesNo) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: SET_STERILIZATION, payload});
  };
};

export const addBreed = (payload: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: ADD_BREED, payload});
  };
};

export const removeBreed = (payload: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({type: REMOVE_BREED, payload});
  };
};