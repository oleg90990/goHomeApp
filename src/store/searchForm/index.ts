import {
  SET_AGES,
  SET_ANIMAL,
  SET_COLORS,
  ADD_BREED,
  REMOVE_BREED,
  SET_GENDER,
  SET_STERILIZATION,
  SET_CITY
} from './types';
import { IAction } from '../types';
import { Gender, YesNo } from '../../enum/Form';
import { ICityItem } from '../../api/apiDictionaries';

export interface AgeState {
  from: number
  to: number
}

export interface IStateSearchFormReducer {
  animal?: number;
  ages: AgeState;
  colors: number[];
  breeds: number[];
  gender: Gender,
  sterilization: YesNo,
  city?: ICityItem
}

const INITIAL_STATE: IStateSearchFormReducer = {
  animal: undefined,
  ages: {
    from: 0,
    to: 5
  },
  colors: [],
  breeds: [],
  gender: Gender.none,
  sterilization: YesNo.none
};

export default (state = INITIAL_STATE, action: IAction<any>) => {
  switch (action.type) {
    case SET_CITY:
      const city = action.payload;
      return {
        ...state,
        city
      };
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
    case SET_GENDER:
      const gender = action.payload;
      return {
        ...state,
        gender
      };
    case SET_STERILIZATION:
      const sterilization = action.payload;
      return {
        ...state,
        sterilization
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