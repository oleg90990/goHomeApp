import { SET_ALL, SET_LOADING } from './types';
import { IAction } from '../types';

export interface IDictionaryItem {
    id: number,
    title: string,
    img?: string
}

export interface IBreedsType {
    cat: IDictionaryItem[],
    dog: IDictionaryItem[]
}

export interface IStatedictionaries {
    animals: IDictionaryItem[],
    breeds: IBreedsType
}

export interface IStateDictionariesReducer {
    loading: boolean,
    dictionaries: IStatedictionaries
}

const INITIAL_STATE: IStateDictionariesReducer = {
    loading: true,
    dictionaries: {
        animals: [],
        breeds: {
            cat: [],
            dog: []
        }
    }
};

export default (state = INITIAL_STATE, action: IAction<IStatedictionaries | boolean>) => {
  switch (action.type) {
    case SET_ALL:;
        const dictionaries = action.payload;
        return {
            ...state,
            dictionaries
        };
    case SET_LOADING:;
        const loading = action.payload;
        return {
            ...state,
            loading
        };
    default:
      return state;
  }
};