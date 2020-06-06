// TODO: We should move typedAction elsewhere since it's shared
import { SearchFormState, SearchFormTypes } from './types';
import { typedAction } from '../types';
import { Dispatch, AnyAction } from 'redux';

export const initialState: SearchFormState = {
  test: '',
};

export const addText = (test: string) => {
  return typedAction(SearchFormTypes.SET, test);
};

// Action creator returning a thunk!
export const loadProducts = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    setTimeout(() => {
      dispatch(
        addText('555')
      );
    }, 500);
  };
};