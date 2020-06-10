import Auth from '../../utilites/auth';
import { Dispatch } from 'redux';
import { SET_USER, LOGOUT } from './types';
import { IStateUserReducer } from './index';
import API from '../../api';

export const setUser = (payload: IStateUserReducer) => {
  return async (dispatch: Dispatch<any>) => {
    await Auth.setJwt(payload.jwt);
    dispatch({type: SET_USER, payload });
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<any>) => {
    await Auth.removeJwt();
    dispatch({ type: LOGOUT });
  };
};