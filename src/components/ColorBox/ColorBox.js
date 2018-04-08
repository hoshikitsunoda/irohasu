import React, { Component } from 'react';

import classes from './ColoBox.css'

const colorTable = require('./../../seed')

class ColorBox extends Component {
    state = {
        active: false,
        bgColor: colorTable.colorTable1[this.props.id]
    }

    zoomHandler = () => {
        this.setState({
            active: !this.state.active
        })
    }

    colorPickHandler(event) {
        document.querySelector('#leftBox').style.backgroundColor = colorTable.colorTable1[event.target.id]
    }

    render() {
        const isActive = this.state.active
                            ? classes.Active
                            : null
        const bgColor = {
            backgroundColor: this.state.bgColor
        }
        return (
            <div
                onClick={this.colorPickHandler}
                onMouseEnter={this.zoomHandler}
                onMouseLeave={this.zoomHandler} 
                style={bgColor}
                id={this.props.id}
                className={classes.Box + ' ' + isActive}></div>
        )
    }
}

export default ColorBox;