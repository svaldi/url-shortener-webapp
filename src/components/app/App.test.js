import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1 className="App-title">Welcome to React</h1>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
