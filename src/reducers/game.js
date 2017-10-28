const fullLife = 100;
const gameReducerDefaultState = {
  over: false,
  players: [
    {
      id: 1,
      name: 'Jogador 1',
      life: fullLife
    },
    {
      id: 2,
      name: 'Jogador 2',
      life: fullLife
    }
  ]
};

// Game Reducer
const gameReducer = (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'ATACK':
      let life;
      return {
        players: state.players.map((player) => {
          if (player.id !== action.playerId) {
            life = player.life - action.damage;
            return {
              ...player,
              life
            };
          }
          
          return player;
        }),
        over: life === 0 ? true : false
      }
      
    case 'RESET_GAME':
      return gameReducerDefaultState;
    default:
      return state;
  }
};

export default gameReducer;
