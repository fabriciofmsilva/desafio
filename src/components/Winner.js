import React from 'react';
import { connect } from 'react-redux';

import { reset } from '../actions/game';

import './Winner.css';

export class Winner extends React.Component {

  getWinner = () => {
    return this.props.players.filter((player) => {
      return player.life > 0;
    });
  };

  render() {
    return (
      <div className={`Winner ${this.props.gameover ? 'zoomIn' : 'hidden'}`}>
        {this.getWinner()[0].name} venceu!
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  gameover: state.game.over,
  players: state.game.players
});

export default connect(mapStateToProps)(Winner);
