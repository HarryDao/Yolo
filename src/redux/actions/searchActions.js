import {
  SET_SEARCH_QUERY,
  SET_SEARCH_PAGE
} from '../constants';

export const setQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

export const setPage = (page) => ({
  type: SET_SEARCH_PAGE,
  payload: page
});