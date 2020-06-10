import { IStateSearchFormReducer } from './searchForm';
import { IStateDictionariesReducer } from './dictionaries';
import { IStateUserReducer } from './user';

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IState {
  searchForm: IStateSearchFormReducer;
  dictionaries: IStateDictionariesReducer;
  user: IStateUserReducer
}