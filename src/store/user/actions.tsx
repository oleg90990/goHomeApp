import { Dispatch } from 'redux';
import { SET_USER, SET_TOKEN, LOGOUT } from './types';
import API from '../../api/apiUser';
import Auth from '../../utilites/auth';

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data: { user, access_token } } = await API.login(email, password);
      await Auth.setUser(user);
      await Auth.setToken(access_token);
      dispatch({type: SET_TOKEN, payload: access_token });
      dispatch({type: SET_USER, payload: user });
    }
    catch (e) {
      throw e;
    }
  };
};

export const register = (email: string, name: string, password: string, c_password: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data: { user, access_token } } = await API.register(
        email, name, password, c_password
      );

      await Auth.setUser(user);
      await Auth.setToken(access_token);
      dispatch({type: SET_TOKEN, payload: access_token });
      dispatch({type: SET_USER, payload: user });
    }
    catch (e) {
      throw e;
    }
  };
};


export const update = (email: string, name: string, password?: string, c_password?: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await API.update(email, name, password, c_password);
      await Auth.setUser(data);
      dispatch({type: SET_USER, payload: data });
    }
    catch (e) {
      throw e;
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<any>) => {
    await Auth.removeToken();
    await Auth.removeUser();
    dispatch({ type: LOGOUT });
  };
};

export const loadUserFromStorage = () => {
  return async (dispatch: Dispatch<any>) => {
    const user = await Auth.getUser();
    const access_token = await Auth.getToken();
    if (user && access_token) {
      dispatch({type: SET_TOKEN, payload: access_token });
      dispatch({type: SET_USER, payload: user });
    }
  };
};