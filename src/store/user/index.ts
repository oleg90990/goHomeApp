import { SET_USER, LOGOUT } from './types';
import { IAction } from '../types';

export interface IStateUserReducer {
    id: number,
    username: string,
    phone: string,
    jwt: string
}

const INITIAL_STATE: IStateUserReducer = {
    id: 0,
    username: '',
    phone: '',
    jwt: ''
};

export default (state = INITIAL_STATE, action: IAction<any>) => {
  switch (action.type) {
    case SET_USER:
        return action.payload;
    case LOGOUT:
        return {
            id: 0,
            username: '',
            phone: '',
            jwt: ''
        };
    default:
      return state;
  }
};