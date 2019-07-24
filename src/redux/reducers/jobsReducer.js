import {
  FETCHING_JOBS,
  FETCH_JOBS,
  FETCH_JOB_FAIL,
} from '../constants';

const INITIAL_STATE = {
  loading: false,
  error: null,
  list: [],
  total: 0,
  pages: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCHING_JOBS:
      return {
        ...state,
        error: null,
        loading: true
      };
    case FETCH_JOBS:
      return {
        loading: false,
        error: null,
        ...action.payload
      };
    case FETCH_JOB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}