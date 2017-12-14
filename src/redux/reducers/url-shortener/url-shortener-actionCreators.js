import axios from 'axios';
import {
  REQUEST_URLS,
  RECEIVE_URLS,
  CREATE_URL
} from './url-shortener-actionTypes';

const request = axios.create({
  baseURL: 'http://localhost:4000'
});

export function fetchURLS() {
  return dispatch => {
    dispatch(requestURLS());
    return request
      .get('/')
      .then(response => response.data)
      .then(urls => dispatch(receiveURLS(urls)));
  };
}

function requestURLS() {
  return {
    type: REQUEST_URLS
  };
}

function receiveURLS(urls) {
  return {
    type: RECEIVE_URLS,
    payload: urls
  };
}
