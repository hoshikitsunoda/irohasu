import React, { Component } from 'react';

import classes from './GradientPool.css'

class GradientPool extends Component {
    state = {
        hidden: false
    }

    showHexHandler = () => {
        this.setState({
            hidden: true
        })
    }

    hideHexHandler = () => {
        this.setState({
            hidden: false
        })
    }

    render() {
        const isHidden = this.state.hidden
                            ? null
                            : classes.Hidden
        return <div 
            onMouseEnter={this.showHexHandler}
            onMouseLeave={this.hideHexHandler}
            id="gradient"
            className={classes.Container}>
                <div 
                    id="gradientText" 
                    className={classes.GradientPool + ' ' + isHidden}>
                    linear-gradient(to right, #c71a1b, #d7bd8c)    
                </div>
        </div>
    }
}

export default GradientPool