import React, { Component } from 'react';

import InfoBoxLeft from '../../../containers/InfoBox/InfoBoxLeft/InfoBoxLeft'
import classes from './ColorPoolLeft.css'

class ColorPoolLeft extends Component {
    state = {
        skew: 'skew(25deg)',
        width: '60%',
        zIndex: 1,
        hidden: false,
        active: false
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

    showIconHandler = () => {
        this.setState({
            active: !this.state.active
        })

        const isActive = this.state.active
                            ? 0
                            : 0.8

        document.querySelector('#infoBoxLeft').style.opacity = isActive
    }

    hideIconHandler = () => {
        this.setState({
            active: false
        })
        document.querySelector('#infoBoxLeft').style.opacity = '0'
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
            opacity: '0.8',
            filter: 'drop-shadow(1px 1px 3px rgba(68, 68, 68, 0.6))',
            zIndex: 100,
            transition: 'all 0.3s ease-in-out'
        }

        return  <div 
                    onMouseEnter={this.showHexHandler}
                    onMouseLeave={(event) => {
                        this.hideIconHandler()
                        this.hideHexHandler()
                    }}
                    style={style}
                    className={classes.LeftBox}
                    id="leftBox"
                    onClick={this.colorPickHandler}>
                <div 
                    id="leftText"
                    className={classes.LeftText + ' ' + isHidden}>
                    #c71a1b
                </div>
                <div
                    onClick={this.showIconHandler}
                    style={iconStyle}
                    className={isHidden}>
                    <i className="fas fa-info-circle"></i>
                </div>
                <InfoBoxLeft />
        </div>
    }
}

export default ColorPoolLeft;