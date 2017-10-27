import React from 'react';
import { connect } from 'react-redux';

import { reset } from '../actions/game';

export class Reset extends React.Component {

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div>
        <button
          disabled={!this.props.gameover}
          onClick={this.reset}
        >
          Reiniciar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  gameover: state.game.over
});

const mapDispatchToProps = (dispatch, props) => ({
  reset: (playerId) => dispatch(reset(playerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
