import gameReducer from './game';
import gameDefaultState from '../test/fixtures/game';

test('should set default state', () => {
  const state = gameReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(gameDefaultState);
});

test('should reduce by 80 life of player 2 when player 1 atack', () => {
  const playerId = 1;
  const action = {
    type: 'ATACK',
    playerId,
    damage: 20
  };

  const state = gameReducer(gameDefaultState, action);

  expect(state.players[1].life).toBe(80);
  expect(state.players[0].life).toBe(100);
});

test('should reduce by 60 life of player 2 when player 1 atack two times', () => {
  const playerId = 1;
  const action = {
    type: 'ATACK',
    playerId,
    damage: 20
  };

  let state = gameReducer(gameDefaultState, action);
  state = gameReducer(state, action);

  expect(state.players[1].life).toBe(60);
  expect(state.players[0].life).toBe(100);
});

test('should reduce by 80 life of player 1 when player 2 atack', () => {
  const playerId = 2;
  const action = {
    type: 'ATACK',
    playerId,
    damage: 20
  };

  const state = gameReducer(gameDefaultState, action);

  expect(state.players[0].life).toBe(80);
  expect(state.players[1].life).toBe(100);
});

test('should change over property to false when one player life was reduced to 0', () => {
  const playerId = 1;
  const action = {
    type: 'ATACK',
    playerId,
    damage: 20
  };

  let state = gameReducer(gameDefaultState, action);
  expect(state.over).toBeFalsy();
  state = gameReducer(state, action);
  expect(state.over).toBeFalsy();
  state = gameReducer(state, action);
  expect(state.over).toBeFalsy();
  state = gameReducer(state, action);
  expect(state.over).toBeFalsy();
  state = gameReducer(state, action);
  expect(state.over).toBeTruthy();
});

test('should back state to default when reset game', () => {
  const playerId = 1;
  const actionAtack = {
    type: 'ATACK',
    playerId,
    damage: 20
  };

  let state = gameReducer(gameDefaultState, actionAtack);
  const actionReset = {
    type: 'RESET_GAME',
  };
  state = gameReducer(state, actionReset);
  expect(state).toEqual(gameDefaultState);
});
