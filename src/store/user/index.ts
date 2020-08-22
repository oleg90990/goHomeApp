import { IAction } from '../types';
import { ICityItem, IUser, IStateUserResponse } from 'friendshome-api';
import {
  SET_USER,
  SET_TOKEN,
  LOGOUT
} from './types';

const INITIAL_STATE: IStateUserResponse = {
  access_token: '',
  user: {
    id: 0,
    name: '',
    email: '',
    mobile: '',
    vk: false,
    vkGroups: []
  }
};

export default (state = INITIAL_STATE, action: IAction<any>) => {
  switch (action.type) {
    case SET_USER:
        const user = action.payload;
        return { ...state, user};
    case SET_TOKEN:
        const access_token = action.payload;
        return { ...state, access_token};
    case LOGOUT:
        return {
            access_token: null,
            user: {
                id: 0,
                name: '',
                email: '',
                email_verified_at: null,
                created_at: '',
                updated_at: ''
            }
        };
    default:
      return state;
  }
};