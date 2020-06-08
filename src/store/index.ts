import {combineReducers} from 'redux';
import searchForm from './searchForm';
import dictionaries from './dictionaries';

export default combineReducers({
    searchForm,
    dictionaries
});