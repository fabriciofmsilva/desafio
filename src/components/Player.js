import React from 'react';
import { connect } from 'react-redux';

import { atack } from '../actions/game';

import './Player.css';

export class Player extends React.Component {
  state = {
    state: 'walk'
  };

  getPlayerState = () => {
    if (this.props.player.life === 0) {
      return 'dead';
    }

    return this.props.player.id === 1 ? this.state.state + '-right' : this.state.state + '-left';
  }

  getLifeColor = (life) => {
    return life < 60 ? (life < 40 ? "danger" : "warning") : "";
  };

  atack = () => {
    this.setState((prevState, props) => {
      return {
        state: 'atack'
      };
    });

    setTimeout(() => {
      this.props.atack(this.props.player.id);
      this.setState((prevState, props) => {
        return {
          state: 'walk'
        };
      });
    }, 800);
  };

  render() {
    return (
      <div className="Player">
        <h2 className="Player-title">
          Jogador {this.props.player.id}
        </h2>
        <div className={`Player-life ${this.getLifeColor(this.props.player.life)}`}
          style={{ width: `${this.props.player.life}%` }}
        >
          {this.props.player.life}%
        </div>
        <button
          className="button button-danger"
          disabled={this.props.gameover || this.state.state === 'atack'}
          onClick={this.atack}
        >
          Atacar
        </button>

        <div className={`Player-sprite-${this.props.player.id} ${this.getPlayerState()}`}></div>
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
