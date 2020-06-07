import { SET_AGES, SET_ANIMAL, SET_COLORS } from './types';
import { IAction } from '../types';

import { Animal, Color } from '../../enum/Form';
import { IAgeWidgetvalue } from '../../components/widgets/AgeWidget';

export interface IStateSearchFormReducer {
  animal: Animal,
  ages: IAgeWidgetvalue,
  colors: Color[]
}

const INITIAL_STATE = {
    animal: Animal.dog,
    ages: {
      from: 0,
      to: 4
    },
    colors: []
};

export default (state = INITIAL_STATE, action: IAction<IAgeWidgetvalue | Animal | Color[]>) => {
  switch (action.type) {
    case SET_AGES:
      const ages = action.payload;
    
      return {
        ...state,
        ages
      };
    case SET_ANIMAL:
      const animal = action.payload;
    
      return {
        ...state,
        animal
      };
    case SET_COLORS:
      const colors = action.payload;
    
      return {
        ...state,
        colors
      };
    default:
      return state;
  }
};