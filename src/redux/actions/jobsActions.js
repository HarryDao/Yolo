import Axios from 'axios';
import {
  FETCHING_JOBS,
  FETCH_JOBS,
  FETCH_JOB_FAIL,
} from '../constants';
const BASE_URL = 'https://search.bossjob.com/api/v1/search/job_filter?';

const createUrl = (query = '', page = null, size = 12) => {
  let url = `${BASE_URL}size=${size}&query=${query}`;
  url += page ? `&page=${page}` : '';

  return url;
}

export const fetchJobs = (query, page) => async dispatch => {
  try {
    dispatch({ type: FETCHING_JOBS });

    const { data: { data } } = await Axios.get(createUrl(query, page));
    const { total_num, total_pages, jobs } = data;

    dispatch({
      type: FETCH_JOBS,
      payload: {
        list: jobs,
        total: total_num,
        pages: total_pages
      }
    });
  }
  catch(err) {
    dispatch({
      type: FETCH_JOB_FAIL,
      payload: err
    });
  }
}



