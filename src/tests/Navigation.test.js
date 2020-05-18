import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Navigation from '../pages/Navigation';

test('snapshot Navigation', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
});