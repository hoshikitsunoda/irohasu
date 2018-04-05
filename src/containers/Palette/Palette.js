import React, { Component } from 'react';

import classes from './Palette.css'
import ColorBox from '../../components/ColorBox/ColorBox'

class Palette extends Component {
    render() {
        return <div className={classes.Container}>
            <ColorBox />
        </div>
    }
}

export default Palette