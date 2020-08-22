import { Dispatch } from 'redux';
import { SET_ALL } from './types';
import { dictionariesApi } from '../../api';

export const loadDictionaries = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await dictionariesApi.loadDictionaries();
      dispatch({ type: SET_ALL, payload: data });
    } catch (e) {
      throw e;
    }
  };
};