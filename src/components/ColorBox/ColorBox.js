import React, { Component } from 'react';

import classes from './ColoBox.css'

const colorTable = require('./../../seed')

class ColorBox extends Component {
    state = {
        active: false
    }

    zoomHandler = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const isActive = this.state.active
                            ? classes.Active
                            : null
        const bgColor = {
            backgroundColor: colorTable.colorTable1[this.props.id]
        }
        return (
            <div
                onMouseEnter={this.zoomHandler}
                onMouseLeave={this.zoomHandler} 
                style={bgColor}
                id={this.props.id}
                className={classes.Box + ' ' + isActive}></div>
        )
    }
}

export default ColorBox;