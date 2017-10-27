import React from 'react';
import { connect } from 'react-redux';

import { atack } from '../actions/game';

export class Player extends React.Component {

  atack = () => {
    this.props.atack(this.props.player.id);
  };

  render() {
    return (
      <div>
        <h2>Jogador {this.props.player.id}</h2>
        <p>{this.props.player.life}</p>
        <button
          disabled={this.props.gameover}
          onClick={this.atack}
        >
          Atacar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  player: state.game.players[props.player.id - 1],
  gameover: state.game.over
});

const mapDispatchToProps = (dispatch, props) => ({
  atack: (playerId) => {dispatch(atack(playerId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
