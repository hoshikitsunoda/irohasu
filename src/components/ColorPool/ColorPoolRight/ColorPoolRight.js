import React, { Component } from 'react';

import InfoBoxRight from '../../../containers/InfoBox/InfoBoxRight/InfoBoxRight'
import classes from './ColorPoolRight.css'

class ColorPoolRight extends Component {
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

    showIconHandler = () => {
        this.setState({
            active: !this.state.active
        })

        const isActive = this.state.active
                            ? 0
                            : 1

        document.querySelector('#infoBoxRight').style.opacity = isActive
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
            right: '42%',
            color: '#FFFBEF',
            opacity: '0.8',
            zIndex: 100,
            transition: 'all 0.3s ease-in-out'
        }
        
        return  <div 
                    onMouseEnter={this.showHexHandler}
                    onMouseLeave={this.hideHexHandler}
                    style={style}
                    className={classes.RightBox}
                    id="rightBox"
                    onClick={this.colorPickHandler}>
                <div 
                    id="rightText"
                    className={classes.RightText + ' ' + isHidden}>
                    #d7bd8c
                </div>
                <div
                    onClick={this.showIconHandler}
                    style={iconStyle}
                    className={isHidden}>
                    <i className="fas fa-info-circle"></i>
                </div>
                <InfoBoxRight />
        </div>
    }
}

export default ColorPoolRight;