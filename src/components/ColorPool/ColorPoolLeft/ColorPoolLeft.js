import React, { Component } from 'react';

import InfoBox from '../../../containers/InfoBox/InfoBox'
import classes from './ColorPoolLeft.css'

class ColorPoolLeft extends Component {
    state = {
        skew: 'skew(25deg)',
        width: '60%',
        zIndex: 1,
        hidden: false
    }

    showHexHandler = () => {
        this.setState({
            skew: 'skew(0)',
            width: '90%',
            zIndex: 100,
            hidden: true
        })
    }

    hideHexHandler = () => {
        this.setState({
            skew: 'skew(25deg)',
            width: '60%',
            zIndex: 0,
            hidden: false
        })
    }

    render() {
        const isHidden = this.state.hidden
                            ? null
                            : classes.Hidden
        const style = {
            transform: this.state.skew,
            width: this.state.width,
            zIndex: this.state.zIndex
        }

        const iconStyle = {
            position: 'absolute',
            top: '55%',
            left: '42%',
            color: '#FFFBEF',
            opacity: '0.8'
        }

        return  <div 
                    onMouseEnter={this.showHexHandler}
                    onMouseLeave={this.hideHexHandler}
                    style={style}
                    className={classes.LeftBox}
                    id="leftBox"
                    onClick={this.colorPickHandler}>
                <div 
                    id="leftText"
                    className={classes.LeftText + ' ' + isHidden}>
                    #c71a1b
                </div>
                <i 
                    className="fas fa-info-circle"
                    style={iconStyle}></i>
                <InfoBox />
        </div>
    }
}

export default ColorPoolLeft;