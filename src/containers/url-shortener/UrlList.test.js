import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import UrlList from './UrlList';

describe('UrlForm component', () => {
  const urls = [
    {
      hash: 'f32fbn4',
      _id: '1',
      url: 'http://www.example.com/hello/mylink'
    }
  ];
  xit('should be rendered', () => {
    const wrapper = shallow(
      <UrlList title="List of Active short urls" urls={urls} />
    );

    expect(wrapper.exists()).to.be.equal(true);
  });

  xit('should have a li', () => {
    const wrapper = shallow(
      <UrlList title="List of Active short urls" urls={urls} />
    );

    expect(wrapper.find('li').length).to.be.equal(1);
  });
});
