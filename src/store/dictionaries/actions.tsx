import { Dispatch } from 'redux';
import { SET_ALL, SET_LOADING } from './types';
import API from '../../api/apiDictionaries';

export const loadDictionaries = () => {
  return (dispatch: Dispatch<any>) => {
    API.loadDictionaries()
      .then(payload => {
        dispatch({ type: SET_ALL, payload });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
};

export const setLoading = (payload: boolean) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: SET_LOADING, payload });
  };
};