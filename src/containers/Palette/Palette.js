import React, { Component } from 'react';

import classes from './Palette.css'
import ColorBox from '../../components/ColorBox/ColorBox'

const row = []
for(let i = 0; i < 100; i++) {
    row.push(i)
}

class Palette extends Component {
    render() {
        return <div className={classes.Container}>
            <div className={classes.ColorWrapper}>
                {row.map(index => {
                    return <ColorBox 
                                key={index} 
                                id={index} />
                })}
            </div>
        </div>
    }
}

export default Palette