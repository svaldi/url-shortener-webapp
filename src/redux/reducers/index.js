import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import urlSortenerReducer from './url-shortener/url-shortener-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  ui: urlSortenerReducer
});

export default rootReducer;
