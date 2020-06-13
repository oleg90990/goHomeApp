import { combineReducers, createStore } from 'redux';
import searchForm from './searchForm';
import dictionaries from './dictionaries';
import user from './user';

const rootReducer = combineReducers({
    searchForm,
    dictionaries,
    user
});

export const store = createStore(rootReducer);

export default rootReducer;