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
      const url = { _id: action.payload.hash, ...action.payload }; // temporal fix for missing _id
      return {
        ...state,
        urls: [url, ...state.urls],
        activeURL: action.payload
      };
    default:
      return state;
  }
};
