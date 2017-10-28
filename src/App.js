import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Player from './components/Player';
import Reset from './components/Reset';
import Winner from './components/Winner';

import './App.css';

const store = configureStore();
const state = store.getState();

console.log(store);
console.log(state);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main className="App">
          <header className="App-header">
            <h1 className="App-title">The Game</h1>
          </header>
          <div className="App-players">
          {state.game.players.map((player) => (<Player player={player} key={player.id} />))}
          </div>
          <Winner />
          <Reset />
        </main>
      </Provider>
    );
  }
}

export default App;
