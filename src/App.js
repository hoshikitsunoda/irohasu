import React, { Component } from 'react';
import './App.css';

import ColorPools from './containers/ColorPools/ColorPools'
import GradientPool from './containers/GradientPool/GradientPool'
import Palette from './containers/Palette/Palette'

class App extends Component {
  render() {
    return (
      <div>
        <Palette />
        <ColorPools />
        <GradientPool />
      </div>
    );
  }
}

export default App;
