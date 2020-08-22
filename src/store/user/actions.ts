import { Dispatch } from 'redux';
import { SET_USER, SET_TOKEN, LOGOUT } from './types';
import { userApi, vkApi } from '../../api';
import { IUserUpdateData } from 'friendshome-api';
import Auth from '../../utilites/auth';
import { VKLoginResult } from 'react-native-vkontakte-login';

export const login = (mobile: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data: { user, access_token } } = await userApi.login(mobile, password);
      await Auth.setToken(access_token);
      dispatch({type: SET_TOKEN, payload: access_token });
      dispatch({type: SET_USER, payload: user });
    }
    catch (e) {
      throw e;
    }
  };
};

export const register = (userData: IUserUpdateData) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data: { user, access_token } } = await userApi.register(userData);
      await Auth.setToken(access_token);
      dispatch({type: SET_TOKEN, payload: access_token });
      dispatch({type: SET_USER, payload: user });
    } catch (e) {
      throw e;
    }
  };
};

export const update = (userData: IUserUpdateData) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await userApi.update(userData);
      dispatch({type: SET_USER, payload: data });
    } catch (e) {
      throw e;
    }
  };
};

export const loadData = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await userApi.me();
      dispatch({type: SET_USER, payload: data });
    } catch (e) {
      await Auth.removeToken();
      throw e;
    }
  };
};

export const vkSave = (dataLoginResult: VKLoginResult) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await vkApi.save(dataLoginResult);
      dispatch({type: SET_USER, payload: data });
    } catch (e) {
      throw e;
    }
  };
};

export const vkGroups = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await vkApi.groups();
      return data;
    } catch (e) {
      throw e;
    }
  };
};

export const vkGroupsStore = (groups: number[]) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await vkApi.groupsStore(groups);
      dispatch({type: SET_USER, payload: data });
    } catch (e) {
      throw e;
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<any>) => {
    await Auth.removeToken();
    dispatch({ type: LOGOUT });
  };
};