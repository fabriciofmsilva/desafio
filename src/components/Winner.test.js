import React from 'react';
import { shallow } from 'enzyme';

import { Winner } from './Winner';
import gameDefaultState from '../test/fixtures/game';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Winner players={gameDefaultState.players} gameover={false} />);
});

test('should render Winner correctly when gameover is false', () => {

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('Jogador 1')).toEqual(true);
});

test('should render Winner correctly when gameover is true', () => {
  wrapper.setProps({ gameover: true });

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('Jogador 1')).toEqual(true);
});

test('should render Winner correctly', () => {
  wrapper.setProps({ players: [
    {
      id: 1,
      name: 'Jogador 1',
      life: 0
    },
    {
      id: 2,
      name: 'Jogador 2',
      life: 100
    }
  ]});

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('Jogador 2')).toEqual(true);
});
