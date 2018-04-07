import React, { Component } from 'react';

import classes from './ColoBox.css'

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
        return (
                <div
                    onMouseEnter={this.zoomHandler}
                    onMouseLeave={this.zoomHandler} 
                    onClick={this.zoomHandler}
                    className={classes.Box + ' ' + isActive}></div>
        )
    }
}

export default ColorBox;