import { SET_AGES, SET_ANIMAL, SET_COLORS, ADD_BREED, REMOVE_BREED } from './types';
import { IAction } from '../types';

export interface AgeState {
  from: number
  to: number
}

export interface IStateSearchFormReducer {
  animal?: number;
  ages: AgeState;
  colors: number[];
  breeds: number[];
}

const INITIAL_STATE: IStateSearchFormReducer = {
  animal: undefined,
  ages: {
    from: 0,
    to: 5
  },
  colors: [],
  breeds: []
};

export default (state = INITIAL_STATE, action: IAction<any>) => {
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
        animal,
        breeds: []
      };
    case SET_COLORS:
      const colors = action.payload;
      return {
        ...state,
        colors
      };
    case ADD_BREED:
      let breedsAdded = state.breeds;
      breedsAdded.push(action.payload);
      return {
        ...state,
        breeds: [ ...breedsAdded ]
      };
    case REMOVE_BREED:
      let breedsRemoved = state.breeds;
      const index = breedsRemoved.indexOf(action.payload);
      breedsRemoved.splice(index, 1)
      return {
        ...state,
        breeds: [ ...breedsRemoved ]
      };
    default:
      return state;
  }
};