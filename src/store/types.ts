import { IStateSearchFormReducer } from './searchFormReducer';
import { IStateDictionariesReducer } from './dictionaries';

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IState {
  searchForm: IStateSearchFormReducer;
  dictionaries: IStateDictionariesReducer;
}