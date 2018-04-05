import React, { Component } from 'react';

import classes from './GradientPool.css'

class GradientPool extends Component {
    render() {
        return <div className={classes.Container}>
            <div className={classes.GradientPool}></div>
        </div>
    }
}

export default GradientPool