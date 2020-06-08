import { SET_ALL, SET_LOADING } from './types';
import { IAction } from '../types';

export interface IDictionaryItem {
    id: number,
    title: string,
    img: string
}

export interface IDictionaryColorItem {
    id: number,
    title: string,
    value: string
}

export interface IDictionaryAnimalType extends IDictionaryItem {
    breeds: IDictionaryItem[]
}

export interface IStateDictionaries {
    animals: IDictionaryAnimalType[],
    colors: IDictionaryColorItem[]
}

export interface IStateDictionariesReducer {
    loading: boolean,
    dictionaries: IStateDictionaries
}

const INITIAL_STATE: IStateDictionariesReducer = {
    loading: true,
    dictionaries: {
        animals: [],
        colors: []
    }
};

export default (state = INITIAL_STATE, action: IAction<IStateDictionaries | boolean>) => {
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