import { SearchFormState, SearchFormTypes } from './types';
import { addText, initialState } from './index';

type SearchFormAction = ReturnType<typeof addText>;

export function searchFormReducer(
    state = initialState,
    action: SearchFormAction
): SearchFormState {
    switch (action.type) {
        case SearchFormTypes.SET:
            return {
                ...state,
                test: action.payload,
            };
            default:
                return state;
    }
}