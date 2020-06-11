import Auth from '../../utilites/auth';
import { Dispatch } from 'redux';
import { SET_USER, LOGOUT } from './types';
import API from '../../api/apiUser';

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const payload = await API.login(username, password);
      await Auth.setJwt(payload.jwt);
      await Auth.setUser(payload);
      dispatch({type: SET_USER, payload });
    }
    catch (e) {
      throw e;
    }
  };
};

export const saveUserData = (phone: string, newPassword?: string, replyPassword?: string ) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const payload = await API.saveUserData(phone, newPassword, replyPassword)
      await Auth.setJwt(payload.jwt);
      await Auth.setUser(payload);
      dispatch({type: SET_USER, payload });
    }
    catch (e) {
      throw e;
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<any>) => {
    await Auth.removeJwt();
    await Auth.removeUser();
    dispatch({ type: LOGOUT });
  };
};

export const loadUserFromStorage = () => {
  return async (dispatch: Dispatch<any>) => {
    const payload = await Auth.getUser();

    if (payload) {
      dispatch({type: SET_USER, payload });
    }
  };
};