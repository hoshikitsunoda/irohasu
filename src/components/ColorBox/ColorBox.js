import React, { Component } from 'react';

import classes from './ColorBox.css'

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
        const backGroundLeft = colorTable.colorTable1[event.target.id]
        const backGroundRight = colorTable.colorTable2[event.target.id]

        const $select = document.querySelector('#select').value

        document.querySelector('#leftBox').style.backgroundColor = backGroundLeft
        document.querySelector('#rightBox').style.backgroundColor = backGroundRight
        document.querySelector('#leftText').innerHTML = backGroundLeft
        document.querySelector('#rightText').innerHTML = backGroundRight
        document.querySelector('#gradient').style.background = 
            "linear-gradient(" + $select + ", " + backGroundLeft + ", " + backGroundRight + ")"
        document.querySelector('#gradientText').innerHTML = 
            "linear-gradient(" + $select + ", " + backGroundLeft + ", " + backGroundRight + ")"
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