import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import * as types from '../../reducers/url-shortener/url-shortener-actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('URL Shortener Action Creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  xit('RECEIVE_URLS when fetching urls has been done', () => {
    fetchMock.getOnce('/', { body: { urls: ['do something'] } });

    const expectedActions = [
      { type: types.REQUEST_URLS },
      { type: types.RECEIVE_URLS, body: { urls: ['do something'] } }
    ];
    const store = mockStore({ urls: [] });

    return store.dispatch(actions.fetchURLS()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
