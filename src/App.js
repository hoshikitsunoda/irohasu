import React, { Component } from 'react';
import './App.css';

import ColorPool from './containers/ColorPool/ColorPool'
import GradientPool from './containers/GradientPool/GradientPool'

class App extends Component {
  render() {
    return (
      <div>
        <ColorPool />
        <GradientPool />
      </div>
    );
  }
}

export default App;
