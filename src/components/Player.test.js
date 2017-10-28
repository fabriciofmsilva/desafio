import React from 'react';
import { shallow } from 'enzyme';

import { Player } from './Player';
import gameDefaultState from '../test/fixtures/game';

let wrapper;
let atack;

beforeEach(() => {
  atack = jest.fn();
  wrapper = shallow(<Player player={gameDefaultState.players[0]} />);
});

test('should render Player correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle onClick', () => {
//   wrapper.find('button').simulate('click');
//   // console.log(wrapper.props());
//   expect(atack).toHaveBeenCalled();
// });
