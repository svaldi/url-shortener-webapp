import React from 'react';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { expect } from 'chai';
import UrlShortener from './UrlShortener';
import UrlForm from './UrlForm';
import UrlList from './UrlList';

describe('UrlShortener component', () => {
  const props = {
    fetchURLS: jest.fn()
  };
  const initialState = {
    form: formReducer,
    ui: {
      isFetching: false,
      urls: [],
      activeURL: null,
      error: null
    }
  };
  const middlewares = [thunk];
  const mockStore = configureMockStore();
  const store = mockStore(initialState);

  xit('should be rendered', () => {
    const wrapper = mount(
      <Provider store={store}>
        <UrlShortener title="Generate a short url" {...props} />
      </Provider>
    );

    expect(wrapper.find(UrlShortener).length).to.equal(1);
  });

  xit('should be rendered in loading mode', () => {
    const props = {
      isFetching: true,
      urls: [],
      activeURL: null,
      error: null
    };
    const loading = <h2>Loading...</h2>;
    const wrapper = mount(
      <Provider store={store}>
        <UrlShortener title="Generate a short url" {...props} />
      </Provider>
    );

    expect(wrapper.contains(loading)).toEqual(true);
  });

  xit('should be rendered in loading mode', () => {
    const props = {
      isFetching: false,
      urls: ['item'],
      activeURL: null,
      error: null
    };
    const wrapper = mount(
      <Provider store={store}>
        <UrlShortener title="Generate a short url" {...props} />
      </Provider>
    );

    expect(wrapper.find(UrlForm).length).to.equal(1);
    expect(wrapper.find(UrlList).length).to.equal(1);
  });
});
