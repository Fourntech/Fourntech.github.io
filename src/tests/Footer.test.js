import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Footer from '../pages/Footer';

test('test Footer - renders', () => {
    const textSting = "This website is under construction."
    const wrapper = mount(
        <Footer />
    );
    const text = wrapper.text()
    expect(text).toBe(textSting)
});

test('snapshot Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});