import {
  REQUEST_URLS,
  RECEIVE_URLS,
  CREATE_URL
} from './url-shortener-actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  urls: [],
  activeURL: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_URLS:
      return { ...state, isFetching: true };
    case RECEIVE_URLS:
      return { ...state, urls: action.payload, isFetching: false };
    case CREATE_URL:
      return state;
    default:
      return state;
  }
};
