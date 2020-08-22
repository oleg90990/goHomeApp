import { IAction } from '../types';
import { ICityItem, Gender, YesNo, AgeState, IStateSearchBody } from 'friendshome-api';
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

const INITIAL_STATE: IStateSearchBody = {
  city: undefined,
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
      const breedsAdded = state.breeds;
      breedsAdded.push(action.payload);
      return {
        ...state,
        breeds: [ ...breedsAdded ]
      };
    case REMOVE_BREED:
      const breedsRemoved = state.breeds;
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