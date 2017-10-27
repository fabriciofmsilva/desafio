const damage = 20;

// ATACK
export const atack = (playerId) => ({
  type: 'ATACK',
  playerId,
  damage
});

// RESET_GAME
export const reset = () => ({
  type: 'RESET_GAME'
});
