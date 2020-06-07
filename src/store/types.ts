import { IStateSearchFormReducer } from './searchFormReducer';

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IState {
  searchForm: IStateSearchFormReducer;
}