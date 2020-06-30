import { SET_USER, SET_TOKEN, LOGOUT } from './types';
import { IAction } from '../types';
import { ICityItem } from '../../api/apiDictionaries';

export interface IUser {
    id: number,
    name: string,
    email: string,
    city?: ICityItem,
    mobile: string,
    vk: boolean,
    vkGroups: number[]
}

export interface IStateUserReducer {
    access_token: string,
    user: IUser
}

const INITIAL_STATE: IStateUserReducer = {
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