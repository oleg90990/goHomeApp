import { SET_ALL } from './types';
import { IAction } from '../types';
import { Gender } from '../../enum/Form';

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
    breeds: IDictionaryItem[],
    genders: {
        [Gender.male]: string,
        [Gender.female]: string,
        [Gender.none]: string,
    }
}

export interface IStateDictionaries {
    animals: IDictionaryAnimalType[],
    colors: IDictionaryColorItem[]
}

export interface IStateDictionariesReducer {
    dictionaries: IStateDictionaries
}

const INITIAL_STATE: IStateDictionariesReducer = {
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
    default:
      return state;
  }
};