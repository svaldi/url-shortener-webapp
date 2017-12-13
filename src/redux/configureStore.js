import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

let store;
let middlewares = [ReduxThunk];
let enhancers = [
  window.devToolsExtension ? window.devToolsExtension() : f => f
];

export default function configureStore(initialState) {
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    const enhancer = compose(applyMiddleware(...middlewares), ...enhancers);
    store = createStore(rootReducer, initialState, enhancer);
  } else {
    const enhancer = applyMiddleware(...middlewares);
    store = createStore(rootReducer, initialState, enhancer);
  }
  return store;
}
