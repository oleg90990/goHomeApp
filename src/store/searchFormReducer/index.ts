import { SET_AGES, SET_ANIMAL, SET_COLORS, SET_BREED } from './types';
import { IAction } from '../types';

import { Animal, Color } from '../../enum/Form';
import { IAgeWidgetvalue } from '../../components/widgets/AgeWidget';
import { IBreedItem } from '../../data/breeds';

export interface IStateSearchFormReducer {
  animal: Animal,
  ages: IAgeWidgetvalue,
  colors: Color[],
  breed?: IBreedItem
}

const INITIAL_STATE = {
    animal: Animal.dog,
    ages: {
      from: 0,
      to: 4
    },
    colors: [],
    breed: undefined
};

export default (state = INITIAL_STATE, action: IAction<IAgeWidgetvalue | Animal | Color[] | IBreedItem>) => {
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
    case SET_BREED:
      const breed = action.payload;
      return {
        ...state,
        breed
      };
    default:
      return state;
  }
};