import React, { Component } from 'react';
import './App.css';

import ColorPool from './containers/ColorPool/ColorPool'
import GradientPool from './containers/GradientPool/GradientPool'
import Palette from './containers/Palette/Palette'

class App extends Component {
  render() {
    return (
      <div>
        <Palette />
        <ColorPool />
        <GradientPool />
      </div>
    );
  }
}

export default App;
