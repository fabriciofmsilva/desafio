import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Player from './components/Player';
import Reset from './components/Reset';

import './App.css';

const store = configureStore();
const state = store.getState();

console.log(store);
console.log(state);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Game</h1>
          {state.game.players.map((player) => (<Player player={player} key={player.id} />))}
          
          <Reset />
        </div>
      </Provider>
    );
  }
}

export default App;
