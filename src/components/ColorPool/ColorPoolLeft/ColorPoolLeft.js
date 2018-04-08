import React, { Component } from 'react';

import classes from './ColorPoolLeft.css'
// const colorTable = require('./../../seed')

class ColorPoolLeft extends Component {
    state = {
        hexCode: null,
        skew: 'skew(25deg)',
        width: '60%',
        zIndex: 1
    }

    showHexHandler = () => {
        this.setState({
            hexCode: 'here is hex',
            skew: 'skew(0)',
            width: '90%',
            zIndex: 100
        })
    }

    hideHexHandler = () => {
        this.setState({
            hexCode: null,
            skew: 'skew(25deg)',
            width: '60%',
            zIndex: 0
        })
    }

    render() {
        const style = {
            transform: this.state.skew,
            width: this.state.width,
            zIndex: this.state.zIndex
        }
        return  <div 
                    onMouseEnter={this.showHexHandler}
                    onMouseLeave={this.hideHexHandler}
                    style={style}
                    className={classes.LeftBox}
                    id="leftBox"
                    onClick={this.colorPickHandler}>
                {this.state.hexCode}
        </div>
    }
}

export default ColorPoolLeft;