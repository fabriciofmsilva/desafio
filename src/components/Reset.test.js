import React from 'react';
import { shallow } from 'enzyme';

import { Reset } from './Reset';

let wrapper;
let reset;

beforeEach(() => {
  reset = jest.fn();
  wrapper = shallow(<Reset reset={reset} />);
});

test('should render Reset correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(reset).toHaveBeenCalled();
});
