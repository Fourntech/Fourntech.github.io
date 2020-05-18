import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from '../pages/AboutUs';

test('snapshot AboutUs', () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
});