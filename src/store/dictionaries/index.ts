import { SET_ALL } from './types';
import { IAction } from '../types';
import { Gender } from '../../enum/Form';

export interface IDictionaryItem {
    id: number,
    name: string,
    img: string
}

export interface IDictionaryColorItem {
    id: number,
    name: string,
    value: string
}

export interface IDictionaryAnimalType {
    breeds: IDictionaryItem[],
    id: number,
    name: string,
    img: string
    [Gender.male]: string,
    [Gender.female]: string,
    [Gender.none]: string,
}

export interface IStateDictionariesReducer {
    animals: IDictionaryAnimalType[],
    colors: IDictionaryColorItem[]
}

const INITIAL_STATE: IStateDictionariesReducer = {
    animals: [],
    colors: []
};

export default (state = INITIAL_STATE, action: IAction<IStateDictionariesReducer>) => {
  switch (action.type) {
    case SET_ALL:;
        const { animals, colors } = action.payload;

        return {
            ...state,
            animals,
            colors
        };
    default:
      return state;
  }
};