import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';
import UrlForm from './UrlForm';

describe('UrlForm component', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<UrlForm />);

    expect(wrapper.exists()).to.be.equal(true);
  });

  xit('should have a form', () => {
    const wrapper = shallow(<UrlForm handleSubmit={() => {}} />);

    expect(wrapper.contains(Field)).to.be.equal(true);
  });
});
