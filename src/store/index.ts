import { combineReducers, createStore } from 'redux';
import searchForm from './searchForm';
import dictionaries from './dictionaries';
import user from './user';

export default combineReducers({
  searchForm,
  dictionaries,
  user
});