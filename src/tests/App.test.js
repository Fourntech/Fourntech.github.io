import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('snapshot App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});