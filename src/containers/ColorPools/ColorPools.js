import React, { Component } from 'react';

import ColorPoolLeft from '../../components/ColorPool/ColorPoolLeft/ColorPoolLeft'
import ColorPoolRight from '../../components/ColorPool/ColorPoolRight/ColorPoolRight'
import GradientDirection from '../../components/GradientDirection/GradientDirection'
import classes from './ColorPools.css'

class ColorPools extends Component {
    render() {
        return <div className={classes.Container}>
            <div className={classes.ColorPool}>
                <ColorPoolLeft />
                <ColorPoolRight />
            </div>
            <GradientDirection />
        </div>
    }
}

export default ColorPools;