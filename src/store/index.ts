import {combineReducers} from 'redux';
import SearchFormReducer from './searchFormReducer';

export default combineReducers({
    searchForm: SearchFormReducer
});