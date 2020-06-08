import { Dispatch } from 'redux';
import { SET_ALL, SET_LOADING } from './types';
import API from '../../api';

export const loadDictionaries = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: SET_LOADING, payload: true });
    API.loadDictionaries()
        .then(payload => {
           dispatch({ type: SET_ALL, payload });
           dispatch({ type: SET_LOADING, payload: false });
        });
  };
};

export const setLoading = (loading: boolean) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: SET_LOADING, loading });
    };
};