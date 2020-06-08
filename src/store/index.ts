import {combineReducers} from 'redux';
import SearchFormReducer from './searchFormReducer';
import Dictionaries from './dictionaries';

export default combineReducers({
    searchForm: SearchFormReducer,
    dictionaries: Dictionaries
});