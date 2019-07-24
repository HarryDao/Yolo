import {
  SET_SEARCH_QUERY,
  SET_SEARCH_PAGE
} from '../constants';

const INITIAL_STATE = {
  query: '',
  page: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_QUERY:
      if (state.query !== action.payload) {
        return {
          query: action.payload,
          page: 1,
        };
      }
      return state;
    case SET_SEARCH_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}