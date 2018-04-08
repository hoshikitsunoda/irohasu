import React, { Component } from 'react';

import classes from './ColorPool.css'
const colorTable = require('./../../seed')

class ColorPool extends Component {
    render() {
        return <div className={classes.Container}>
            <div className={classes.Border}></div>
                <div className={classes.ColorPool}>
                    <div 
                        className={classes.LeftBox}
                        id="leftBox"
                        onClick={this.colorPickHandler}></div>
                    <div 
                        className={classes.RightBox}
                        id="rightBox"
                        onClick={this.colorPickHandler}></div>
                </div>
        </div>
    }
}

export default ColorPool;