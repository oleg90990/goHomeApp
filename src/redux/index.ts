import { searchFormReducer } from './search/actions';
import { combineReducers } from 'redux';
// import { userReducer } from './modules/user';
export const rootReducer = combineReducers({
  searchForm: searchFormReducer,
});
export type RootState = ReturnType<typeof rootReducer>;