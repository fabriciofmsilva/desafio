import { atack, reset } from './game';

test('should setup atack action object', () => {
  const playerId = 1;

  const action = atack(playerId);

  expect(action).toEqual({
    type: 'ATACK',
    playerId,
    damage: 20
  })
});

test('should setup reset action object', () => {
  const action = reset();

  expect(action).toEqual({
    type: 'RESET_GAME'
  })
});
