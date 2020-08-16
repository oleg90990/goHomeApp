import { Dispatch } from 'redux';
import { SET_ALL } from './types';
import API from '../../api/apiDictionaries';

export const loadDictionaries = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await API.loadDictionaries();
      dispatch({ type: SET_ALL, payload: data });
    } catch (e) {
      throw e;
    }
  };
};