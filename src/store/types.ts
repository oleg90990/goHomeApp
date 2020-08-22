import {
  IStateSearchBody,
  IStateDictionaries,
  IStateUserResponse
} from 'friendshome-api';

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IState {
  searchForm: IStateSearchBody;
  dictionaries: IStateDictionaries;
  user: IStateUserResponse;
}