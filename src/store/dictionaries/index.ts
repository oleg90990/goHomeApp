import {
  IDictionaryAnimalType,
  IDictionaryColorItem,
  IDictionaryItem,
  Gender,
  IStateDictionaries
} from 'friendshome-api';

import { SET_ALL } from './types';
import { IAction } from '../types';

const INITIAL_STATE: IStateDictionaries = {
    animals: [],
    colors: []
};

export default (state = INITIAL_STATE, action: IAction<IStateDictionaries>) => {
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