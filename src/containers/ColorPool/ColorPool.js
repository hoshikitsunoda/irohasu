import React, { Component } from 'react';

import classes from './ColorPool.css'

class ColorPool extends Component {
    render() {
        return <div className={classes.Container}>
            <div className={classes.Border}></div>
            <div className={classes.ColorPool}>
                <div className={classes.LeftBox}></div>
                <div className={classes.RightBox}></div>
            </div>
        </div>
    }
}

export default ColorPool;