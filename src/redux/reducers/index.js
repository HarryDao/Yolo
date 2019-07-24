import { combineReducers } from 'redux';
import search from './searchReducer';
import jobs from './jobsReducer';

export default combineReducers({
  search,
  jobs
});